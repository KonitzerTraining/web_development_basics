import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('geldern06022018 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Little CRM');
    browser.get('/customers');

  });
});
