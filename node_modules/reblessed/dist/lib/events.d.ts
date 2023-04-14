/**
 * EventEmitter
 */
export function EventEmitter(): void;
export class EventEmitter {
    _events: {};
    setMaxListeners(n: any): void;
    _maxListeners: any;
    addListener(type: any, listener: any): void;
    on: any;
    removeListener(type: any, listener: any): void;
    off: any;
    removeAllListeners(type: any): void;
    once(type: any, listener: any): any;
    listeners(type: any): any;
    _emit(type: any, args: any): any;
    emit(type: any, ...args: any[]): any;
}
//# sourceMappingURL=events.d.ts.map