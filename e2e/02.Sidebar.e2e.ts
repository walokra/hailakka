import { by, element, expect } from 'detox';

const jestExpect = (global as any).expect;

describe('Sidebar', () => {
  it('should show sidebar after tap', async () => {
    await element(by.id('drawer-icon')).tap();
    await expect(element(by.text('Highlakka'))).toBeVisible();

    await jestExpect('Sidebar Screen').toMatchImageSnapshot();
  });

  it('should switch dark theme after tap', async () => {
    await element(by.id('theme-switch')).tap();
    await expect(element(by.text('Highlakka'))).toBeVisible();

    await jestExpect('Sidebar Light Screen').toMatchImageSnapshot();
  });

  it('should show popular news after tap', async () => {
    await element(by.text('Uusimmat')).tap();
    await expect(element(by.id('drawer-icon'))).toBeVisible();
  });
});
