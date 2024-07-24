import { Component, OnInit } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';
import * as StackTrace from 'stacktrace-js';

@Component({
  selector: 'app-crashlytics',
  templateUrl: './crashlytics.page.html',
  styleUrls: ['./crashlytics.page.scss'],
})
export class CrashlyticsPage implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    await FirebaseCrashlytics.setContext({ 
      key: 'page',
      value: 'plugins/crashlytics',
      type: 'string'
    });

    await FirebaseCrashlytics.setUserId({
      userId: '123'
    });
  }

  async logMessage(): Promise<void> {
    await FirebaseCrashlytics.addLogMessage({
      message: 'Wiadomość testowa ' + new Date().getTime()
    });
  }

  async logError(): Promise<void> {
    const error = new Error("Test error " + new Date().getTime());

    const stacktrace = await StackTrace.fromError(error);
    await FirebaseCrashlytics.recordException({
        message: 'To jest błąd.',
        stacktrace
    });
  }
}
