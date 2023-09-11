import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  list: Array<{ name: string, desc: string }> = [];

  constructor() { }

  ngOnInit() {
    for(let index = 0; index < 30; index++) {
      this.list.push({
        name: 'Test ' + (index + 1),
        desc: 'Description ' + (index + 1)
      })
    }
  }

}
