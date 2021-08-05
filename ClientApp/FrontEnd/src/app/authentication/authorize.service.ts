import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import decode from 'jwt-decode';
import { BASE_URL, IUser } from '../api-resource/api-resource';
import { EventEmitterService } from '../shared/utils/EventEmitterService';
export class User implements IUser {
    username: string;
    role: number;
    constructor(username: string, role: number) {
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
        private eventEmitterService: EventEmitterService,
        private http: HttpClient) { }

    public getUser(): User {
        const token = localStorage.getItem("token");
        if (!token) {
            return null;
        }
        const tokenPayload: any = decode(token);
        return new User(tokenPayload.username, tokenPayload.role);
    }

    public logout() {
        localStorage.removeItem("token");
        this.eventEmitterService.updateMatHeader();
        this.router.navigate(["authentication/login"]);
    }

    public login(username: string, password: string) {
        this.http.post<any>(BASE_URL + '/api/authenticate', { username: username, password: password }).subscribe(result => {
            localStorage.setItem("token", result.jwt);
            this.eventEmitterService.updateMatHeader();
            this.router.navigate([""]);
        }, error => {
            this.dialogService.openAlert({
                title: "Oops!",
                message: error.message
            })
        });
    }
}