import { Component, OnInit } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor() { }

  async shareText(): Promise<void> {
    await Share.share({
      text: 'Tekst do współdzielenia',
    });
  }

  async shareUrl(): Promise<void> {
    await Share.share({
      url: 'http://juchnikowski.com',
    });
  }

  async sharePhoto(): Promise<void> {
    const photo = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    await Share.share({
      url: photo.path,
    });
  }

  async shareFiles(): Promise<void> {
    const { photos } = await Camera.pickImages({});
    await Share.share({
      files: photos.map(photo => photo.path!),
    });
  }

  ngOnInit() {
  }

}
