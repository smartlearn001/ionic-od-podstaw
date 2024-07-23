import { Component, OnInit } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
  currentPosition?: Position;
  watchId: any;

  constructor() { }
  
  async getCurrentPosition(): Promise<void> {
    this.currentPosition = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true, 
      timeout: 5000,
      maximumAge: 1000
    });
  }

  async watchPosition(): Promise<void> {
    this.watchId = await Geolocation.watchPosition({
      enableHighAccuracy: false, 
      timeout: 2000,
      maximumAge: 0
    }, callback => {
      if (callback) {
        this.currentPosition = callback;
      }
    })
  }

  async stopWatchPosition(): Promise<void> {
    await Geolocation.clearWatch({
      id: this.watchId
    });
    this.watchId = null;
  }

  ngOnInit() {
  }

}
