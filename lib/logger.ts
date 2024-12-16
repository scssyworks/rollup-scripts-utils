import chalk from 'chalk';

export type LoggerArgs = {
  silent?: boolean;
  verbose?: boolean;
  watch?: boolean;
};

export class Logger {
  private _silent: boolean;
  private _verbose: boolean;
  private _watch: boolean;
  /**
   * Initializes a new instance of the class.
   */
  constructor(args: LoggerArgs) {
    const { silent, verbose, watch } = args ?? {};
    if (silent && verbose) {
      console.log(
        chalk.yellow(
          chalk.bold(
            'Warning: "--verbose" is currently enabled. "--silent" will be ignored!'
          )
        )
      );
    }
    this._silent = Boolean(silent && !verbose);
    this._verbose = Boolean(verbose);
    this._watch = Boolean(watch);
  }

  /**
   * Prints the given text to the console if the silent flag is not set.
   * If an additional info parameter is provided, it is appended to the text.
   */
  print(text: string, info?: string) {
    if (!this._silent) {
      const logs = [chalk.bold(text)];
      if (info) {
        logs.push(`(${chalk.yellow(info)})`);
      }
      console.log(...logs);
    }
  }
  /**
   * Logs the given text with blue color using chalk library and prints the additional information if provided.
   */
  log(text: string, info?: string) {
    this.print(chalk.blue(text), info);
  }
  /**
   * A function that logs an error message with red color and prints the additional information if provided.
   */
  error(text: string, info?: string) {
    this.print(chalk.red(text), info);
  }
  /**
   * Prints the given text in green color to the console, along with any additional information provided.
   */
  success(text: string, info?: string) {
    this.print(chalk.green(text), info);
  }
  /**
   * Prints a warning message using the provided text and additional information.
   */
  warn(text: string, info?: string) {
    this.print(chalk.yellow(text), info);
  }
  /**
   * Prints the given text in gray color, indicating that it is muted.
   */
  muted(text: string, info?: string) {
    this.print(chalk.gray(text), info);
  }
  /**
   * A function that logs the given text if the "verbose" flag is set.
   */
  verbose(text: string) {
    if (this._verbose) {
      console.error(text);
    }
  }
  /**
   * A function that starts a timer and logs the time with a colored ID.
   */
  timeStart(id: string) {
    console.time(chalk.bold(this._watch ? chalk.green(id) : chalk.blue(id)));
  }
  /**
   * Ends a timer and logs the elapsed time.
   */
  timeEnd(id: string) {
    console.timeEnd(chalk.bold(this._watch ? chalk.green(id) : chalk.blue(id)));
  }
}

const resolver = (function resolveLogger() {
  let logger: Logger;
  /**
   * Resolves logger instance
   */
  return (args: LoggerArgs) => {
    if (logger) {
      return logger;
    }
    logger = new Logger(args);
    return logger;
  };
})();

/**
 * Resolves logger instance.
 */
export function getLogger(args: LoggerArgs) {
  return resolver(args);
}
