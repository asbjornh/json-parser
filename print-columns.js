const stripAnsi = require("strip-ansi");

module.exports = (column1 = "", column2 = "") => {
  const lines1 = column1.split("\n");
  const lines2 = column2.split("\n");

  const [longestColumn, shortestColumn] =
    lines1.length >= lines2.length ? [lines1, lines2] : [lines2, lines1];

  longestColumn.forEach((line1, index) => {
    const line2 = shortestColumn[index] || "";
    const column1 = line1 + " ".repeat(50 - stripAnsi(line1).length);
    const column2 = line2;
    console.log(column1 + column2);
  });
};
