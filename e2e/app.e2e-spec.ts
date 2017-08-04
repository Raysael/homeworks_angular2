import { FhomeworkPage } from './app.po';

describe('fhomework App', () => {
  let page: FhomeworkPage;

  beforeEach(() => {
    page = new FhomeworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
