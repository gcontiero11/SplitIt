import { getUsersHandler, createUserHandler } from "./user.controller";
import { userSchema } from "./user.schema";
import { FastifyTypedInstance } from "../types";

async function userRoutes(app: FastifyTypedInstance) {
  app.get(
    "/users",
    {
      schema: {
        tags: ["User"],
        description: "Get a list of all users",
      },
    },
    getUsersHandler,
  );

  app.post(
    "/users",
    {
      schema: {
        tags: ["User"],
        description: "Create a new user",
        body: userSchema,
      },
    },
    createUserHandler,
  );
}

export { userRoutes };
