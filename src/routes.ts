import { userRoutes } from "./user/user.route";
import { FastifyTypedInstance } from "./types";

async function routes(app: FastifyTypedInstance) {
  app.register(userRoutes);
}

export { routes };
