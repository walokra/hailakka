import { by, element, expect } from 'detox';

const jestExpect = (global as any).expect;

describe('Home Screen', () => {
  it('should show section header', async () => {
    await expect(element(by.id('navigation-container-view'))).toBeVisible();

    await jestExpect('Home Screen').toMatchImageSnapshot();
  });
});
