import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '../fixtures/context-pages';
import { СtraderPagesFixture, playwrightPagesFixture } from '../fixtures/ctrader-pages';
import { combineFixtures } from '../utils/fixtures';

export const searchTest = base.extend<ContextPagesFixture, СtraderPagesFixture>(
  combineFixtures(contextPagesFixture, playwrightPagesFixture)
);
