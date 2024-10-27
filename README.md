# OPFS Logger 

## Overview

The `OPFSLogger` is a simple logging utility that writes log messages to a file in the browser using the OPFS storage system. It supports different log levels and timestamps each log entry.

## Constructor

### `constructor(storage, fileName = "log.txt", dirName = null)`

Creates a new `OPFSLogger` instance.

- **Parameters:**
  - `storage`: An instance of the `OPFSStorage` class.
  - `fileName` (optional): The name of the log file. Defaults to `"log.txt"`.
  - `dirName` (optional): The directory where the log file is located. If not provided, the file is created at the root level.

## Methods

### `log(message)`

Writes a log message with a timestamp to the log file.

- **Parameters:**
  - `message`: The log message to write.

### `info(message)`

Writes an informational log message with a timestamp.

- **Parameters:**
  - `message`: The log message to write.

### `warn(message)`

Writes a warning log message with a timestamp.

- **Parameters:**
  - `message`: The log message to write.

### `error(message)`

Writes an error log message with a timestamp.

- **Parameters:**
  - `message`: The log message to write.

### Author

Vyshnav - [@vaishnavpk22](https://x.com/vaishnavpk22)

### License
MIT
