import { AngularUdemyPage } from './app.po';

describe('angular-udemy App', function() {
  let page: AngularUdemyPage;

  beforeEach(() => {
    page = new AngularUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
