const tactode = require('./tactode_cv_alg.js')
const classification = require('./classification.js')
const params = require('./params.js')

// Process arguments
const args = process.argv
const method = args[2]
const img = args[3]
const debug = args[4] === 'debug'

console.log(`+++\nstarted : ${params.getCurrentTime()}\n`)

// Load object from HOG&SVM class for detection of teeth
const d = new params.HOGSVM4detection()
d.loadFiles()
// Run Tactode's CV algorithm
const ret = tactode.run(img, debug, d)

if (!ret.invalidRoiFound) {
  if (method === 'HOGSVM') {
    // Load object from HOG&SVM class for tiles classification
    const c = new params.HOGSVM()
    c.loadFiles()
    // Perform classification
    const res = classification.runHOGSVM(ret.src, ret.rectsArr, c)
    // Show result
    params.printResult(res.rectsArr, res.numTiles)
  } else {
    console.log('ERROR: Unrecognized method!')
  }
} else {
  console.log('ERROR: Invalid ROI found!')
}

console.log(`\nfinished: ${params.getCurrentTime()}\n+++`)
