import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

type LoginPayload = {
  login: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth`, payload);
  }
}
