declare const _exports: {
  Logger: {
    new (
      args?:
        | {
            silent?: boolean | undefined;
            verbose?: boolean | undefined;
            watch?: boolean | undefined;
          }
        | undefined
    ): {
      _silent: boolean;
      _verbose: boolean;
      _watch: boolean;
      print(text: string, info?: string | undefined): void;
      log(text: string, info?: string | undefined): void;
      error(text: string, info?: string | undefined): void;
      success(text: string, info?: string | undefined): void;
      warn(text: string, info?: string | undefined): void;
      muted(text: string, info?: string | undefined): void;
      verbose(text: string): void;
      timeStart(id: string): void;
      timeEnd(id: string): void;
    };
  };
  getLogger(
    args?:
      | {
          silent?: boolean | undefined;
          verbose?: boolean | undefined;
          watch?: boolean | undefined;
        }
      | undefined
  ): {
    _silent: boolean;
    _verbose: boolean;
    _watch: boolean;
    print(text: string, info?: string | undefined): void;
    log(text: string, info?: string | undefined): void;
    error(text: string, info?: string | undefined): void;
    success(text: string, info?: string | undefined): void;
    warn(text: string, info?: string | undefined): void;
    muted(text: string, info?: string | undefined): void;
    verbose(text: string): void;
    timeStart(id: string): void;
    timeEnd(id: string): void;
  };
  crossPath(path: string): string;
  fromPackage: typeof import('./fromPackage').fromPackage;
  deps: typeof import('./fromPackage').deps;
  resolvePath(p: string): string;
  env(): {
    [key: string]: string;
  };
  cwd(): string;
};
export = _exports;
