import { app } from "./app.js";
const PORT = 3000;
async function main() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
