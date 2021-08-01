import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        public jwtHelper: JwtHelperService,
        private router: Router,
        private http: HttpClient) { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }

    public logout() {
        localStorage.removeItem("token");
        this.router.navigate(["authentication/login"]);
    }

    public login(username: string, password: string) {
        this.http.post<any>('http://localhost:8095/authenticate', { username: username, password: password }).subscribe(result => {
            localStorage.setItem("token", result.jwt);
            console.log("JWT in local storage: " + localStorage.getItem("token"));
        }, error => {
            console.error(error);
            console.log(error.status);
        });
    }
}