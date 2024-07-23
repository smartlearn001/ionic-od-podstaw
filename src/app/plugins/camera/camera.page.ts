import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  imageUrl!: string;
  path!: string;
  exif: any;

  constructor() { }

  async takePicture(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    if (image.webPath && image.path && image.exif) {
      const imageUrl = image.webPath;
      this.imageUrl = imageUrl;
      this.path = image.path;
      this.exif = image.exif;
    }
  };

  ngOnInit() {
  }

}
