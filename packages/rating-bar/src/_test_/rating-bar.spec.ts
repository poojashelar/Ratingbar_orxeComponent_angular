import { OrxeRatingBar } from '../';


describe('orxe-rating-bar', () => {
  let ratingbar;

  beforeEach(async function() {
    OrxeRatingBar;
    ratingbar = (await document.body.appendChild(document.createElement('orxe-rating-bar'))) as OrxeRatingBar;
  });

  afterEach(async function() {
    await ratingbar.remove();
  });

  /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return ratingbar.shadowRoot.querySelector(`[data-testId=${id}]`);
  }

  it('should function render is call', () => {
    expect(ratingbar.render()).toBeTruthy();
  });
});