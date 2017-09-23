import { MycrudPage } from './app.po';

describe('mycrud App', () => {
  let page: MycrudPage;

  beforeEach(() => {
    page = new MycrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
