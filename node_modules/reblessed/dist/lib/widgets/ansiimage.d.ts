export = ANSIImage;
/**
 * ANSIImage
 */
declare function ANSIImage(options: any): ANSIImage;
declare class ANSIImage {
    /**
     * ANSIImage
     */
    constructor(options: any);
    scale: any;
    _noFill: boolean;
    __proto__: any;
    type: string;
    setImage(file: any): void;
    file: string;
    img: any;
    width: any;
    height: any;
    cellmap: any;
    play(): any;
    pause(): any;
    stop(): any;
    clearImage(): void;
    render(): any;
}
declare namespace ANSIImage {
    function curl(url: any): any;
}
//# sourceMappingURL=ansiimage.d.ts.map