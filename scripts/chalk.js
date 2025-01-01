const styles = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

const applyStyle = (style, text) => `${style}${text}${styles.reset}`;

const customChalk = {
  reset: (text) => applyStyle(styles.reset, text),
  bold: (text) => applyStyle(styles.bold, text),
  dim: (text) => applyStyle(styles.dim, text),
  underline: (text) => applyStyle(styles.underline, text),
  inverse: (text) => applyStyle(styles.inverse, text),
  hidden: (text) => applyStyle(styles.hidden, text),
  strikethrough: (text) => applyStyle(styles.strikethrough, text),
  black: (text) => applyStyle(styles.black, text),
  red: (text) => applyStyle(styles.red, text),
  green: (text) => applyStyle(styles.green, text),
  yellow: (text) => applyStyle(styles.yellow, text),
  blue: (text) => applyStyle(styles.blue, text),
  magenta: (text) => applyStyle(styles.magenta, text),
  cyan: (text) => applyStyle(styles.cyan, text),
  white: (text) => applyStyle(styles.white, text),
  gray: (text) => applyStyle(styles.gray, text),
  bgBlack: (text) => applyStyle(styles.bgBlack, text),
  bgRed: (text) => applyStyle(styles.bgRed, text),
  bgGreen: (text) => applyStyle(styles.bgGreen, text),
  bgYellow: (text) => applyStyle(styles.bgYellow, text),
  bgBlue: (text) => applyStyle(styles.bgBlue, text),
  bgMagenta: (text) => applyStyle(styles.bgMagenta, text),
  bgCyan: (text) => applyStyle(styles.bgCyan, text),
  bgWhite: (text) => applyStyle(styles.bgWhite, text),
};

module.exports = customChalk;