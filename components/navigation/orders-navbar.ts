import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import {ListItem} from "../../page-factory/list-item";

export class OrdersNavbar {
  readonly orderNavbar: OrdersNavbar;

  private readonly newOrder: Button;
  private readonly orderList: ListItem;

  constructor(public page: Page) {

    this.newOrder = new Button({ page, locator: '//button[@type=\'button\' and span[text()=\'New Order\']]', name: 'New order' });
    this.orderList = new ListItem({ page, locator: '//div[@style="position: relative; margin-right: 0px; margin-bottom: 0px; flex: 1 1 0px; overflow: hidden; padding-right: 0px; padding-bottom: 0px;" and div[@style="float: none; padding-right: 0px; padding-bottom: 0px; min-width: 100%;"]]', name: 'Order list item' });
  }

  async openNewOrderModal(): Promise<void> {
    await this.newOrder.shouldBeVisible();
    await this.newOrder.click();
  }

  async orderListHasOpenedOrder(expectedCount: number): Promise<void> {
    // await this.orderList.shouldBeVisible();
    await this.orderList.shouldHaveCount({}, expectedCount);

  }
}
