# Node.js app for Tactode without ArUco markers
Computer vision algorithm developed in JavaScript/Node.js that performs segmentation and 2D recognition of Tactode tiles in an image. This work was developed during a M.Sc. thesis named "Computer Vision System for Tactode Programming". The document is available [here](https://www.researchgate.net/publication/348621971_Computer_Vision_System_for_Tactode_Programming).

## Necessary tools
*Ubuntu*
- Git: `sudo apt install git`
- npm: `sudo apt install npm`
- node `sudo apt install nodejs`

## Installation
Start by cloning the repo: `git clone https://github.com/daniqsilva25/tactode_minus_ArUco_App`

Install app dependencies: `cd tactode_minus_ArUco_App && npm install`

## Scripts explained
- [_tactode_cv_alg.js_](https://github.com/daniqsilva25/tactode_minus_ArUco_App/blob/master/tactode_cv_alg.js): this is the **main** script containing the computer vision algorithm for segmenting and classifying tiles
- [_params.js_](https://github.com/daniqsilva25/tactode_minus_ArUco_App/blob/master/params.js): this is an auxiliary script containing global classes and functions
- [_usage.js_](https://github.com/daniqsilva25/tactode_minus_ArUco_App/blob/master/usage.js): this is a script that exemplifies how to use the **main** script and its returning values

## Folders explained
- [_/debug_](https://github.com/daniqsilva25/tactode_minus_ArUco_App/tree/master/debug): folder contaning the debug images
- [_/test_imgs_](https://github.com/daniqsilva25/tactode_minus_ArUco_App/tree/master/test_imgs): folder containing the test images
- [_/trained_models_](https://github.com/daniqsilva25/tactode_minus_ArUco_App/tree/master/trained_models): folder containing configurations of HOGs, trained SVM models and a .txt file containing the definition of the tiles classes

## Usage
### Running pre-defined scripts
Run a pre-defined test script without debug (does not save the resulting image): `npm test`

Run a pre-defined test script with debug (saves the resulting image): `npm debug`

Run a pre-defined JavaScript standard verification script: `npm verify-std`

### Running custom scripts
`node usage.js [image] [debug]`

**Arguments explanation**
- *image*: image path for running the algorithm
- *debug*: with debug ('_debugOn_') or without debug (empty space)

**Examples**
- `node usage.js test_imgs/img_6.jpg`
- `node usage.js test_imgs/img_3.jpg debugOn`

