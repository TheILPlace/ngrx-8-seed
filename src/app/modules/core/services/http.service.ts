import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient, private configService: ConfigService) {
    }

    baseurl: string = this.configService.configuration.webApiBaseUrl;

    get<T>(url: string): Observable<any> {

        return this.http.get<T>(`${this.baseurl}${url}`).pipe(
            catchError((error: any) => Observable.throw(error || 'Server error')) // ...errors if any
        );
    }

    post(url: string, payload: any): Observable<any> {

        return this.http.post(`${this.baseurl}${url}`, payload).pipe(
            catchError((error: any) => Observable.throw(error || 'Server error')) // ...errors if any
        );
    }

    put(url: string, payload: any): Observable<any> {
        return this.http.put(`${this.baseurl}${url}`, payload).pipe(
            catchError((error: any) => Observable.throw(error || 'Server error')) // ...errors if any
        );
    }


    delete(url: string): Observable<any> {
        return this.http.get(`${this.baseurl}${url}`).pipe(
            catchError((error: any) => Observable.throw(error || 'Server error')) // ...errors if any
        );
    }


}
