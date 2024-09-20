import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { IonicStorageModule } from "@ionic/storage-angular";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { COMPONENTS } from "./components"; 
import { AuthInterceptor } from "./interceptors";

@NgModule({
    imports: [
        IonicModule, 
        RouterModule,
        IonicStorageModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SharedModule { }