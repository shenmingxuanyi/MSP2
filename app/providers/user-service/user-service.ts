import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage, LocalStorage} from "ionic-angular";

/*
 Generated class for the UserService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UserService {

    private userInfo: any;

    private userPreference: any;

    //noinspection TypeScriptValidateTypes
    private storage = new Storage(LocalStorage);


    constructor(private http: Http) {

    }

}

