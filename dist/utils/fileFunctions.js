"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readUserFromFile = readUserFromFile;
exports.writeUsersToFile = writeUsersToFile;
const fs = require('fs/promises');
const path = require('path');
async function readUserFromFile(filePath) {
  try {
    const dataPath = path.resolve(__dirname, filePath);
    const data = await fs.readFile(dataPath, 'utf-8');
    if (data) return JSON.parse(data);
  } catch (error) {
    console.error('Error reading user data:', error);
    return [];
  }
}
async function writeUsersToFile(entities, filePath) {
  const dataPath = path.resolve(__dirname, filePath);
  fs.writeFile(dataPath, JSON.stringify(entities)).catch(error => {
    console.error('Error writing user data:', error);
  });
}
process.on('exit', cleanup);
function cleanup() {
  fs.writeFile(dataBasePath, '');
}