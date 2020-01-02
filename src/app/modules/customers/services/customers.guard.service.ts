import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStoreFacadeService } from '../store/data/data.store.facade.service';
import { filter, mapTo, take } from 'rxjs/operators';

@Injectable()
export class CustomersGuardService implements CanActivate {


    constructor(private dataStoreFacadeService: DataStoreFacadeService) {


    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {

        this.dataStoreFacadeService.loadCustomersAction();


        return this.dataStoreFacadeService.isCustomersLoaded$.pipe(
            filter(result => result),
            mapTo(true),
            take(1)
        );
    }
}
