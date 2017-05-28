import { HierarchicalDIAppPage } from './app.po';

describe('hierarchical-di-app App', () => {
  let page: HierarchicalDIAppPage;

  beforeEach(() => {
    page = new HierarchicalDIAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
