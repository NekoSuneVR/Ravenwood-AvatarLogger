export = Node;
/**
 * Node
 */
declare function Node(options: any): Node;
declare class Node {
    /**
     * Node
     */
    constructor(options: any);
    options: any;
    screen: any;
    parent: any;
    children: any[];
    $: {};
    _: {};
    data: {};
    uid: number;
    index: number;
    detached: boolean;
    __proto__: any;
    type: string;
    insert(element: any, i: any): void;
    prepend(element: any): void;
    append(element: any): void;
    insertBefore(element: any, other: any): void;
    insertAfter(element: any, other: any): void;
    remove(element: any): void;
    detach(): void;
    free(): void;
    destroy(): void;
    forDescendants(iter: any, s: any): void;
    forAncestors(iter: any, s: any): void;
    collectDescendants(s: any): any[];
    collectAncestors(s: any): any[];
    emitDescendants(...args: any[]): void;
    emitAncestors(...args: any[]): void;
    hasDescendant(target: any): boolean;
    hasAncestor(target: any): boolean;
    get(name: any, value: any): any;
    set(name: any, value: any): any;
}
declare namespace Node {
    const uid: number;
}
//# sourceMappingURL=node.d.ts.map