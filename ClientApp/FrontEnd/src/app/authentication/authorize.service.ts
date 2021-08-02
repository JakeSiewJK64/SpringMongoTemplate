import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import decode from 'jwt-decode';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private dialogService: TdDialogService,
        private router: Router,
        private http: HttpClient) { }

    public logout() {
        localStorage.removeItem("token");
        this.router.navigate(["authentication/login"]);
    }

    public getUserName(): string {
        const token = localStorage.getItem("token");
        const tokenPayload: any = decode(token);
        return tokenPayload.sub;
    }

    public login(username: string, password: string) {
        this.http.post<any>('http://localhost:8095/authenticate', { username: username, password: password }).subscribe(result => {
            localStorage.setItem("token", result.jwt);
            this.router.navigate(["home"]);
        }, error => {
            this.dialogService.openAlert({
                title: "Oops!",
                message: error.message
            })
        });
    }
}