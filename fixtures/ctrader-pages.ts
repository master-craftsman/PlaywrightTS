import { Fixtures } from '@playwright/test';
import { СtraderHomePage } from '../pages/ctrader-home-page';
import { ContextPagesFixture } from './context-pages';

export type СtraderPagesFixture = {
  ctraderHomePage: СtraderHomePage;
};

export const playwrightPagesFixture: Fixtures<СtraderPagesFixture, ContextPagesFixture> = {
  ctraderHomePage: async ({ contextPage }, use) => {
    const ctraderHomePage = new СtraderHomePage(contextPage);

    await use(ctraderHomePage);
  },

};
