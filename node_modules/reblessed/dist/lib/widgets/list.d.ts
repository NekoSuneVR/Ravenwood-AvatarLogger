export = List;
/**
 * List
 */
declare function List(options: any): List;
declare class List {
    /**
     * List
     */
    constructor(options: any);
    value: string;
    items: any[];
    ritems: any;
    selected: number;
    _isList: boolean;
    interactive: boolean;
    mouse: any;
    __proto__: any;
    type: string;
    createItem(content: any): Box;
    add: (content: any) => Box;
    addItem: (content: any) => Box;
    appendItem(content: any): Box;
    removeItem(child: any): any;
    insertItem(child: any, content: any): Box;
    getItem(child: any): any;
    setItem(child: any, content: any): void;
    clearItems(): void;
    setItems(items: any): void;
    pushItem(content: any): number;
    popItem(): any;
    unshiftItem(content: any): number;
    shiftItem(): any;
    spliceItem(child: any, n: any, ...args: any[]): any[];
    find: (search: any, back: any) => number;
    fuzzyFind(search: any, back: any): number;
    getItemIndex(child: any): any;
    select(index: any): void;
    _listInitialized: boolean;
    move(offset: any): void;
    up(offset: any): void;
    down(offset: any): void;
    pick(label: any, callback: any): any;
    enterSelected(i: any): void;
    cancelSelected(i: any): void;
}
import Box = require("./box");
//# sourceMappingURL=list.d.ts.map