import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li{
        cursor: pointer;
        transition: all 0.3s;
      }
    `
  ]
})
export class SidebarComponent {

}
