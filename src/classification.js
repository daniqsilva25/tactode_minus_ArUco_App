// const tf = require('@tensorflow/tfjs')
// const tfnode = require('@tensorflow/tfjs-node')
const cv = require('opencv4nodejs')
const params = require('./params.js')

/*
async function loadTFModel(path = "") {
  const handlePath = tfnode.io.fileSystem(path)
  const model = await tf.loadGraphModel(handlePath)
  console.log(model.inputs)
} */

// loadTFModel('./models/VGG19/converted/model.json')

function runHOGSVM (src = new cv.Mat(), rectsArr = [], c = new params.HOGSVM()) {
  let numTiles = 0
  rectsArr.forEach(line => {
    line.forEach(tile => {
      const roi = src.getRegion(tile.rect)
      const resized = roi.resize(
        c.size,
        c.size,
        0, 0, cv.INTER_AREA
      )
      const descriptors = c.hog.compute(resized)
      const prediction = c.svm.predict(descriptors)
      const typeIndex = Math.floor(prediction / 100)
      const pieceIndex = prediction % 100
      const classLine = c.classes[typeIndex].split(':')
      const type = classLine[0]
      const piece = classLine[1].split(',')[pieceIndex]
      tile.tactode.type = type
      tile.tactode.piece = piece
      numTiles++
    })
  })
  return { rectsArr, numTiles }
}

module.exports = { runHOGSVM }
