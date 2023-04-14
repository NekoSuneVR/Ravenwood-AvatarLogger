export = Terminal;
/**
 * Terminal
 */
declare function Terminal(options: any): Terminal;
declare class Terminal {
    /**
     * Terminal
     */
    constructor(options: any);
    handler: any;
    shell: any;
    args: any;
    cursor: any;
    cursorBlink: any;
    screenKeys: any;
    style: {};
    termName: any;
    __proto__: any;
    type: string;
    bootstrap(): void;
    term: any;
    _onData: (data: any) => void;
    pty: any;
    write(data: any): any;
    render(): any;
    dattr: any;
    _isMouse(buf: any): boolean;
    setScroll: (offset: any) => any;
    scrollTo(offset: any): any;
    getScroll(): any;
    scroll(offset: any): any;
    resetScroll(): any;
    getScrollHeight(): number;
    getScrollPerc(): number;
    setScrollPerc(i: any): any;
    screenshot(xi: any, xl: any, yi: any, yl: any): any;
    kill(): void;
}
//# sourceMappingURL=terminal.d.ts.map