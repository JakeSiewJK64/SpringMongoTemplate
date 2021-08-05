import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";

export const BASE_URL: string = "http://localhost:8095";

export interface IBook {
    name: string;
    price: number;
    category: string;
    author: string;
}

export interface IUser {
    username: string;
    role: UserRole;
}

export interface IBooksClient {
    getAllBooks();
    upsertBook(book: Book);
}

export enum UserRole {
    Administrator = 0,
    User = 1
}

export class User implements IUser {
    username: string;
    role: UserRole;
    constructor(username: string, role: UserRole) {
        this.username = username;
        this.role = role;
    }
}

export class Book implements IBook {
    name: string;
    price: number;
    category: string;
    author: string;
    constructor() {
    }
}

//#region Book
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

    upsertBook(book: Book) {
        let _url = this.baseUrl + "/api/upsertBook";
        return this.http.post<Book[]>(BASE_URL + _url, { author: book.author, name: book.name, price: book.price, category: book.category });
    }

    getAllBooks() {
        let _url = this.baseUrl + "/api/getAllBooks";
        return this.http.get<Book[]>(BASE_URL + _url);
    }
}
//#endregion Book