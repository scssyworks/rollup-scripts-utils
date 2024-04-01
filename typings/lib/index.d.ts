declare const _exports: {
    crossPath(path: string): string;
    fromPackage: typeof import("./fromPackage").fromPackage;
    deps: typeof import("./fromPackage").deps;
    resolvePath(p: string): string;
    env(): {
        [key: string]: string;
    };
    cwd(): string;
};
export = _exports;
