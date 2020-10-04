# Node.js app for Tactode without ArUco markers
Computer vision algorithm developed in JavaScript/Node.js that performs 2D segmentation and classification of Tactode tiles in an image.

## Necessary tools
*Ubuntu*
- Git: `sudo apt install git`
- npm: `sudo apt install npm`
- node `sudo apt install nodejs`

## Installation
Start by cloning the repo: `git clone https://github.com/daniqsilva25/tactode_minus_ArUco_App`

Install app dependencies: `cd tactode_minus_ArUco_App && npm install`

## Usage
### Running pre-defined scripts
Run a pre-defined test script without debug (does not save the resulting image): `npm test`

Run a pre-defined test script with debug (saves the resulting image): `npm debug`

Run a pre-defined JavaScript standard verification script: `npm verify-std`

### Running custom scripts
`node main.js [image] [debug]`

**Arguments explanation**
- *image*: image path for running the algorithm
- *debug*: with debug ('_debugOn_') or without debug (empty space)

**Examples**
- `node main.js test_imgs/img_6.jpg`
- `node main.js test_imgs/img_3.jpg debugOn`

