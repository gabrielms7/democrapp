import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
