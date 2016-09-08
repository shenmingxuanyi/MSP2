/**
 * Created by Z.JM on 2016/9/5.
 */
/// <reference path="./index.d.ts"/>

export class ZSSignaturePad {


    static openSignaturePad(signaturePadOption: SignaturePadOption = {
        width: 1366,
        height: 768,
        minWidth: 1,
        maxWidth: 9,
        penColor: "#000000"
    }): Promise<any> {

        return new Promise<any>((resolve, reject)=> {
            document.addEventListener("deviceready", ()=> {

                try {
                    SignaturePad.showSignature(signaturePadOption, (res)=> {
                        resolve(res);
                    }, (err)=> {
                        reject(JSON.stringify(err));
                    });
                } catch (e) {
                    reject(JSON.stringify(e));
                }

            }, false)
        });

    }
}