/**
 * Created by Z.JM on 2016/9/5.
 */
/// <reference path="./index.d.ts"/>
"use strict";
var ZSSignaturePad = (function () {
    function ZSSignaturePad() {
    }
    ZSSignaturePad.openSignaturePad = function (signaturePadOption) {
        if (signaturePadOption === void 0) { signaturePadOption = {
            width: 1366,
            height: 768,
            minWidth: 1,
            maxWidth: 9,
            penColor: "#000000"
        }; }
        return new Promise(function (resolve, reject) {
            document.addEventListener("deviceready", function () {
                try {
                    SignaturePad.showSignature(signaturePadOption, function (res) {
                        resolve(res);
                    }, function (err) {
                        reject(JSON.stringify(err));
                    });
                }
                catch (e) {
                    reject(JSON.stringify(e));
                }
            }, false);
        });
    };
    return ZSSignaturePad;
}());
exports.ZSSignaturePad = ZSSignaturePad;
