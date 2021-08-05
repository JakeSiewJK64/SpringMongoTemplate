import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CovalentModule } from './covalent.module';
import { EnumpipeService } from './utils/enumpipe.service';
@NgModule({
  declarations: [
    EnumpipeService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule
  ],
  exports: [
    MaterialModule,
    CovalentModule,
    EnumpipeService
  ]
})
export class SharedModule { }
