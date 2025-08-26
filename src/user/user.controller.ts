import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "./user.schema";

async function getUsersHandler(request: FastifyRequest, reply: FastifyReply) {
  return { message: "List of users" };
}

async function createUserHandler(
  request: FastifyRequest<{ Body: User }>,
  reply: FastifyReply,
) {
  const user: User = request.body;
  return { message: "User created" };
}

export { getUsersHandler, createUserHandler };
