export class Logger {
  /**
   * Initializes a new instance of the class.
   *
   * @param {{ silent?: boolean, verbose?: boolean, watch?: boolean }} args - Logger parameters:
   */
  constructor(args: {
    silent?: boolean | undefined;
    verbose?: boolean | undefined;
    watch?: boolean | undefined;
  });
  _silent: boolean;
  _verbose: boolean;
  _watch: boolean;
  /**
   * Prints the given text to the console if the silent flag is not set.
   * If an additional info parameter is provided, it is appended to the text.
   *
   * @param {string} text - The text to be printed.
   * @param {string} [info] - Additional information to be appended to the text.
   */
  print(text: string, info?: string | undefined): void;
  /**
   * Logs the given text with blue color using chalk library and prints the additional information if provided.
   *
   * @param {string} text - The text to be logged.
   * @param {string} [info] - Additional information to be printed.
   * @return {void} This function does not return any value.
   */
  log(text: string, info?: string | undefined): void;
  /**
   * A function that logs an error message with red color and prints the additional information if provided.
   *
   * @param {string} text - the error message to be displayed
   * @param {string} [info] - additional information related to the error
   * @return {void} This function does not return any value.
   */
  error(text: string, info?: string | undefined): void;
  /**
   * Prints the given text in green color to the console, along with any additional information provided.
   *
   * @param {string} text - The text to be printed in green color.
   * @param {string} [info] - Additional information to be printed along with the text.
   * @return {void} This function does not return any value.
   */
  success(text: string, info?: string | undefined): void;
  /**
   * Prints a warning message using the provided text and additional information.
   *
   * @param {string} text - The warning message to be printed.
   * @param {string} [info] - Additional information to be printed along with the warning message.
   * @return {void} This function does not return any value.
   */
  warn(text: string, info?: string | undefined): void;
  /**
   * Prints the given text in gray color, indicating that it is muted.
   *
   * @param {string} text - The text to be printed.
   * @param {string} [info] - Additional information related to the text.
   * @return {void} This function does not return a value.
   */
  muted(text: string, info?: string | undefined): void;
  /**
   * A function that logs the given text if the "verbose" flag is set.
   *
   * @param {string} text - the text to be logged
   */
  verbose(text: string): void;
  /**
   * A function that starts a timer and logs the time with a colored ID.
   *
   * @param {string} id - the ID used for logging
   */
  timeStart(id: string): void;
  /**
   * Ends a timer and logs the elapsed time.
   *
   * @param {string} id - The identifier of the timer to end.
   * @return {void} This function does not return a value.
   */
  timeEnd(id: string): void;
}
/**
 * Resolves logger instance.
 *
 * @param {{ silent?: boolean, verbose?: boolean, watch?: boolean }} args - Arguments
 * @return {Logger} Logger instance
 */
export declare function getLogger(args: {
  silent?: boolean | undefined;
  verbose?: boolean | undefined;
  watch?: boolean | undefined;
}): Logger;
