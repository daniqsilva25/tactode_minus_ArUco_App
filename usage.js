const tactode = require('./tactode_cv_alg.js')
const params = require('./params.js')

// Process arguments
const args = process.argv
const img = args[2]
const debug = args[3] === 'debugOn'

console.log(`+++\nstarted : ${params.getCurrentTime()}\n`)

// Load object from HOG&SVM class for detection of teeth
const td = new params.HOGSVM4detection()
td.loadFiles()

// Load object from HOG&SVM class for tiles classification
const tc = new params.HOGSVM()
tc.loadFiles()

// Run Tactode's CV algorithm
const res = tactode.run(img, debug, td, tc)

if (res !== -1) {
  // Print result
  params.printResult(res.rectsArr, res.numTiles)
  // Show result
  params.showResult(res.src, res.rectsArr, debug)
}

console.log(`\nfinished: ${params.getCurrentTime()}\n+++`)
