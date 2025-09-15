#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");

// console.log("packageJson", packageJson, packageJson.version);
// process.exit(1);

const argument = process.argv[2];
// const version = process.argv[2];

if (argument === "-v" || argument === "--version") {
  console.log(packageJson.version);
  process.exit(1);
}

// console.log("filePath", filePath, process.argv);
if (!argument) {
  console.error("Not a valid file path");
  process.exit(1);
}

const absolutePath = path.resolve(argument);

fs.readFile(absolutePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err.message);
    process.exit(1);
  }

  try {
    const jsonData = JSON.parse(data);
    console.log("Parsed JSON Data", JSON.stringify(jsonData, null, 2));
  } catch (err) {
    console.log("Failed to parse error", err.message);
    process.exit(1);
  }
});
