import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

// Material modules barrel
@NgModule({
    imports: [
        MatSidenavModule,
    ],
    exports: [
        MatSidenavModule,
    ],
})
export class MaterialModule {}
