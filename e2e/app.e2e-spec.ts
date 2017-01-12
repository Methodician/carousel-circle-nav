import { CarouselCircleNavPage } from './app.po';

describe('carousel-circle-nav App', function() {
  let page: CarouselCircleNavPage;

  beforeEach(() => {
    page = new CarouselCircleNavPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
