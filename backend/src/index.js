import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import rootRouter from "./routes";
import { prisma } from "./adapters";

process.on("exit", async () => {
    await prisma.$disconnect();
});

const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendDir = path.join(__dirname, "../../frontend/dist");

const app = express();
const port = process.env.PORT || 8000;

app.use(rootRouter);

app.use(express.static(frontendDir));
app.get("*", (req, res) => { // Keep as the last route
    if (!req.originalUrl.startsWith("/api")) {
        return res.sendFile(path.join(frontendDir, "index.html"));
    }
    return res.status(404).send();p
});

app.listen(port, () => {
    console.log(`Example app is listening at http://localhost:${port}`)
})