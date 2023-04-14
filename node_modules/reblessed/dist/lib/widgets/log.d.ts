export = Log;
/**
 * Log
 */
declare function Log(options: any): Log;
declare class Log {
    /**
     * Log
     */
    constructor(options: any);
    scrollback: any;
    scrollOnInput: any;
    __proto__: any;
    type: string;
    log: (...args: any[]) => any;
    add(...args: any[]): any;
    _scroll: any;
    scroll(offset: any, always: any): any;
    _userScrolled: boolean;
}
//# sourceMappingURL=log.d.ts.map