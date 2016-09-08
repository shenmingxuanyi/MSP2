/**
 * Created by Z.JM on 2016/9/5.
 */

interface SignaturePad {
    showSignature(option: SignaturePadOption, success: SignaturePadSuccessFunction, error: SignaturePadErrorFunction);
}

interface SignaturePadOption {

    width?: number;
    height?: number;
    minWidth?: number;
    maxWidth?: number;
    penColor?: string;

}

interface SignaturePadSuccessFunction {
    (result: SignaturePadSuccessResult): void;
}

interface SignaturePadSuccessResult {
    imageUrl: string;
}

interface SignaturePadErrorFunction {
    (any): void;
}

declare var SignaturePad: SignaturePad;