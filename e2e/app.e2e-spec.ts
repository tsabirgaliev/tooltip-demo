import { BugTestPage } from './app.po';

describe('bug-test App', function() {
  let page: BugTestPage;

  beforeEach(() => {
    page = new BugTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
