/**
 * Created by Z.JM on 2016/8/9.
 */
/**
 * Created by Z.JM on 2016/8/8.
 */

export const EVENTS = {
    //用户操作事件
    USER_EVENTS: {
        USER_SECURITY: {
            SIGN_IN: "USER_EVENTS:USER_SECURITY:SIGN_IN",
            SIGN_OUT: "USER_EVENTS:USER_SECURITY:SIGN_OUT"
        },
        USER_OPTION: {}
    },

    //系统设置事件
    SYSTEM_EVENTS: {
        SETTING: {
            CHANGE_I18N_LANG: "SYSTEM_EVENTS:SETTING:CHANGE_LANG"
        }
    },

    //业务事件
    BUSINESS_EVENTS: {
        BUSINESS_OPTION: {
            CARD_BUSINESS: {}
        }
    }
}

