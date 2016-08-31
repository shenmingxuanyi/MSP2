import {Component, OnInit} from '@angular/core';
import {NavController, MenuController, ViewController} from 'ionic-angular';
import {Observable} from "rxjs/Rx";
import {ChoiceBankCardPage} from "../bank-card/choice-bank-card/choice-bank-card";
import {I18NService} from "../../providers/i18n-service/i18n-service";
import {NotificationsPage} from "../notifications/notifications";
import {SignaturePadPage} from "../commons/signature-pad/signature-pad";

/*
 Generated class for the MainPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/main/main.html',
})
export class MainPage implements OnInit {
    constructor(private nav: NavController, private menuController: MenuController, public viewController: ViewController, public i18NService: I18NService) {
    }

    //在组件初始化
    ngOnInit() {

        //菜单控制
        this.viewController.willEnter.subscribe(()=> {

            this.menuController.close();
            this.menuController.swipeEnable(true);

        });
        //菜单控制
        this.viewController.willLeave.subscribe(()=> {
            this.menuController.close();
            this.menuController.swipeEnable(false);
        });

        // this.getObservable().subscribe((n)=> {
        //     console.log(n);
        // }, (error)=> {
        //     console.log(error);
        // }, ()=> {
        //     console.log("complete");
        // });

    }


    getObservable(): Observable<number> {
        return Observable.create(observer=> {
            try {
                observer.next(1 / 0);
                observer.next(2);
                observer.next(3);
                setTimeout(()=> {
                    observer.next(4);
                    observer.complete();
                }, 1000);
            } catch (error) {
                observer.error(error);
            }
        });
    }

    createBankCard() {
        this.nav.push(ChoiceBankCardPage);
    }

    signaturePad() {
        this.nav.push(SignaturePadPage);
    }

    notification() {
        this.nav.push(NotificationsPage);
    }

    qrScanner() {

    }


}
