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
  private readonly marketOrderSwithcer: Button;
  private readonly closeOrderModal: Button;

  constructor(public page: Page) {
   this.marketOrderSwithcer = new Button({ page, locator: '//div[text()=\'Market Order\']', name: 'Market order modal switcher' });
   this.newMarketOrder = new Title({ page, locator: '//div[text()=\'New Market Order\']', name: 'New market order' });
   this.placeOrderButton = new Button({ page, locator: '//button[text()=\'Place Order\']', name: 'Place order' });
   this.closeOrderModal = new Button({ page, locator: '//div[@class="root_g root_d"]', name: 'Close order modal' });
  }

  async modalIsOpened(): Promise<void> {
    await this.placeOrderButton.shouldBeVisible();
  }

  async placeMarketOrder() {
    await this.marketOrderSwithcer.click();
    await this.newMarketOrder.shouldBeVisible();
    await this.placeOrderButton.click();
    await this.closeOrderModal.click();
  }
}
