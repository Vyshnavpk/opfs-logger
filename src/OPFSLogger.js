/**
 * OPFSLogger class for logging messages to a file using OPFS storage system.
 */
export default class OPFSLogger {
  /**
   * Creates a new OPFSLogger instance.
   * @param {OPFSStorage} storage - An instance of the OPFSStorage class.
   * @param {string} [fileName="log.txt"] - The name of the log file.
   * @param {string} [dirName=null] - The directory where the log file is located.
   */
  constructor(storage, fileName = "log.txt", dirName = null) {
    this.storage = storage;
    this.fileName = fileName;
    this.dirName = dirName;
  }

  /**
   * Writes a log message with a timestamp to the log file.
   * @param {string} message - The log message to write.
   */
  async log(message) {
    const timeStampedMessage = `\n[${new Date().toISOString()}] ${message}`;
    await this.storage.writeFile(
      this.fileName,
      timeStampedMessage,
      this.dirName
    );
  }

  /**
   * Logs an informational message.
   * @param {string} message - The informational message to log.
   */
  async info(message) {
    await this.log(`INFO: ${message}`);
  }

  /**
   * Logs a warning message.
   * @param {string} message - The warning message to log.
   */
  async warn(message) {
    await this.log(`WARN: ${message}`);
  }

  /**
   * Logs an error message.
   * @param {string} message - The error message to log.
   */
  async error(message) {
    await this.log(`ERROR: ${message}`);
  }
}
