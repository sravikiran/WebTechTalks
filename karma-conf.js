// Karma configuration
// Generated on Mon Jul 14 2014 23:05:48 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        '//code.jquery.com/jquery-1.11.0.min.js',
        'scripts/jquery-ui-1.10.3.js',
        'https://code.angularjs.org/1.3.0-beta.5/angular.js',
        'https://code.angularjs.org/1.3.0-beta.5/angular-route.js',
        'https://code.angularjs.org/1.3.0-beta.5/angular-animate.js',
        'http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.10.0.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'public/app/*.js',
        'public/tests/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
