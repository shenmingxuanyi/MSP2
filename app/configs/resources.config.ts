/**
 * Created by Z.JM on 2016/8/11.
 */
export const RESTFUL_RESOURCE_END_POINT = {
    SERVICE: "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2",
    STATIC: "https://raw.githubusercontent.com/shenmingxuanyi/restfulapi/master/msp2"
};

export const RESTFUL_SERVICE_RESOURCES = {
    SECURITY: {
        SIGN_IN: RESTFUL_RESOURCE_END_POINT.SERVICE + "/json/security/signIn.json",
        SIGN_OUT: RESTFUL_RESOURCE_END_POINT.SERVICE + "/json/security/signOut.json"
    }
}