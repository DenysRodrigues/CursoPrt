// Arquivo de configuração de Protractor

exports.config = {
    directConnect: true, 
    framework: 'jasmine2',
    specs: ['test.js'],
    capabilities:{
        'browserName': 'chrome'
    }
}