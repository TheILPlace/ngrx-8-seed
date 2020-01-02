
import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigService {
    private config: Configuration;
    constructor(private http: HttpClient) { }

    load(url: string) {
        return new Promise((resolve) => {
            this.http.get<Configuration>(url).pipe(

                switchMap(config => {
                    this.config = config;
                    return of(true);

                })
            )
                .subscribe(() => {
                    // save the cache
                    console.log('finished loading ');
                    resolve();
                });
        });

    }

    get configuration(): Configuration {

        return this.config;
    }
}
