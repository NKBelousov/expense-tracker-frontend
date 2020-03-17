import { Component, OnInit } from "@angular/core";
import { PaymentService } from "../services/payment.service";
import { Payment } from "../types/payment";

@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.scss"],
})
export class PaymentListComponent implements OnInit {
  constructor(private paymentService: PaymentService) {}

  collection: Payment[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.paymentService.getCollection().subscribe(response => {
      this.collection = response.data;
      this.isLoading = false;
    });
  }

  onCreate(): void {
    console.log("create");
  }
}
