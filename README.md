<img src="https://truffleframework.com/img/truffle-logo-dark.svg" width="200">

[![Join the chat at https://gitter.im/consensys/truffle](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/consensys/truffle?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


-----------------------



# Truffle Solc Select

This plugin extends Truffle smart contracts version verification to handle multiple versions and uses Solc to catch and make recommendations to any smart contacts that fail.   


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
