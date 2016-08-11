import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {I18NService} from "../../providers/i18n-service/i18n-service";

/*
 Generated class for the SystemSettingPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/system-setting/system-setting.html',
})
export class SystemSettingPage implements OnInit {

    language:string;
    word:string;

    languageList:Array<{name?:string,value?:string,icon?:string}>;

    constructor(private nav:NavController, public i18NService:I18NService) {

    }

    ngOnInit() {
        this.language = this.i18NService.getLang();
        this.languageList = [{
            name: "中文（中国-大陆）",
            value: "ZH_CN",
            icon: ""
        }, {
            name: "中国語（中国-台灣）",
            value: "ZH_TW",
            icon: ""
        }, {
            name: "English",
            value: "EN",
            icon: ""
        }, {
            name: "日本語",
            value: "JA",
            icon: ""
        },
        ]
    }

    changeLanguage(language) {
        this.i18NService.setLang(language);
    }
}
