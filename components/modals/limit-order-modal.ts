import { Page } from '@playwright/test';
import { Input } from '../../page-factory/input';
import { ListItem } from '../../page-factory/list-item';
import { Title } from '../../page-factory/title';
import {Button} from "../../page-factory/button";

type FindResult = {
  keyword: string;
  resultNumber: number;
};

export class LimitOrderModal {
  readonly limitOrderModal: LimitOrderModal;
  private readonly newMarketOrder: Title;
  private readonly placeOrderButton: Button;

  constructor(public page: Page) {
   this.newMarketOrder = new Title({ page, locator: '//div[text()=\'New Market Order\']', name: 'New market order' });
   this.placeOrderButton = new Button({ page, locator: '//button[text()=\'Place Order\']', name: 'Place order' });
  }

  async modalIsOpened(): Promise<void> {
    await this.newMarketOrder.shouldBeVisible();
    await this.placeOrderButton.shouldBeVisible();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
