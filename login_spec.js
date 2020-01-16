// const selenium_webdriver = require('selenium-webdriver/testing');
// let describe = selenium_webdriver.describe();
// let it = selenium_webdriver.it();
// let beforeEach = selenium_webdriver.beforeEach();
//
// const protractor = require('protractor');
// let browser = protractor.browser ;

const loginPage = require('./loginPage.js');

describe('login page check list', () => {
    let login_name = ""; //Write correct name
    let password = ""; //Write correct password
    let wrong_login_name = "wrong login name";
    let wrong_password = "wrong password";

    it('should log in', () => {
        browser.get('http://demo_ru.m2.abmretail.com/#/');

        loginPage.set_name(login_name);
        loginPage.set_password(password);
        loginPage.click_enter_btn();
        // loginPage.error_message;
    });
});