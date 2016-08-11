///<reference path="../../config/event.config.ts"/>
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage, LocalStorage, Events} from "ionic-angular";
import {EVENTS} from "../../config/event.config"

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


    constructor(private http: Http, private events: Events) {

    }

    signIn(user) {
        
        this.events.publish(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_IN, user);
    }

    signOut() {
        this.events.publish(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_OUT, {});
    }
}

