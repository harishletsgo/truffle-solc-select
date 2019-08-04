#! /usr/bin/env node
var shell = require("shelljs");
/**
 * Outputs `Hello, World!` when running `truffle run hello`,
 * or `Hello, ${name}` when running `truffle run hello [name]`
 * @param {Config} config - A truffle-config object.
 * Has attributes like `truffle_directory`, `working_directory`, etc.
 */
module.exports = async (config) => {
  // config._ has the command arguments.
  // config_[0] is the command name, e.g. "hello" here.
  // config_[1] starts remaining parameters.
  if (config.help) {
    console.log(`Usage: truffle run multicompile`);
    done(null, [], []);    
    return;
  }

  let default = config._.length > 1 ? config._[1] : 'contracts';
  //console.log(`Hello, ${name}`);

  var solc_versions = ["v0.5.10","v0.5.9","v0.5.8","v0.4.26","v0.5.7","v0.5.6","v0.5.5","v0.5.4","v0.5.3","v0.5.2","v0.5.1","v0.5.0","v0.4.25","v0.4.24","v0.4.23","v0.4.22","v0.4.21","v0.4.20","v0.4.19","v0.4.18","v0.4.17","v0.4.16","v0.4.15","v0.4.14","v0.4.13","v0.4.12","v0.4.11","v0.4.10","v0.4.9","v0.4.8"];

solc_versions.forEach(function(element) {
	solc = "/usr/local/bin/solc-" + element 
    //console.log(solc);
    url = "curl -s -f -L \"https:\/\/github.com\/ethereum\/solidity\/releases\/download\/"+element+"\/solc-static-linux\" -o \""+solc+"\""
    var newver = shell.exec(url)
});
}



//var solc_versions = shell.exec("curl --silent \"https:\/\/api.github.com\/repos\/ethereum\/solidity\/releases\" | grep \'\"tag_name\":\' | sed -E \'s\/.*\"([^\"]+)\".*\/\\1\/\'");