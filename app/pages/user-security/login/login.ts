import {Component} from '@angular/core';
import {NavController, Events, LoadingController, ToastController} from 'ionic-angular';
import {EVENTS} from "../../../config/event.config";
import {I18NService} from "../../../providers/i18n-service/i18n-service";
import {UserService} from "../../../providers/user-service/user-service"

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/user-security/login/login.html',
})
export class LoginPage {

    username: string;
    password: string;

    constructor(private nav: NavController, private events: Events, public i18NService: I18NService, private userService: UserService, private loadingController: LoadingController, private toastController: ToastController) {

    }

    login() {
        let loader = this.loadingController.create({
            content: "正在登陆...",
            duration: 3000
        });
        loader.present();
        this.userService.signIn({username: this.username, password: this.password})
            .then((userInfo)=> {
                loader.dismiss();
                console.log(userInfo);
            })
            .catch(error=> {
                loader.dismiss().then(()=> {
                    this.toastController.create({
                        message: error.message,
                        duration: 3000
                    }).present();
                });
                console.log(error);
            });
    }
}
