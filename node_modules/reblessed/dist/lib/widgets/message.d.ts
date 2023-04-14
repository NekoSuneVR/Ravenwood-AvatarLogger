export = Message;
/**
 * Message / Error
 */
declare function Message(options: any): Message;
declare class Message {
    /**
     * Message / Error
     */
    constructor(options: any);
    __proto__: any;
    type: string;
    log: (text: any, time: any, callback: any) => void;
    display(text: any, time: any, callback: any): void;
    error(text: any, time: any, callback: any): void;
}
//# sourceMappingURL=message.d.ts.map