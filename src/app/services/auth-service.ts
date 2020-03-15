import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

type LoginPayload = {
  login: string;
  password: string;
};

type UserInfo = {
  token: string;
  user_id: number;
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${environment.apiUrl}/auth`, payload);
  }
}
