///<reference path="../../config/event.config.ts"/>
///<reference path="../../config/storageKey.config.ts"/>
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage, LocalStorage, Events} from "ionic-angular";
import {EVENTS} from "../../config/event.config"
import {RESTFUL_SERVICE_RESOURCES} from "../../config/resources.config"
import {STORAGE_KEY} from "../../config/storageKey.config";
import {Observable} from "rxjs";
import {User} from "../../model/user";

/*
 Generated class for the UserService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UserService {

    public isLogin: boolean;

    private userInfo: any;

    private userPreference: any;

    //noinspection TypeScriptValidateTypes
    private storage = new Storage(LocalStorage);


    constructor(private http: Http, private events: Events) {
        this.isLogin = false;
        this.eventsListener();
    }

    eventsListener() {

        this.events.subscribe(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_IN, (userInfo)=> {
            this.isLogin = true;
            this.storage.setJson(STORAGE_KEY.USER.USER_INFO, userInfo);
        });

        this.events.subscribe(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_OUT, ()=> {
            this.isLogin = false;
            this.storage.remove(STORAGE_KEY.USER.USER_INFO);
        });

    };

    signIn(user): Promise<User> {

        return this.http.get(RESTFUL_SERVICE_RESOURCES.SECURITY.SIGN_IN)
            .map((response)=> {
                return response.json();
            })
            .toPromise()
            .then((response)=> {
                if (response && response.code == '00') {
                    
                    if (response.context.sysUserInfo.oid) {

                        this.userInfo = response.context.sysUserInfo;
                        this.events.publish(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_IN, this.userInfo);
                        return this.userInfo;

                    } else {
                        throw  new Error(response.message);
                    }
                } else {
                    throw  new Error(response.message);
                }
            })
            .catch((error)=> {
                throw  new Error("登录失败");
            });
    };

    signOut() {
        this.events.publish(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_OUT, this.userInfo);
    };
}

