import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {

  constructor(private callNumber: CallNumber) { }

  async call(): Promise<void> {
    await this.callNumber.callNumber("000000000", true);
  }

  ngOnInit() {
  }

}
