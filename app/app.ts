import {Component, ViewChild, OnInit} from '@angular/core';
import {ionicBootstrap, Platform, Nav, Events} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {MainPage} from "./pages/main/main";
import {LoginPage} from "./pages/user-security/login/login";
import {EVENTS} from "./config/event.config";
import {PLATFORM_UI_CONFIG} from "./config/platform.config";
import {I18NService} from "./providers/i18n-service/i18n-service";
import {ResetPasswordPage} from "./pages/user-security/reset-password/reset-password";
import {NotificationsPage} from "./pages/notifications/notifications";
import {PersonInfoPage} from "./pages/user-security/person-info/person-info";
import {ChangePasswordPage} from "./pages/user-security/change-password/change-password";
import {SystemSettingPage} from "./pages/system-setting/system-setting";
import {UserService} from "./providers/user-service/user-service";


@Component({
    templateUrl: 'build/app.html'
})
class MSPAPP implements OnInit {

    @ViewChild(Nav) nav: Nav;

    //初始化页面
    rootPage: any = LoginPage;

    //修改秘密
    changePasswordPage = ChangePasswordPage;
    //重设秘密
    resetPasswordPage = ResetPasswordPage;
    //通知提醒
    notificationsPage = NotificationsPage;
    //个人信息
    personInfoPage = PersonInfoPage;
    //系统设置
    systemSettingPage = SystemSettingPage;


    constructor(private platform: Platform, private events: Events, public i18NService: I18NService) {

        //初始化app
        this.initializeApp();
    }

    initializeApp() {

        //订阅事件
        this.eventsSubscribe();

        this.platform
            .ready()
            .then(() => {

                //设置状态条颜色
                StatusBar.styleDefault();

                //自动隐藏欢迎屏
                setTimeout(()=> {
                    //验证登录,调至登录界面
                    Splashscreen.hide();

                }, 1000);
            });
    }


    eventsSubscribe() {
        //监听登录事件
        this.events.subscribe(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_IN, ()=> {
            this.nav.setRoot(MainPage);
        });

        //监听登录事件
        this.events.subscribe(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_OUT, ()=> {
            this.nav.setRoot(LoginPage);
        });
    }

    openMenuItem(page) {
        //菜单页面跳转
        this.nav.push(page);
    }

    signOut() {
        //安全退出
        this.events.publish(EVENTS.USER_EVENTS.USER_SECURITY.SIGN_OUT, {});
    }

    ngOnInit() {

    }

}

ionicBootstrap(MSPAPP, [I18NService, UserService], PLATFORM_UI_CONFIG);
