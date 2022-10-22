import { by, device, element, expect } from 'detox';

describe('Sidebar', () => {
  it('should show sidebar after tap', async () => {
    await expect(element(by.id('drawer-icon'))).toBeVisible();
    await element(by.id('drawer-icon')).tap();
    await expect(element(by.text('Highlakka'))).toBeVisible();
  });

  it('should switch dark theme after tap', async () => {
    if (device.getPlatform() === 'ios') {
      await expect(element(by.id('theme-switch'))).toBeVisible();
      await element(by.id('theme-switch')).tap();
    } else {
      await expect(element(by.id('theme-switch-container-view'))).toBeVisible();
      await element(by.id('theme-switch').withAncestor(by.id('theme-switch-container-view'))).tap();
    }

    await expect(element(by.text('Highlakka'))).toBeVisible();
  });

  it('should show popular news after tap', async () => {
    await element(by.text('Uusimmat')).tap();
    await expect(element(by.id('drawer-icon'))).toBeVisible();
  });
});
