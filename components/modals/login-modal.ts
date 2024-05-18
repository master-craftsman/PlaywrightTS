import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import {Input} from "../../page-factory/input";
import {OrdersNavbar} from "../navigation/orders-navbar";


type UserCredentials = {
    login: string;
    password: string;
};


export class LoginModal {
    readonly orderNavbar: OrdersNavbar;

    private readonly loginSwitcher: Button;
    private readonly loginInput : Input;
    private readonly passwordInput : Input;
    private readonly loginButton: Button;

    constructor(public page: Page) {
        this.orderNavbar = new OrdersNavbar(page);
        this.loginSwitcher = new Button({ page, locator: '//div[text()="Log In"]', name: 'Login' });
        this.loginInput = new Input({ page, locator: '//input[@placeholder="Enter your email or cTrader ID"]', name: 'Login' });
        this.passwordInput = new Input({ page, locator: '//input[@placeholder="Enter your password"]', name: 'Password' });
        this.loginButton = new Button({ page, locator: '//button[@type="submit" and text()="Log In"]', name: 'Login' });
    }

    async modalIsOpened(): Promise<void> {
        await this.loginSwitcher.shouldBeVisible();
        // await this.loginInput.shouldBeVisible();
        // await this.passwordInput.shouldBeVisible();
        // await this.loginButton.shouldBeVisible();
    }

    async login({ login, password }: UserCredentials) {
        await this.loginSwitcher.click();
        await this.loginInput.fill(login);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}