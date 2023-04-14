export = Form;
/**
 * Form
 */
declare function Form(options: any): Form;
declare class Form {
    /**
     * Form
     */
    constructor(options: any);
    __proto__: any;
    type: string;
    _refresh(): void;
    _children: any[];
    _visible(): boolean;
    next(): any;
    _selected: any;
    focusChild(elem: any): void;
    previous(): any;
    focusNext(): void;
    focusPrevious(): void;
    resetSelected(): void;
    focusFirst(): void;
    focusLast(): void;
    submit(): {};
    submission: {};
    cancel(): void;
    reset(): void;
}
//# sourceMappingURL=form.d.ts.map