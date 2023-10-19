import "dotenv/config";
const PORT = process.env.PORT || 3000;
import app from "./api/app";
import { dataSource } from "./api/database/database";

dataSource
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
