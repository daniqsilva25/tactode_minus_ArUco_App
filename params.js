const fs = require('fs')
const cv = require('opencv4nodejs')
const path = require('path')

// GLOBAL VARS
const debugFolder = 'debug'

// CLASSES
class HOGSVM4detection {
  constructor (
    hogFile = 'trained_models/hog_detector.yaml',
    svmFile = 'trained_models/svm_detector.yaml',
    w = 64, h = 32,
    hog = new cv.HOGDescriptor(),
    svm = new cv.SVM()) {
    this.hogFile = hogFile
    this.svmFile = svmFile
    this.size = {
      width: w,
      height: h
    }
    this.hog = hog
    this.svm = svm
  }

  loadFiles () {
    this.hog.load(this.hogFile)
    this.svm.load(this.svmFile)
  }
}

class HOGSVM {
  constructor (
    hogFile = 'trained_models/hog_classifier.yaml',
    svmFile = 'trained_models/svm_classifier.yaml',
    classesFile = 'trained_models/classes.txt',
    size = 32,
    hog = new cv.HOGDescriptor(),
    svm = new cv.SVM()) {
    this.hogFile = hogFile
    this.svmFile = svmFile
    this.classesFile = classesFile
    this.classes = fs.readFileSync(classesFile).toString().split('\n')
    this.size = size
    this.hog = hog
    this.svm = svm
  }

  loadFiles () {
    this.hog.load(this.hogFile)
    this.svm.load(this.svmFile)
  }
}

// FUNCTIONS
function showResult (src = new cv.Mat(), tilesArr = [], debug = false) {
  tilesArr.forEach(row => {
    row.forEach(tile => {
      const x = tile.rect.x
      const y = tile.rect.y
      const color = new cv.Vec3(255 * Math.random(), 255 * Math.random(), 255 * Math.random())
      src.drawRectangle(tile.rect, color, 6)
      src.putText(tile.tactode.piece, new cv.Point2(x, y), 2, 1.2, color, cv.LINE_4, 6)
    })
  })
  cv.imshow("result", src.rescale(0.3))
  cv.waitKey(5000) // wait 5000 ms or click any key to close the window 
  cv.destroyAllWindows()
  if (debug) {
    cv.imwrite(path.join(debugFolder, "result.jpg"), src)
  }
}


function printResult (tiles = [], numberOfTiles = -1) {
  const numTiles = numberOfTiles
  let resultStr = ` Number of tiles found: ${numTiles}\n\n `
  tiles.forEach(line => {
    line.forEach(piece => {
      resultStr += `| ${piece.tactode.piece} `
    })
    resultStr += '|\n '
  })
  console.log(resultStr)
}

function getCurrentTime () {
  const date = new Date()
  let dayOfMonth = date.getDate(); dayOfMonth = (dayOfMonth < 10) ? `0${dayOfMonth}` : dayOfMonth
  let month = date.getMonth(); month = (month < 10) ? `0${month + 1}` : month + 1
  let year = date.getFullYear(); year = (year < 10) ? `0${year}` : year
  let hours = date.getHours(); hours = (hours < 10) ? `0${hours}` : hours
  let minutes = date.getMinutes(); minutes = (minutes < 10) ? `0${minutes}` : minutes
  let seconds = date.getSeconds(); seconds = (seconds < 10) ? `0${seconds}` : seconds
  return `${dayOfMonth}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

module.exports = { debugFolder, HOGSVM4detection, HOGSVM, printResult, showResult, getCurrentTime }
