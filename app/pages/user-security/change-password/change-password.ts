import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {I18NService} from "../../../providers/i18n-service/i18n-service";

/*
 Generated class for the ChangePasswordPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/user-security/change-password/change-password.html',
})
export class ChangePasswordPage {

    constructor(private nav: NavController, public i18NService: I18NService) {
    }

    changePassword() {
        this.nav.pop();
    }
}
