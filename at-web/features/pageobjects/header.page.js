import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    userManagementButton (char) { return $(`//*[text()="${char}"]`) } 
    get serachField () { return $('[name="search[keywords]"]') }
    get btnSubmit () { return $('[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchProduct (char) {
        await super.inputEventValue(this.serachField, char)
        await super.clickElement(this.btnSubmit)
    }

    async clickButtonHeader (char) {
        await super.clickElement(this.userManagementButton(char))
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
