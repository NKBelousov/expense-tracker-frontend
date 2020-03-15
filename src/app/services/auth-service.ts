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

  token = "";

  isAuthenticated(): boolean {
    return this.token !== "";
  }

  login(payload: LoginPayload): Observable<UserInfo> {
    const request = this.http.post<UserInfo>(
      `${environment.apiUrl}/auth`,
      payload
    );

    request.subscribe(userInfo => {
      this.token = userInfo.token;
    });

    return request;
  }
}
