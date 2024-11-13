#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
let chalk;

const insertDir = ["hooks"];
const insertFiles = ["stylrjs.es.js", "stylrjs.cjs.js"];

// Add "use client" to all files
const Dir = path.join(__dirname, "../dist/");
const fileDir = path.join(path.dirname(__filename), "../dist/");

function checkDir() {
  for (let i = 0; i < insertDir.length; i++) {
    const dir = insertDir[i];
    const fullPath = path.join(Dir, dir); // Create the full path
    addUseClientToFiles(fullPath);
  }
}

//Insert into each file
function insert(fullPath, file) {
  const stat = fs.statSync(fullPath);

  if (stat.isDirectory()) {
    addUseClientToFiles(fullPath); // Recursively process subdirectories
  } else if (file.endsWith(".js") || file.endsWith(".ts")) {
    const content = fs.readFileSync(fullPath, "utf8");

    if (!content.startsWith('"use client";')) {
      const newContent = `"use client";\n${content}`;
      fs.writeFileSync(fullPath, newContent, "utf8");
      console.log(`Added 'use client' to: ${fullPath}`);
    }
  }
}

function checkFile() {
  for (let i = 0; i < insertFiles.length; i++) {
    const dir = insertFiles[i];
    const fullPath = path.join(fileDir, dir);
    insert(fullPath, dir);
  }
}

function addUseClientToFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    insert(fullPath, file);
  });
}

(async () => {
  chalk = await import("chalk");

  if (fs.existsSync(Dir)) {
    checkDir();
    checkFile();
    console.log(chalk.default.green('\u2714 Modified with "use client".'));
  } else {
    console.error(chalk.default.red(`Directory ${Dir} does not exist.`));
  }
})();
