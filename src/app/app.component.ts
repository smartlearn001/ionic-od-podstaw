import { Component, OnInit } from '@angular/core';
import { SqliteService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private sqlite: SqliteService) { }

  async ngOnInit(): Promise<void> {
    await this.sqlite.init()
  }
}
