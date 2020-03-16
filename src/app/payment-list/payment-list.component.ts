import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.scss"],
})
export class PaymentListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [
    {
      id: 0,
      user_id: 0,
      type_id: 0,
      name: "Payment",
      cost: 42,
      created_at: new Date().getTime(),
    },
  ];

  onCreate(): void {
    console.log("create");
  }
}
