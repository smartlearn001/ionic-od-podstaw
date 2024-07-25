import { Component, OnInit } from '@angular/core';
import { SqliteService } from 'src/app/shared';

export interface INote {
  id: number;
  name: string;
}

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {
  data!: Array<INote>;

  constructor(private sqlite: SqliteService) { }

  async add(): Promise<void> {
    const name = 'Test ' + new Date().getTime();
    await this.sqlite.db.execute(`INSERT INTO notes (name) values ('${ name }');`);

    await this.refresh();
  }

  async update(id: number): Promise<void> {
    const name = 'Test ' + new Date().getTime();
    await this.sqlite.db.execute(`UPDATE notes SET name = '${name}' WHERE id = ${id};`);

    await this.refresh();
  }

  async remove(id: number): Promise<void> {
    await this.sqlite.db.execute(`DELETE FROM notes WHERE id = ${id};`);

    await this.refresh();
  }

  async ngOnInit(): Promise<void> {
    await this.refresh();
  }

  private async refresh(): Promise<void> {
    const result = await this.sqlite.db.query('SELECT * FROM notes;');
    this.data = result.values || [];
  }
}
