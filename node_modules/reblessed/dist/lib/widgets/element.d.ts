export = Element;
/**
 * Element
 */
declare function Element(options: any): Element;
declare class Element {
    /**
     * Element
     */
    constructor(options: any);
    _ignore: boolean;
    name: any;
    position: any;
    noOverflow: any;
    dockBorders: any;
    shadow: any;
    style: any;
    hidden: any;
    fixed: any;
    align: any;
    valign: any;
    wrap: boolean;
    shrink: any;
    ch: any;
    padding: {
        left: any;
        top: any;
        right: any;
        bottom: any;
    };
    border: any;
    parseTags: any;
    draggable: boolean;
    __proto__: any;
    type: string;
    sattr(style: any, fg: any, bg: any): number;
    onScreenEvent(type: any, handler: any): void;
    _slisteners: any;
    onceScreenEvent(type: any, handler: any): void;
    removeScreenEvent(type: any, handler: any): void;
    free(): void;
    hide(): void;
    show(): void;
    toggle(): void;
    focus(): Element;
    setContent(content: any, noClear: any, noTags: any): void;
    content: any;
    getContent(): any;
    setText(content: any, noClear: any): void;
    getText(): any;
    parseContent(noTags: any): boolean;
    _clines: any[];
    _pcontent: string;
    _parseTags(text: any): any;
    _parseAttr(lines: any): number[];
    _align(line: any, width: any, align: any): any;
    _wrapContent(content: any, width: any): any[];
    enableMouse(): void;
    enableKeys(): void;
    enableInput(): void;
    enableDrag(verify: any): boolean;
    _dragMD: (data: any) => void;
    _dragM: (data: any) => void;
    _draggable: boolean;
    disableDrag(): boolean;
    key(...args: any[]): any;
    onceKey(...args: any[]): any;
    unkey: (...args: any[]) => any;
    removeKey(...args: any[]): any;
    setIndex(index: any): void;
    setFront(): void;
    setBack(): void;
    clearPos(get: any, override: any): void;
    setLabel(options: any): void;
    _label: import("./box");
    _labelScroll: () => void;
    _labelResize: () => void;
    removeLabel(): void;
    setHover(options: any): void;
    _hoverOptions: any;
    removeHover(): void;
    /**
     * Positioning
     */
    _getPos(): any;
    /**
     * Position Getters
     */
    _getWidth(get: any): any;
    _getHeight(get: any): any;
    _getLeft(get: any): any;
    _getRight(get: any): any;
    _getTop(get: any): any;
    _getBottom(get: any): any;
    /**
     * Rendering - here be dragons
     */
    _getShrinkBox(xi: any, xl: any, yi: any, yl: any, get: any): {
        xi: any;
        xl: any;
        yi: any;
        yl: any;
    };
    lpos: any;
    _getShrinkContent(xi: any, xl: any, yi: any, yl: any): {
        xi: any;
        xl: any;
        yi: any;
        yl: any;
    };
    _getShrink(xi: any, xl: any, yi: any, yl: any, get: any): {
        xi: any;
        xl: any;
        yi: any;
        yl: any;
    };
    _getCoords(get: any, noscroll: any): {
        xi: any;
        xl: any;
        yi: any;
        yl: any;
        base: any;
        noleft: boolean;
        noright: boolean;
        notop: boolean;
        nobot: boolean;
        renders: any;
    };
    render(): {
        xi: any;
        xl: any;
        yi: any;
        yl: any;
        base: any;
        noleft: boolean;
        noright: boolean;
        notop: boolean;
        nobot: boolean;
        renders: any;
    };
    _render: any;
    /**
     * Content Methods
     */
    insertLine(i: any, line: any): void;
    deleteLine(i: any, n: any): void;
    insertTop(line: any): void;
    insertBottom(line: any): void;
    deleteTop(n: any): void;
    deleteBottom(n: any): void;
    setLine(i: any, line: any): void;
    setBaseLine(i: any, line: any): void;
    getLine(i: any): any;
    getBaseLine(i: any): any;
    clearLine(i: any): void;
    clearBaseLine(i: any): void;
    unshiftLine(line: any): void;
    shiftLine(n: any): void;
    pushLine(line: any): void;
    popLine(n: any): void;
    getLines(): any;
    getScreenLines(): any[];
    strWidth(text: any): any;
    screenshot(xi: any, xl: any, yi: any, yl: any): any;
}
//# sourceMappingURL=element.d.ts.map