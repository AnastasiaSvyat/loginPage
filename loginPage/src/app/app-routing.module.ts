import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformHelper } from '@natec/mef-dev-platform-connector';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = PlatformHelper.updatePluginsRoutes([
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: 'full',
      },
      {
        path: "login",
        component: LoginPageComponent
      }
    ]
  }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
