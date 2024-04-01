declare const _exports: {
    crossPath(path: string): string;
    fromPackage: typeof import("./lib/fromPackage").fromPackage;
    deps: typeof import("./lib/fromPackage").deps;
    resolvePath(p: string): string;
    env(): {
        [key: string]: string;
    };
    cwd(): string;
};
export = _exports;
