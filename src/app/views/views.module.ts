import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layout/main/main-layout.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { CommonModule } from '@angular/common';

/*In short, when using a Shared Module:
DO declare components, pipes, directives, and export them.
DO import FormsModule, ReactiveFormsModule and other (3rd-party) modules you need.
DO import the SharedModule into any other Feature Modules.
DO NOT provide app-wide singleton services in your SharedModule. Instead move these to the CoreModule.
DO NOT import the SharedModule into the AppModule. */

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule
  ],
  entryComponents: [],
  exports: [
    MainLayoutComponent
  ],
})
export class ViewsModule { }
