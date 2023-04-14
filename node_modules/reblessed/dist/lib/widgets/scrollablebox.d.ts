export = ScrollableBox;
/**
 * ScrollableBox
 */
declare function ScrollableBox(options: any): ScrollableBox;
declare class ScrollableBox {
    /**
     * ScrollableBox
     */
    constructor(options: any);
    scrollable: boolean;
    childOffset: number;
    childBase: number;
    baseLimit: any;
    alwaysScroll: any;
    scrollbar: any;
    track: any;
    __proto__: any;
    type: string;
    _scrollBottom(): any;
    setScroll: (offset: any, always: any) => any;
    scrollTo(offset: any, always: any): any;
    getScroll(): number;
    scroll(offset: any, always: any): any;
    _recalculateIndex(): number;
    resetScroll(): any;
    getScrollHeight(): number;
    getScrollPerc(s: any): number;
    setScrollPerc(i: any): any;
}
//# sourceMappingURL=scrollablebox.d.ts.map