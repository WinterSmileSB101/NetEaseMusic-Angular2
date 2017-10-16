import { Component } from '@angular/core';
@Component({
    selector: 'app-signcon',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.css']
})

export class SignComponent {
    buttonText = '签到';
    buttonClass = 'sign-button';
    disable = false;

    public isDisable() {
        return this.disable;
    }

    public sign() {
        this.buttonText = '已签到';
        this.disable  = true;
        this.buttonClass = 'sign-button-sign';
    }
}
