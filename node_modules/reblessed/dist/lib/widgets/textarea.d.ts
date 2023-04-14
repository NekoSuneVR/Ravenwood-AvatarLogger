export = Textarea;
/**
 * Textarea
 */
declare function Textarea(options: any): Textarea;
declare class Textarea {
    /**
     * Textarea
     */
    constructor(options: any);
    value: any;
    __updateCursor: any;
    __proto__: any;
    type: string;
    _updateCursor(get: any): void;
    input: (callback: any) => void;
    setInput: (callback: any) => void;
    readInput(callback: any): void;
    _reading: boolean;
    _callback: any;
    _done: (err: any, value: any) => any;
    __done: any;
    _listener(ch: any, key: any): any;
    _typeScroll(): void;
    getValue(): any;
    setValue(value: any): void;
    _value: any;
    clearInput: () => void;
    clearValue(): void;
    submit(): any;
    cancel(): any;
    render(): any;
    editor: (callback: any) => any;
    setEditor: (callback: any) => any;
    readEditor(callback: any): any;
}
//# sourceMappingURL=textarea.d.ts.map