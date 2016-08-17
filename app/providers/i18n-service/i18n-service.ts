import {Injectable} from '@angular/core';
import {Events} from "ionic-angular/index";
import {EVENTS} from "../../configs/event.config";
import {I18N_MAPPINGS_CONSTANT} from "../../configs/i18n.config";

/*
 Generated class for the I18N provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class I18NService {
    //语言定义
    private lang: string;
    //国际化映射
    private i18nMapping;

    constructor(private events: Events) {
        this.setLang("ZH_CN");
    }

    setI18nMapping(i18nMapping) {
        this.i18nMapping = i18nMapping;
    }

    getI18nMapping() {
        return this.i18nMapping;
    }

    setLang(lang) {
        this.lang = lang;
        this.setI18nMapping(I18N_MAPPINGS_CONSTANT[this.lang]);
        this.events.publish(EVENTS.SYSTEM_EVENTS.SETTING.CHANGE_I18N_LANG, this.lang);
    }

    getLang() {
        return this.lang;
    }


}

