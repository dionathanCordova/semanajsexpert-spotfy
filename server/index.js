import server from "./server.js";
import { logger } from "./util.js";
import config from "./config.js";

server
  .listen(config.port)
  .on("listening", () => logger.info("Server listening on port 3000"));

// todo continuar aula 1 44:47