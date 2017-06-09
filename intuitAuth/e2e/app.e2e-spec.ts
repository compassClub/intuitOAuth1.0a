import { IntuitAuthPage } from './app.po';

describe('intuit-auth App', () => {
  let page: IntuitAuthPage;

  beforeEach(() => {
    page = new IntuitAuthPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
