import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {I18NService} from "../../../providers/i18n-service/i18n-service";
import {IDCard} from "../../../model/business/IDCard";
import {IDCardService} from "../../../providers/id-card-service/id-card-service";

/*
 Generated class for the CreateBankCardPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/bank-card/create-bank-card/create-bank-card.html',
    providers: [IDCardService]
})
export class CreateBankCardPage {

    originalIDCard: IDCard;
    verificationIDCard: IDCard;

    step: number;

    constructor(private navCtrl: NavController, public i18NService: I18NService, public idCardService: IDCardService) {

    }


    readIDCard() {
        this.idCardService.read().then(idCardInfo=> {
            this.originalIDCard = idCardInfo;
        });
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
