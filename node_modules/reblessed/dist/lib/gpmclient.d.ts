export = GpmClient;
declare function GpmClient(options: any): GpmClient;
declare class GpmClient {
    constructor(options: any);
    __proto__: any;
    stop(): void;
    ButtonName(btn: any): "" | "left" | "right" | "middle";
    hasShiftKey(mod: any): boolean;
    hasCtrlKey(mod: any): boolean;
    hasMetaKey(mod: any): boolean;
}
//# sourceMappingURL=gpmclient.d.ts.map