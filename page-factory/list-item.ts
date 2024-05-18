import { Component } from './component';
import {LocatorProps} from "../types/page-factory/component";
import test, {expect} from "@playwright/test";

export class ListItem extends Component {
  get typeOf(): string {
    return 'list item';
  }

  async shouldHaveCount(locatorProps: LocatorProps = {}, count: number): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.componentName}" should have count`, async () => {
      const locator = this.getLocator(locatorProps);
      await expect(locator, { message: this.getErrorMessage(`does not have count`) }).toHaveCount(count);
    });
  }
}
