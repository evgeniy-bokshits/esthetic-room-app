import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// Material modules barrel
@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule
    ],
})
export class MaterialModule {}
