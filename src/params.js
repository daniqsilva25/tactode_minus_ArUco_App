const fs = require('fs')
const cv = require('opencv4nodejs')

// GLOBAL VARS
const debugFolder = 'debug'

// CLASSES
class HOGSVM4detection {
  constructor (
    hogFile = 'dependencies/hog_detector.yaml',
    svmFile = 'dependencies/svm_detector.yaml',
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
    hogFile = 'models/HOGSVM/hog_classifier.yaml',
    svmFile = 'models/HOGSVM/svm_classifier.yaml',
    classesFile = 'models/HOGSVM/classes.txt',
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

module.exports = { debugFolder, HOGSVM4detection, HOGSVM, printResult, getCurrentTime }
