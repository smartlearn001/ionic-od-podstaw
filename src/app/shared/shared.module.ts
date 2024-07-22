import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { COMPONENTS } from "./components"; 

@NgModule({
    imports: [
        IonicModule, RouterModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SharedModule { }