import test, { Page } from '@playwright/test';
import { OrdersNavbar } from '../components/navigation/orders-navbar';
import {MainNavbar} from "../components/navigation/main-navbar";

export class BasePage {
  readonly navbar: MainNavbar;


  constructor(public page: Page) {
    this.navbar = new MainNavbar(page);
  }

  async visit(url: string): Promise<void> {
    await test.step(`Opening the url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: 'networkidle' });
    });
  }

  async reload(): Promise<void> {
    const currentUrl = this.page.url();

    await test.step(`Reloading page with url "${currentUrl}"`, async () => {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
    });
  }
}
