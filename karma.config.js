module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    // list of files / patterns to load in the browser
    // prefer to run on the built ones in public
    files: [
      'public/javascript/vendor.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'public/javascript/templates.js',
      'public/javascript/app.js',
      'app/**/*.spec.js'
    ],
    // list of files to exclude
    exclude: [
      
    ],
    preprocessors: {},
    reporters: ['progress'],
    // web server port
    port: 9876,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
