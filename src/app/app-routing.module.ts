import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PaymentListComponent } from "./payment-list/payment-list.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "payments",
    component: PaymentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
