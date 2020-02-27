import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from '@infrastructure/settings/AppRoutes';
import { MainLayoutComponent } from '@views/layout/main/main-layout.component';


const routes: Routes = [
  { path: AppRoutes.Main, component: MainLayoutComponent, data: { type: 'main' } },
  // { path: '404', component: NotFoundPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
