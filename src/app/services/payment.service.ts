import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";
import { Payment } from "../types/payment";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

type GetCollectionResponse = {
  meta: {
    count: number;
  };
  data: Payment[];
};

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getCollection(): Observable<GetCollectionResponse> {
    const { token } = this.authService;
    return this.http.get<GetCollectionResponse>(
      `${environment.apiUrl}/api/payments`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}
