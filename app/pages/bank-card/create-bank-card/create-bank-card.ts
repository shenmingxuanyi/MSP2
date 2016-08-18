import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {I18NService} from "../../../providers/i18n-service/i18n-service";
import {IDCard} from "../../../models/business/IDCard";
import {IDCardService} from "../../../providers/id-card-service/id-card-service";
import {ICCardService} from "../../../providers/ic-card-service/ic-card-service";

/*
 Generated class for the CreateBankCardPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/bank-card/create-bank-card/create-bank-card.html',
    providers: [IDCardService, ICCardService]
})
export class CreateBankCardPage {

    originalIDCard: IDCard;

    verificationIDCard: IDCard;

    icCardNumber: string;

    step: number;

    enclosures: Array<string> = [null, null, null];

    constructor(private navCtrl: NavController, public i18NService: I18NService, public idCardService: IDCardService, public loadingController: LoadingController, public alertController: AlertController, public icCardService: ICCardService) {

    }

    showAlert(options: {title?: string,message?: string,subTitle?: string}) {
        let alert = this.alertController.create({
            title: options.title || "提示信息",
            subTitle: options.subTitle,
            message: options.message,
            buttons: ['知道了']
        });
        alert.present();
    }

    readIDCard() {

        this.originalIDCard = null;
        this.verificationIDCard = null;

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

    readICCard() {
        this.icCardNumber = null;

        let loader = this.loadingController.create({
            content: "正在读取银行卡..."
        });

        loader.present();

        this.icCardService
            .read()
            .then((number)=> {
                this.icCardNumber = number;
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

        if (this.step == 0) {
            if (!this.verificationIDCard) {
                this.showAlert({message: "请验证身份信息"});
                return;
            }
        }

        if (this.step < 5) {
            this.step++;
        }
    }

    cameraPhoto(path) {
        console.log("path" + path);
        path = "images/user.png";
    }

    deletePhoto(path) {
        console.log("path" + path);
        path = null;
    }
}
