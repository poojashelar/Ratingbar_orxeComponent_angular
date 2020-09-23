import { OrxeRatingBar } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-rating-bar-axe', () => {
  let ratingBar;

  beforeEach(async () => {
    OrxeRatingBar;
    document.body.appendChild(document.createElement('RatingBar'));
    ratingBar = document.querySelector('RatingBar') as OrxeRatingBar;
  });

  afterEach(() => {
    ratingBar.remove();
  });

  it('Should Create', async () => {
    const result = await axe(ratingBar);
    expect(result).toBeTruthy();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(ratingBar);
    expect(result).toHaveNoViolations();
  });
});
