import { searchTest as test } from './tests';
import {contextPagesFixture} from "../fixtures/context-pages";
import {expect} from "@playwright/test";


test.beforeEach(async ({ ctraderHomePage }) => {
  await ctraderHomePage.visit('/');
});

test('Testing create one order position', async ({ ctraderHomePage }) => {
  await ctraderHomePage.navbar.openLoginModal();
  await ctraderHomePage.navbar.loginModal.modalIsOpened();
  await ctraderHomePage.navbar.loginModal.login({ login: 'userForTest@spotware.com', password: 'userForTest@spotware.com' });
  await ctraderHomePage.navbar.orderNavbar.openNewOrderModal();
  await ctraderHomePage.navbar.limitOrderModal.modalIsOpened();
  await ctraderHomePage.navbar.limitOrderModal.placeMarketOrder();
  await ctraderHomePage.navbar.orderNavbar.orderListHasOpenedOrder(1);
});