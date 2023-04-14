/**
 * PNG
 */
declare function PNG(file: any, options: any): any;
declare class PNG {
    /**
     * PNG
     */
    constructor(file: any, options: any);
    options: any;
    colors: any;
    optimization: any;
    speed: any;
    file: any;
    format: any;
    bmp: any[];
    cellmap: any[][];
    frames: any;
    parseRaw(buf: any): {
        index: number;
        id: any;
        len: any;
        pos: number;
        end: number;
        type: any;
        name: any;
        data: any;
        crc: any;
        check: number;
        raw: any;
        flags: {
            critical: boolean;
            public_: boolean;
            conforming: boolean;
            copysafe: boolean;
        };
    }[];
    parseChunks(chunks: any): any;
    width: any;
    height: any;
    bitDepth: any;
    colorType: any;
    compression: any;
    filter: any;
    interlace: any;
    palette: any[];
    size: any;
    idat: any;
    end: boolean;
    alpha: any;
    actl: {
        numFrames?: undefined;
        numPlays?: undefined;
    } | {
        numFrames: number;
        numPlays: any;
    } | {
        numFrames: any;
        numPlays: number;
    };
    parseLines(data: any): any[];
    sampleDepth: number;
    bitsPerPixel: number;
    bytesPerPixel: number;
    wastedBits: number;
    byteWidth: number;
    shiftStart: number;
    shiftMult: any;
    mask: number;
    unfilterLine(filter: any, line: any, prior: any): any;
    sampleLine(line: any, width: any): number[];
    filters: {
        sub: (x: any, line: any, prior: any, bpp: any) => any;
        up: (x: any, line: any, prior: any, bpp: any) => number;
        average: (x: any, line: any, prior: any, bpp: any) => number;
        paeth: (x: any, line: any, prior: any, bpp: any) => any;
        _predictor: (a: any, b: any, c: any) => any;
    };
    /**
     * Adam7 deinterlacing ported to javascript from PyPNG:
     * pypng - Pure Python library for PNG image encoding/decoding
     * Copyright (c) 2009-2015, David Jones (MIT License).
     * https://github.com/drj11/pypng
     *
     * Permission is hereby granted, free of charge, to any person
     * obtaining a copy of this software and associated documentation files
     * (the "Software"), to deal in the Software without restriction,
     * including without limitation the rights to use, copy, modify, merge,
     * publish, distribute, sublicense, and/or sell copies of the Software,
     * and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
     * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
     * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    sampleInterlacedLines(raw: any): any;
    createBitmap(pixels: any): any[];
    createCellmap(bmp: any, options: any): any[][];
    renderANSI(bmp: any): string;
    renderContent(bmp: any, el: any): string;
    renderScreen(bmp: any, screen: any, xi: any, xl: any, yi: any, yl: any): void;
    renderElement(bmp: any, el: any): void;
    pixelToSGR(pixel: any, ch: any): string;
    pixelToTags(pixel: any, ch: any): string;
    pixelToCell(pixel: any, ch: any): any[];
    getOutch: (x: any, y: any, line: any, pixel: any) => string;
    compileFrames(frames: any): any;
    compileFrames_lomem(frames: any): any;
    compileFrames_locpu(frames: any): any;
    _curBmp: any[];
    _lastBmp: any[];
    renderFrame(bmp: any, frame: any, i: any): any[];
    _animate(callback: any): any;
    _control: (state: any) => any;
    play(callback: any): any;
    pause(): void;
    stop(): void;
    toPNG(input: any): any;
    gifMagick(input: any): PNG;
    decompress(buffers: any): any;
    /**
     * node-crc
     * https://github.com/alexgorbatchev/node-crc
     * https://github.com/alexgorbatchev/node-crc/blob/master/LICENSE
     *
     * The MIT License (MIT)
     *
     * Copyright 2014 Alex Gorbatchev
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    crc32: (buf: any) => number;
    _debug(...args: any[]): any;
}
/**
 * GIF
 */
declare function GIF(file: any, options: any): GIF;
declare class GIF {
    /**
     * GIF
     */
    constructor(file: any, options: any);
    options: any;
    pixelLimit: any;
    totalPixels: number;
    width: any;
    height: any;
    flags: any;
    gct: boolean;
    gctsize: number;
    bgIndex: any;
    aspect: any;
    colors: any[][];
    images: {}[];
    extensions: {}[];
    delay: any;
    transparentColor: any;
    disposeMethod: any;
    useTransparent: any;
    numPlays: any;
    minBuffer: any;
    xmp: any;
    icc: any;
    fractint: any;
    decompress(input: any, codeSize: any): number[];
}
export { PNG as png, GIF as gif };
//# sourceMappingURL=tng.d.ts.map