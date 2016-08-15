import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {I18NService} from "../../../providers/i18n-service/i18n-service";
import {CreateBankCardPage} from "../create-bank-card/create-bank-card";

/*
 Generated class for the ChoiceBankCardPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/bank-card/choice-bank-card/choice-bank-card.html',
})
export class ChoiceBankCardPage {

    cardList: Array<any>;
    cardResource: string;

    constructor(private navCtrl: NavController, public i18NService: I18NService) {

        this.cardResource = "all";

        this.cardList = [
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_515.png",
                "name": "汇金15",
                "order": 1
            },
                {
                    "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_519.png",
                    "name": "汇金卡19",
                    "order": 2
                },
                {
                    "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_522.png",
                    "name": "汇金卡22",
                    "order": 3
                }],
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_523.png",
                "name": "汇金卡23",
                "order": 23
            },
                {
                    "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_526.png",
                    "name": "汇金卡26",
                    "order": 26
                },
                {
                    "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_529.png",
                    "name": "汇金卡29",
                    "order": 29
                }],
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_530.png",
                "name": "汇金卡30",
                "order": 30
            },
                {
                    "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_532.png",
                    "name": "汇金卡32",
                    "order": 32
                },
                {
                    "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_537.png",
                    "name": "汇金卡37",
                    "order": 37
                }],
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_551.png",
                "name": "汇金卡51",
                "order": 51
            }, {
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_564.png",
                "name": "汇金卡64",
                "order": 64
            }, {
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_572.png",
                "name": "汇金卡72",
                "order": 72
            }],
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_573.png",
                "name": "汇金卡73",
                "order": 73
            }, {
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_576.png",
                "name": "汇金卡76",
                "order": 76
            }, {
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_577.png",
                "name": "汇金卡77",
                "order": 77
            }],
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_578.png",
                "name": "汇金卡78",
                "order": 79
            }, {
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_579.png",
                "name": "汇金卡79",
                "order": 79
            }, {
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_597.png",
                "name": "汇金卡97",
                "order": 98
            }],
            [{
                "image": "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2/image/bank-card/W020150515888888_738.png",
                "name": "汇金卡38",
                "order": 38
            }]
        ];


    }

    createCard(card) {
        this.navCtrl.push(CreateBankCardPage, {card: card});
    }

}
