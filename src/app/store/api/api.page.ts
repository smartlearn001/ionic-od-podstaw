import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  
  data!: any;

  constructor(private http: HttpClient) { }

  async download(): Promise<void> {
    const result = await firstValueFrom(
      this.http.get("https://af385e3a-ae95-416e-82c9-37661205d663.mock.pstmn.io/notes")
    );

    this.data = result;
  }

  ngOnInit() {
  }

}
