import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController, ToastController} from 'ionic-angular';
import {I18NService} from "../../../providers/i18n-service/i18n-service";
import {IDCard} from "../../../models/business/IDCard";
import {IDCardService} from "../../../providers/id-card-service/id-card-service";
import {ICCardService} from "../../../providers/ic-card-service/ic-card-service";
import {Camera} from "ionic-native";
import {SpacePipe} from "../../../pipes/spacePipe";

/*
 Generated class for the CreateBankCardPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/bank-card/create-bank-card/create-bank-card.html',
    providers: [IDCardService, ICCardService],
    pipes: [SpacePipe]
})
export class CreateBankCardPage {

    originalIDCard: IDCard;

    verificationIDCard: IDCard;

    icCardNumber: string;

    step: number;

    enclosures: Array<string> = [null, null, null];
    enclosureProcesses: Array<number> = [0, 0, 0];

    constructor(private navCtrl: NavController, public i18NService: I18NService, public idCardService: IDCardService, public loadingController: LoadingController, public alertController: AlertController, public icCardService: ICCardService, private toastController: ToastController) {

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

        if (this.step == 2) {
            if (!this.icCardNumber) {
                this.showAlert({message: "请读取银行卡信息"});
                return;
            }
        }

        if (this.step == 4) {

            for (let i = 0, n = this.enclosures.length; i < n; i++) {

                if (!this.enclosures[i]) {
                    this.showAlert({message: "请上传完整的附件信息"});
                    return;
                }
            }

        }


        if (this.step < 5) {
            this.step++;
        } else {
            this.submit();
        }


    }

    cameraPhoto(index: number) {
        Camera.getPicture({}).then((imageData) => {
            this.enclosures[index] = imageData;
            this.upload(index);
        }, (err) => {
        });
    }

    deletePhoto(index: number) {
        this.enclosures[index] = null;
    }

    viewPhoto(index: number) {

    }

    submit() {
        let confirm = this.alertController.create({
            title: '借记卡开卡申请',
            message: '您确定输入的信息无误，要提交借记卡开卡申请?',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        let loader = this.loadingController.create({
                            content: "正在提价申请..."
                        });
                        loader.present();
                        setTimeout(()=> {
                            let toast = this.toastController.create({
                                message: '您已成功提交了借记卡开卡申请，我们会尽快为您处理。',
                                duration: 3000
                            });

                            loader.dismiss()
                                .then(()=> {
                                    toast.present().then(()=> {
                                        this.navCtrl.pop();
                                    });
                                });
                        }, 1500);

                    }
                }
            ]
        });
        confirm.present();

    }

    upload(index: number) {
        this.enclosureProcesses[index] = 0;
        let uploadInterval = setInterval(()=> {
            if (this.enclosureProcesses[index] < 100) {
                ++this.enclosureProcesses[index];
            } else {
                clearInterval(uploadInterval);
            }
        }, 100)
    }
}
