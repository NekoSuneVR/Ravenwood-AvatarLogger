export = blessed;
/**
 * blessed - a high-level terminal interface library for node.js
 * Copyright (c) 2013-2015, Christopher Jeffrey and contributors (MIT License).
 * https://github.com/chjj/blessed
 */
/**
 * Blessed
 */
declare function blessed(...args: any[]): any;
declare namespace blessed {
    export const program: typeof import("./program");
    const Program_1: typeof import("./program");
    export { Program_1 as Program };
    export const tput: typeof import("./tput");
    export const Tput: typeof import("./tput");
    export const widget: typeof import("./widget");
    export const colors: typeof import("./colors");
    export const unicode: typeof import("./unicode");
    export const helpers: typeof import("./helpers");
}
//# sourceMappingURL=reblessed.d.ts.map