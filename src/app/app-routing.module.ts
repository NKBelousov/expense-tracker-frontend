import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PaymentListComponent } from "./payment-list/payment-list.component";
import { AboutComponent } from "./about/about.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "payments",
    component: PaymentListComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "logout",
    component: LogoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
