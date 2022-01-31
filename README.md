# Webpack
(current version: 5)

v4: https://frontendmasters.com/courses/webpack-fundamentals/

Handbook:
 https://github.com/yuhaoju/webpack-config-handbook 
https://githubhelp.com/captainhou/webpack-config-handbook 

Helps to deliver and build moduleable web application with JS.

Important aspect of modules
* CommonJS
* RequiredJS 
* UMD  - Universal Module Definition 
* AMD  - Asynchronously Module Definition
* ESM - EmaScript Modules 

Why?
Choosing ESM (import - export)
By abstracting the modules into its own layer - the manage to solve async nature (module deferring). Code splitting, tree-shake-ability…
Things that others modules pattern wouldn’t be possible to build 

Understanding ESM 
https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#file-esm-package-md


https://webpack.js.org/plugins/module-federation-plugin/

* Mode
    * Depending on the mode type - Webpack built-in optimizations that correspond
    * Type: development | productions (default) | none 
* Entry
    * It’s the file that you want to use to build a bundle
* Output 
    * It’s where and how you want to put to you builded bundle
* Loaders
    * Tells Webpack how to treat a set of files before add include them as a dependency
    * Function which modify files 
    * Transform the files
* Chaining loaders:
    * Files can be treat by a list of loaders in a expecific other 
* Rules
    * Tells Webpack what need to do  to a set files 
* Plugins
    * Allow us to communicate the Webpack’s compilation process 
    * Allows full access to the compiler and the current compilation 



* Presets
    * Is a preconfigure Webpack rules or modules or plugins 