const chalk = require('chalk');

class Logger {
  /**
   * Initializes a new instance of the class.
   *
   * @param {{ silent?: boolean, verbose?: boolean, watch?: boolean }} [args] - Logger parameters:
   */
  constructor(args) {
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
   *
   * @param {string} text - The text to be printed.
   * @param {string} [info] - Additional information to be appended to the text.
   */
  print(text, info) {
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
   *
   * @param {string} text - The text to be logged.
   * @param {string} [info] - Additional information to be printed.
   * @return {void} This function does not return any value.
   */
  log(text, info) {
    this.print(chalk.blue(text), info);
  }
  /**
   * A function that logs an error message with red color and prints the additional information if provided.
   *
   * @param {string} text - the error message to be displayed
   * @param {string} [info] - additional information related to the error
   * @return {void} This function does not return any value.
   */
  error(text, info) {
    this.print(chalk.red(text), info);
  }
  /**
   * Prints the given text in green color to the console, along with any additional information provided.
   *
   * @param {string} text - The text to be printed in green color.
   * @param {string} [info] - Additional information to be printed along with the text.
   * @return {void} This function does not return any value.
   */
  success(text, info) {
    this.print(chalk.green(text), info);
  }
  /**
   * Prints a warning message using the provided text and additional information.
   *
   * @param {string} text - The warning message to be printed.
   * @param {string} [info] - Additional information to be printed along with the warning message.
   * @return {void} This function does not return any value.
   */
  warn(text, info) {
    this.print(chalk.yellow(text), info);
  }
  /**
   * Prints the given text in gray color, indicating that it is muted.
   *
   * @param {string} text - The text to be printed.
   * @param {string} [info] - Additional information related to the text.
   * @return {void} This function does not return a value.
   */
  muted(text, info) {
    this.print(chalk.gray(text), info);
  }
  /**
   * A function that logs the given text if the "verbose" flag is set.
   *
   * @param {string} text - the text to be logged
   */
  verbose(text) {
    if (this._verbose) {
      console.error(text);
    }
  }
  /**
   * A function that starts a timer and logs the time with a colored ID.
   *
   * @param {string} id - the ID used for logging
   */
  timeStart(id) {
    console.time(chalk.bold(this._watch ? chalk.green(id) : chalk.blue(id)));
  }
  /**
   * Ends a timer and logs the elapsed time.
   *
   * @param {string} id - The identifier of the timer to end.
   * @return {void} This function does not return a value.
   */
  timeEnd(id) {
    console.timeEnd(chalk.bold(this._watch ? chalk.green(id) : chalk.blue(id)));
  }
}

const resolver = (function resolveLogger() {
  /**
   * @type Logger
   */
  let logger;
  /**
   * Resolves logger instance
   * @param {{ silent?: boolean, verbose?: boolean, watch?: boolean }} [args] Arguments
   * @returns {Logger} Logger instance
   */
  return (args) => {
    if (logger) {
      return logger;
    }
    logger = new Logger(args);
    return logger;
  };
})();

module.exports = {
  Logger,
  /**
   * Resolves logger instance.
   *
   * @param {{ silent?: boolean, verbose?: boolean, watch?: boolean }} [args] - Arguments
   * @return {Logger} Logger instance
   */
  getLogger(args) {
    return resolver(args);
  },
};
