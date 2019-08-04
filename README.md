# Truffle Solc Select

This plugin extends Truffle smart contracts version verification to handle multiple versions and uses Solc to catch and make recommendations to any smart contacts that fail.   

# [](#writing-external-scripts)Writing External Scripts

Often you may want to run external scripts that interact with your contracts. Truffle provides an easy way to do this, bootstrapping your contracts based on your desired network and connecting to your Ethereum client automatically per your [project configuration](/docs/advanced/configuration).

## [](#command)Command

To run an external script, perform the following:

    $ truffle exec <path/to/file.js>

Refer to [Truffle Commands Reference](/docs/truffle/reference/truffle-commands#exec) for more information about this command, such as what options it accepts.

## [](#file-structure)File structure

In order for external scripts to be run correctly, Truffle expects them to export a function that takes a single parameter as a callback:

    module.exports = function(callback) {
      // perform actions
    }

You can do anything you'd like within this script, so long as the callback is called when the script finishes. The callback accepts an error as its first and only parameter. If an error is provided, execution will halt and the process will return a non-zero exit code.

# [](#third-party-plugin-commands)Third-party plugin commands

**Note**: This feature is new and still in a barebones state. Please let us know how we can improve it!

## [](#plugin-installation-usage)Plugin installation / usage

1.  Install the plugin from NPM.

        npm install --save-dev truffle-plugin-hello

2.  Add a `plugins` section to your Truffle config.

        module.exports = {
          /* ... rest of truffle-config */

          plugins: [
            "truffle-plugin-hello"
          ]
        }

3.  Run the command

        $ truffle run hello
        Hello, World!
