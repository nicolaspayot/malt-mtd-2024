import fs from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineEventHandler(() => {
  const content = fs.readFileSync(
    resolve(__dirname, "../../README.md"),
    "utf8"
  );
  return {
    content,
  };
});
