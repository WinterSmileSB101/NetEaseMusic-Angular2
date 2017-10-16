import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-personal-itemcon',
    templateUrl: './personal.item.component.html',
    styleUrls: ['./personal.item.component.css']
})

export class PersonalItemComponent {
    @Input() itemName: string;
    @Input() itemDes: string;
    @Input() itemTag: string;

    /**
     * gotoPos
     */
    public gotoPos() {
        switch (this.itemTag.toUpperCase()) {
            case 'DT':
            break;
            case 'GZ':
            break;
            case 'FS':
            break;
            default:
            break;
        }
    }
}
