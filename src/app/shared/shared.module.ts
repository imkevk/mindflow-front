import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavigationLayoutComponent } from './smart-components/navigation-layout/navigation-layout.component';

@NgModule({
  declarations: [
    NavigationLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
  ],
  exports: [
    NavigationLayoutComponent
  ]
})
export class SharedModule { }
