//the babel js is a transpiler or in other words a transcompiler for the javascript
//!Transpilling is kinda translating the source codes for compactibility with all browsers
//!you'll need to install the @babel/core which is containing the functionalities of the babel itself
//!Then you need @babel/cli which is the command to use babel and transpile our code from the command line
//!Then finaly @babel/preset-env  it will help us to configure what browsers we want to support by using babel !Which becomes different when it comes to react and typescript
//!we must create a config file for the babel i.e .babelrc where we mean that we want to use the preset library that we installed
//!Then we have to specify the path where our transpiled code will be going(as in the output) by just specifying the path of the babel.js in the node_modules folder and next the name of the input file and then --out-file and lasly the name an dor the path of the output file all the four separated by spaces
//We need to contol the browsers that we need to support from the babel config file in the preset we define the targets object and define the browsers that we are targetting to transpile for
