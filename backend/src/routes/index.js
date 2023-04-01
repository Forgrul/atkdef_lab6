import express from "express";
import glob from "glob";
import users from "./api/v1/users";
import v1 from "./api/v1";

const rootRouter = express.Router();

rootRouter.use("/api/v1/users", users);
rootRouter.use("/api/v1", v1);
// async function autoloadRoutes() {
//   const jsfiles = await glob("**/index.js", {
//     cwd: "src/routes",
//     ignore: "index.js",
//   });
//   const importTasks = jsfiles.map(async (path) => {
//     const module = await import(`./${path}`);
//     if (module.default === undefined) return;
//     rootRouter.use(`/${path.slice(0, -9)}`, module.default);
//   });
//   return Promise.all(importTasks);
// }
// await autoloadRoutes();

export default rootRouter;
