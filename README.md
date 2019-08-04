<img src="https://truffleframework.com/img/truffle-logo-dark.svg" width="200">

-----------------------



# Truffle Solc Select

This plugin can be used to compile smart contracts that require multiple solidity compiler versions. It does this by installing various versions on install and automatically select the right version based on the smart contract pragma version.


**Note**: This feature is new and still in a super experimental state. Not ready for production!!!!

## [](#plugin-installation-usage)Plugin installation / usage

1.  Install the plugin from NPM.

        npm install --save-dev truffle-solc-select

2.  Add a `plugins` section to your Truffle config.

        module.exports = {
          /* ... rest of truffle-config */

          plugins: [
            "truffle-solc-select"
          ]
        }

3.  Run the command

        $ truffle run multicompile
