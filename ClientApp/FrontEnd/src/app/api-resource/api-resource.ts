import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";

export const BASE_URL: string = "http://localhost:8095";

export interface Book {
    name: string;
    price: number;
    category: string;
    author: string;
}

export interface IUser {
    username: string;
    role: string;
}

export interface IBooksClient {
    getAllBooks();
}

@Injectable({
    providedIn: "root"
})
export class BooksClient implements IBooksClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getAllBooks() {
        let bookRes: Book[] = [];
        let _url = this.baseUrl + "/api/getAllBooks";
        return this.http.get<Book[]>(BASE_URL + _url);
    }
}