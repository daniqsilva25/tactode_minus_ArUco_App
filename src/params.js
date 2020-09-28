const hogsvmClassification = {
  svm: 'models/HOGSVM/svm_classifier.yaml',
  hog: 'models/HOGSVM/hog_classifier.yaml',
  classes: 'models/HOGSVM/classes.txt',
  size: 32
}

const hogsvmDetection = {
  svm: 'dependencies/svm_detector.yaml',
  hog: 'dependencies/hog_detector.yaml',
  size: {
    width: 64,
    height: 32
  }
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

module.exports = { hogsvmClassification, hogsvmDetection, getCurrentTime }
