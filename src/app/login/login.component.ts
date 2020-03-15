import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm;
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: "",
      password: "",
    });
  }

  getErrorMessage(): string {
    if (this.loginForm.controls.login.hasError("user_not_found")) {
      return "Wrong login or password, please try again";
    }
    return "";
  }

  onSubmit(payload: any): void {
    this.isLoading = true;

    this.authService.login(payload).subscribe(
      () => {
        this.isLoading = false;
      },
      response => {
        this.isLoading = false;
        this.loginForm.controls.login.setErrors({
          [response.error.message]: true,
        });
      }
    );
  }
}
