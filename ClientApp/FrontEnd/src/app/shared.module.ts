import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './authentication/authorize.service';
import { AuthorizeGuard } from './authentication/authorize.guard';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class SharedModule { }
