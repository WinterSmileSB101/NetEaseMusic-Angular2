import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-propertycon',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.css']
})

export class PropertyComponent {
    @Input() num: number;
    @Input() mytext: string;
}
