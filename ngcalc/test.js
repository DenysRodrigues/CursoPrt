// import { browser } from "protractor";

// import { element } from "protractor"

describe('Calculadora', function(){
    beforeEach(function () {
        browser.get('https://ng-calc.herokuapp.com');        
    });

    it('somar valores', function (){
        
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();

        var resultado = element(by.binding('latest'));
        expect(resultado.getText()).toEqual('5')
    });

    
    describe('resultados', function () {

        var first, second, calcButton;

        beforeEach(function () {
            first = element(by.model('first'));
            second = element(by.model('second'));
            calcButton =  element(by.id('gobutton'));
        })

        it('verificar lista de resultados', function(){

            cenarios =[
                {first: 2, second: 2},
                {first: 3, second: 3},
                {first: 4, second: 11}
            ]

            cenarios.forEach(function(cenario){
                first.sendKeys(cenario.first),
                second.sendKeys(cenario.second),
                calcButton.click();
                
            });

            var memoria = element.all(by.repeater('result in memory').column('result.value'));
            memoria.then(function (resultado) {
                expect(resultado.length).toEqual(3);
                expect(resultado[0].getText()).toEqual('15');
                expect(resultado[1].getText()).toEqual('6');
                expect(resultado[2].getText()).toEqual('4');
            })
        });
    });
});