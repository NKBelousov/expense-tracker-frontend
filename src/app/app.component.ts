import { Component } from "@angular/core";

type Route = {
  icon: string;
  title: string;
  href: string;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "expense-tracker-frontend";

  routes: Route[] = [
    {
      icon: "home",
      title: "Home",
      href: "/",
    },
    {
      icon: "attach_money",
      title: "Payments",
      href: "/payments",
    },
    {
      icon: "info",
      title: "About",
      href: "/about",
    },
    {
      icon: "exit_to_app",
      title: "Logout",
      href: "/logout",
    },
  ];
}
