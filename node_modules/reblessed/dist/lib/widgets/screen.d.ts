export = Screen;
/**
 * Screen
 */
declare function Screen(options: any): Screen;
declare class Screen {
    /**
     * Screen
     */
    constructor(options: any);
    program: any;
    tput: any;
    autoPadding: boolean;
    tabc: string;
    dockBorders: any;
    ignoreLocked: any;
    _unicode: any;
    fullUnicode: any;
    dattr: number;
    renders: number;
    position: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        readonly height: any;
        readonly width: any;
    };
    left: number;
    aleft: number;
    rleft: number;
    right: number;
    aright: number;
    rright: number;
    top: number;
    atop: number;
    rtop: number;
    bottom: number;
    abottom: number;
    rbottom: number;
    ileft: number;
    itop: number;
    iright: number;
    ibottom: number;
    iheight: number;
    iwidth: number;
    padding: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    hover: any;
    history: any[];
    clickable: any[];
    keyable: any[];
    grabKeys: boolean;
    lockKeys: boolean;
    _buf: string;
    _ci: number;
    title: any;
    cursor: {
        artificial: any;
        shape: any;
        blink: any;
        color: any;
        _set: boolean;
        _state: number;
        _hidden: boolean;
    };
    __proto__: any;
    type: string;
    setTerminal(terminal: any): void;
    enter(): void;
    leave(): void;
    postEnter(): void;
    debugLog: Log;
    _destroy: any;
    destroy(): void;
    destroyed: boolean;
    log(...args: any[]): any;
    debug(...args: any[]): any;
    _listenMouse(el: any): void;
    _listenedMouse: boolean;
    enableMouse(el: any): void;
    _listenKeys(el: any): void;
    _listenedKeys: boolean;
    enableKeys(el: any): void;
    enableInput(el: any): void;
    _initHover(): void;
    _hoverText: Box;
    alloc(dirty: any): void;
    lines: any[];
    olines: any[];
    realloc(): void;
    render(): void;
    _borderStops: {};
    blankLine(ch: any, dirty: any): any[][];
    insertLine(n: any, y: any, top: any, bottom: any): void;
    deleteLine(n: any, y: any, top: any, bottom: any): void;
    insertLineNC(n: any, y: any, top: any, bottom: any): void;
    deleteLineNC(n: any, y: any, top: any, bottom: any): void;
    insertBottom(top: any, bottom: any): void;
    insertTop(top: any, bottom: any): void;
    deleteBottom(top: any, bottom: any): void;
    deleteTop(top: any, bottom: any): void;
    cleanSides(el: any): any;
    _dockBorders(): void;
    _getAngle(lines: any, x: any, y: any): any;
    draw(start: any, end: any): void;
    _reduceColor(color: any): any;
    attrCode(code: any, cur: any, def: any): number;
    codeAttr(code: any): string;
    focusOffset(offset: any): any;
    focusPrev: () => any;
    focusPrevious(): any;
    focusNext(): any;
    focusPush(el: any): void;
    focusPop(): any;
    saveFocus(): any;
    _savedFocus: any;
    restoreFocus(): any;
    rewindFocus(): any;
    _focus(self: any, old: any): void;
    clearRegion(xi: any, xl: any, yi: any, yl: any, override: any): void;
    fillRegion(attr: any, ch: any, xi: any, xl: any, yi: any, yl: any, override: any): void;
    key(...args: any[]): any;
    onceKey(...args: any[]): any;
    unkey: (...args: any[]) => any;
    removeKey(...args: any[]): any;
    spawn(file: any, args: any, options: any): any;
    exec(file: any, args: any, options: any, callback: any): any;
    readEditor(options: any, callback: any): any;
    displayImage(file: any, callback: any): any;
    setEffects(el: any, fel: any, over: any, out: any, effects: any, temp: any): void;
    sigtstp(callback: any): void;
    copyToClipboard(text: any): any;
    cursorShape(shape: any, blink: any): any;
    _cursorBlink: number;
    cursorColor(color: any): any;
    cursorReset: () => any;
    resetCursor(): any;
    _cursorAttr(cursor: any, dattr: any): {
        ch: any;
        attr: any;
    };
    screenshot(xi: any, xl: any, yi: any, yl: any, term: any): string;
    /**
     * Positioning
     */
    _getPos(): Screen;
}
declare namespace Screen {
    const global: any;
    const total: number;
    const instances: any[];
    function bind(screen: any): void;
}
import Log = require("./log");
import Box = require("./box");
//# sourceMappingURL=screen.d.ts.map