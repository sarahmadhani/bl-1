import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Homepage extends Page {
    open () {
        return super.open('');
    }
}

export default new Homepage();
