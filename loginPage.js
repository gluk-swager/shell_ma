class LoginPage {
    get enter_btn(){
        return browser.element('//*[@type="submit"]');
        // return browser.element('/html/body/main/div[1]/div[1]/div[1]/div/form/button');
    }

    get error_message(){
        return browser.element('//*[@id="view"]/div[1]/div[1]/div/form');
    }

    get name_input(){
        return browser.element('#name');
    };

    get password_input(){
        return browser.element('#password');
    }

    click_enter_btn(){
        this.enter_btn.click();
    }

    set_name(name){
        this.name_input.sendKeys(name);
    }

    set_password(password){
        this.password_input.sendKeys(password);
    }
}

module.exports = new LoginPage();