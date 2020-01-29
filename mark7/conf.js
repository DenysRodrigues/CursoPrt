// Arquivo de configuração de Protractor

exports.config = {
     directConnect: true,
    //seleniumAddress: 'http://selenium_server:4444/wd/hub',
    framework: 'jasmine2',
    specs: ['specs/**-spec.js'],
    //baseURL:'http://localhost:5000',
    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(10000),
            browser.ignoreSynchronization = true;

        TIMEOUT = 3000;

        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenshotsFolder: './shots',
            takeSreenshots: true,
            cleanDestination: false,
            fixedScreenshotName: true
        }))


        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayErrorMessages: true,
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors: {
                enabled: true
            }
        }))
    },
    capabilities: {
        'browserName': 'chrome'
    }
}