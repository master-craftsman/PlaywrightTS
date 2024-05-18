import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import {LoginModal} from "../modals/login-modal";
import {OrdersNavbar} from "./orders-navbar";
import {LimitOrderModal} from "../modals/limit-order-modal";

export class MainNavbar {
    readonly loginModal: LoginModal;
    readonly orderNavbar: OrdersNavbar;
    readonly limitOrderModal: LimitOrderModal;
    private readonly loginButton: Button;

    constructor(public page: Page) {
        this.loginModal = new LoginModal(page);
        this.orderNavbar = new OrdersNavbar(page);
        this.limitOrderModal = new LimitOrderModal(page);
        this.loginButton =  new Button({ page, locator: '//button[@type="button" and text()=\'Log In\']', name: 'Login' });
    }

    async openLoginModal(): Promise<void> {
        await this.loginButton.click();
    }

}