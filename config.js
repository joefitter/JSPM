System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "jspm-test": "npm:jspm-test@0.0.47",
    "jspm-test2": "npm:jspm-test2@0.0.7",
    "orchestra-bingo": "npm:orchestra-bingo@14.2.6",
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:backbone.babysitter@0.1.8": {
      "backbone": "npm:backbone@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.cocktail@0.5.10": {
      "underscore": "npm:underscore@1.5.2"
    },
    "npm:backbone.marionette@2.4.2": {
      "backbone": "npm:backbone@1.2.1",
      "backbone.babysitter": "npm:backbone.babysitter@0.1.8",
      "backbone.wreqr": "npm:backbone.wreqr@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.radio@1.0.0": {
      "backbone": "npm:backbone@1.2.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.stickit@0.9.2": {
      "backbone": "npm:backbone@1.2.1",
      "underscore": "npm:underscore@1.5.2"
    },
    "npm:backbone.wreqr@1.3.3": {
      "backbone": "npm:backbone@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone@1.2.1": {
      "jquery": "npm:jquery@2.1.4",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:browsernizr@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:hammerjs@2.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:handlebars@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "uglify-js": "npm:uglify-js@2.3.6"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-hammerjs@2.0.0": {
      "hammerjs": "npm:hammerjs@2.0.4",
      "jquery": "npm:jquery@2.1.4"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jspm-test2@0.0.7": {
      "jspm-test": "npm:jspm-test@0.0.46"
    },
    "npm:jspm-test@0.0.46": {
      "backbone": "npm:backbone@1.2.1",
      "backbone.cocktail": "npm:backbone.cocktail@0.5.10",
      "backbone.marionette": "npm:backbone.marionette@2.4.2",
      "backbone.radio": "npm:backbone.radio@1.0.0",
      "backbone.stickit": "npm:backbone.stickit@0.9.2",
      "browsernizr": "npm:browsernizr@1.0.2",
      "handlebars": "npm:handlebars@1.3.0",
      "i18next-client": "npm:i18next-client@1.10.2",
      "jquery": "npm:jquery@2.1.4",
      "jquery-hammerjs": "npm:jquery-hammerjs@2.0.0",
      "lodash": "npm:lodash@3.10.1",
      "numeral": "npm:numeral@1.5.3"
    },
    "npm:jspm-test@0.0.47": {
      "backbone": "npm:backbone@1.2.1",
      "backbone.cocktail": "npm:backbone.cocktail@0.5.10",
      "backbone.marionette": "npm:backbone.marionette@2.4.2",
      "backbone.radio": "npm:backbone.radio@1.0.0",
      "backbone.stickit": "npm:backbone.stickit@0.9.2",
      "browsernizr": "npm:browsernizr@1.0.2",
      "handlebars": "npm:handlebars@1.3.0",
      "i18next-client": "npm:i18next-client@1.10.2",
      "jquery": "npm:jquery@2.1.4",
      "jquery-hammerjs": "npm:jquery-hammerjs@2.0.0",
      "lodash": "npm:lodash@3.10.1",
      "numeral": "npm:numeral@1.5.3"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ms-signalr-client@2.2.2": {
      "jquery": "npm:jquery@2.1.4"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wordwrap": "npm:wordwrap@0.0.3"
    },
    "npm:orchestra-bingo@14.2.6": {
      "gua-browserify": "github:BedeGaming/gua-browserify@master",
      "ms-signalr-client": "npm:ms-signalr-client@2.2.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:uglify-js@2.3.6": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

