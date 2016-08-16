import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
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

    constructor(private navCtrl: NavController, public i18NService: I18NService, public idCardService: IDCardService, public loadingController: LoadingController) {

    }


    readIDCard() {
        let loader = this.loadingController.create({
            content: "正在读取身份证..."
        });
        loader.present();
        this.idCardService.read(1500).then(idCardInfo=> {
            this.originalIDCard = idCardInfo;
            loader.dismiss().then(()=> {
                this.validateIDCard();
            });
        });
    }

    validateIDCard() {
        let loader = this.loadingController.create({
            content: "正在验证身份证..."
        });
        loader.present();
        this.idCardService.read(3000).then(idCardInfo=> {
            this.verificationIDCard = idCardInfo;
            loader.dismiss();
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
