import { CompleteAngular2AppPage } from './app.po';

describe('complete-angular2-app App', function() {
  let page: CompleteAngular2AppPage;

  beforeEach(() => {
    page = new CompleteAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
