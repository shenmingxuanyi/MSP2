import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';
import {window} from "rxjs/operator/window";

/*
 Generated class for the NfcReadModalPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/commons/nfc-read-modal/nfc-read-modal.html',
})
export class NfcReadModalPage implements OnDestroy,OnInit {

    type: string = "idcard";

    times: number;

    timer: any;

    constructor(private navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.type = this.navParams.get("type") || "idcard";
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ngOnInit() {
        //开启NFC监听
        console.log("ngOnInit");
        this.times = 60;
        this.timer = setInterval(()=> {
            if (this.times <= 0) {
                this.dismiss();
            }
            --this.times;
        }, 1000)

    }

    ngOnDestroy() {
        //关闭NFC监听
        console.log("ngOnDestroy");
        clearInterval(this.timer);
    }

}
