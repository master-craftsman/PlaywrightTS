import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import {ListItem} from "../../page-factory/list-item";
import {Input} from "../../page-factory/input";
import {Title} from "../../page-factory/title";

export class OrdersNavbar {
  readonly orderNavbar: OrdersNavbar;

  private readonly newOrder: Button;
  private readonly positionsSwitcher: Button;
  private readonly orderList: ListItem;
  private readonly positionsCounter: Title;

  constructor(public page: Page) {

    this.newOrder = new Button({ page, locator: '//button[@type=\'button\' and span[text()=\'New Order\']]', name: 'New order' });
    this.positionsSwitcher = new Button({ page, locator: '//div[text()=\'Positions\']', name: 'Positions switcher' });
    this.positionsCounter = new Title({ page, locator: '//div[contains(text(), \'Positions\')]', name: 'Positions counter' });
    this.orderList = new ListItem({ page, locator: '//div[@class="root_cf root_ch root_co root_ci root_cp root_eh root_eg root_bw root_a root_b root_c root_d"]', name: 'Order list item' });
  }

  async openNewOrderModal(): Promise<void> {
    await this.newOrder.shouldBeVisible();
    await this.newOrder.click();
  }

  async orderListHasOpenedOrder(expectedCount: number): Promise<void> {
    await this.positionsSwitcher.click();
    await this.positionsCounter.shouldBeVisible();
    await this.positionsCounter.shouldHaveText('Positions' + expectedCount.toString());
    // await this.orderList.shouldBeVisible();
    // await this.orderList.shouldHaveCount({}, expectedCount);
  }
}
