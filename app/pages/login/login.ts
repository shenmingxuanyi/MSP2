import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
import {EVENTS} from "../../config/event.config";
import {I18NService} from "../../providers/i18n-service/i18n-service";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    constructor(private nav: NavController, private events: Events, public i18NService: I18NService) {
    }

    login() {
        this.events.publish(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_IN, {});
    }
}
