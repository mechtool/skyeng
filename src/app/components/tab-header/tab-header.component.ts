import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css'],
})
export class TabHeaderComponent  {

    @Input() public header : string = 'Заголовок по умолчанию';

}
