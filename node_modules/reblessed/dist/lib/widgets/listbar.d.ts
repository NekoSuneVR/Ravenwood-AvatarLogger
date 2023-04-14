export = Listbar;
/**
 * Listbar / HorizontalList
 */
declare function Listbar(options: any): Listbar;
declare class Listbar {
    /**
     * Listbar / HorizontalList
     */
    constructor(options: any);
    items: any[];
    ritems: any[];
    commands: any[];
    leftBase: number;
    leftOffset: number;
    mouse: any;
    __proto__: any;
    type: string;
    setItems(commands: any): void;
    add: (item: any, callback: any) => void;
    addItem: (item: any, callback: any) => void;
    appendItem(item: any, callback: any): void;
    render(): any;
    select(offset: any): void;
    removeItem(child: any): void;
    move(offset: any): void;
    moveLeft(offset: any): void;
    moveRight(offset: any): void;
    selectTab(index: any): void;
}
//# sourceMappingURL=listbar.d.ts.map