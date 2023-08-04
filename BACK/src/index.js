import { app } from "./app.js";
import { createTable } from "./db/connection.js";

app.listen(3000, async () => {
  await createTable();
  console.log("Server is listening on port 3000");
});
