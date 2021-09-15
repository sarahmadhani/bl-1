import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OTP extends Page {
    verifyOtpPage () {
        super.isContainUrl()
    }
}

export default new OTP();
