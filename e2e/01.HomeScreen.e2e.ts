import { by, element, expect } from 'detox';

describe('Home Screen', () => {
  it('should show section header', async () => {
    await expect(element(by.id('navigation-container-view'))).toBeVisible();
  });
});
