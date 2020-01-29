

class LoginPage {
    constructor() {
        this.EC = protractor.ExpectedConditions,
        this.path = 'http://localhost:5000/login',
        this.form = $('#login_form');
        this.input_email = element(By.css('input[name=email]'));
        this.input_password = element(By.css('input[name=password]'));
        this.submit = element(By.css('button[id*=btnLogin'));
        this.alert = element(by.css('.alert-login'))
    }

    // go(){
    //     browser.get(this.path);
    //     console.log("Passou Aqui@@@@",this.path)
    // }

    
    with(email, pass) {
        this.input_email.sendKeys(email);
        this.input_password.sendKeys(pass);
        this.submit.click();
    }

    logout(){
        browser.get('http://localhost:5000/logout'),
        browser.wait(this.EC.presenceOf(this.form), TIMEOUT);
    }
}

module.exports = LoginPage;