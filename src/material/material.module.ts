import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations : [],

    imports :[
        MatSnackBarModule,
        MatButtonModule
    ],
    exports : [
        MatSnackBarModule,
        MatButtonModule
    ]
})

export class MaterialModule{}
