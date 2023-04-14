export = OverlayImage;
/**
 * OverlayImage
 * Good example of w3mimgdisplay commands:
 * https://github.com/hut/ranger/blob/master/ranger/ext/img_display.py
 */
declare function OverlayImage(options: any): OverlayImage;
declare class OverlayImage {
    /**
     * OverlayImage
     * Good example of w3mimgdisplay commands:
     * https://github.com/hut/ranger/blob/master/ranger/ext/img_display.py
     */
    constructor(options: any);
    __proto__: any;
    type: string;
    spawn(file: any, args: any, opt: any, callback: any): any;
    setImage(img: any, callback: any): any;
    _queue: any;
    _settingImage: boolean;
    file: any;
    renderImage(img: any, ratio: any, callback: any): any;
    clearImage(callback: any): any;
    imageSize(callback: any): any;
    termSize(callback: any): any;
    getPixelRatio(callback: any): any;
    renderImageSync(img: any, ratio: any): boolean;
    _lastSize: any;
    _props: {
        aleft: number;
        atop: number;
        width: number;
        height: number;
    };
    clearImageSync(): boolean;
    imageSizeSync(): {
        raw: string;
        width: number;
        height: number;
    };
    termSizeSync(_: any, recurse: any): any;
    getPixelRatioSync(): {
        tw: number;
        th: number;
    };
    _needsRatio: boolean;
    _ratio: {
        tw: number;
        th: number;
    };
    displayImage(callback: any): any;
}
declare namespace OverlayImage {
    const w3mdisplay: string;
}
//# sourceMappingURL=overlayimage.d.ts.map