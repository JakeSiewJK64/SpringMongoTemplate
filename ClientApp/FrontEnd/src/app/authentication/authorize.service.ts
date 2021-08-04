import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import decode from 'jwt-decode';

export class User {
    username: string;
    role: string;
    constructor(username: string, role: string) {
        this.username = username;
        this.role = role;
    }
}
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

    public getUser(): User {
        const token = localStorage.getItem("token");
        if(!token) {
            return null;
        }
        const tokenPayload: any = decode(token);
        return new User(tokenPayload.username, tokenPayload.role);
    }

    public login(username: string, password: string) {
        this.http.post<any>('http://localhost:8095/api/authenticate', { username: username, password: password }).subscribe(result => {
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