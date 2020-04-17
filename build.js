var fs = require("fs");
var yamlFront = require("yaml-front-matter");

fs.readdirSync("./content").forEach((file) => {
  fs.readFile(`./content/${file}`, "utf8", function (err, data) {
    if (err) throw err;

    fs.writeFile(
      __dirname + "/src/content/" + file.split(".")[0] + ".json",
      JSON.stringify(yamlFront.loadFront(data)),
      function (err) {
        if (err) throw err;
      }
    );
  });
});
