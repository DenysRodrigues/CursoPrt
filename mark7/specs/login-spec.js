const LoginPage = require('../pages/login-page')

/**Regras de buscas pelo css
 * ^ => Comeca com
 * * => Contains?
 * $ => Termina com
 * DRY => Don't repeat YourSelf
 */

describe('Dado que acessei a pagina login', function () {
    beforeEach(function () {
        browser.get(login_page.path);
    });
    
    const login_page = new LoginPage;

    it('quando a senha é inválida', function () {
        login_page.with('denysrodrigues5@hotmail.com', '123abc')
        expect(login_page.alert.getText()).toEqual('Senha inválida.');        
    });

    it('quando o usuário não está cadastrado', function () {
        login_page.with('denysr@rodrigues.io','123abc')
        expect(login_page.alert.getText()).toEqual('Usuário não cadastrado.');

    });

    it('quando o email é incorreto', function () {
        login_page.with('denysrodrigues5&yahoo.com','123abc');
        expect(login_page.alert.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('quando o email é branco', function () {
        login_page.with('','123abc')
        expect(login_page.alert.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('quando a senha é branco', function () {
        login_page.with('denysrodrigues5@hotmail.com', '')
        expect(login_page.alert.getText()).toEqual('Senha ausente.');
    });

    it('quando a senha é curta', function () {
        login_page.with('denysrodrigues5@hotmail.com', '123');
        expect(login_page.alert.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    });
})