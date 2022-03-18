import fs from "fs";
import fsPromise from "fs/promises";
import config from "./config.js";
import { extname, join } from "path";
const {
  dir: { publicDir },
} = config;

export class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  async getFileInfo(file) {
    const fullFilePath = join(publicDir, file);
    await fsPromise.access(fullFilePath); // valida se o file existe, caso contrario retorno erro
    const fileType = extname(fullFilePath);
    return { type: fileType, name: fullFilePath };
  }

  async getFileStream(file) {
    const { type, name } = await this.getFileInfo(file);
    return { stream: this.createFileStream(name), type };
  }
}
