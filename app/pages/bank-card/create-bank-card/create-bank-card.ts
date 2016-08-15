import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {I18NService} from "../../../providers/i18n-service/i18n-service";

/*
 Generated class for the CreateBankCardPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/bank-card/create-bank-card/create-bank-card.html',
})
export class CreateBankCardPage {

    step: number;

    constructor(private navCtrl: NavController, public i18NService: I18NService) {

    }

    ionViewWillEnter() {
        this.step = 0;
    }

    lastStep() {
        if (this.step > 0) {
            this.step--;
        }

    }

    nextStep() {
        if (this.step < 5) {
            this.step++;
        }
    }
}
