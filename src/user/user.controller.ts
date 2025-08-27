import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "./schemas/user.schema";
import { CreateUserType } from "./schemas/user.create-user";

async function getUsersHandler(request: FastifyRequest, reply: FastifyReply) {
  return { message: "List of users" };
}

async function createUserHandler(
  request: FastifyRequest<{ Body: CreateUserType }>,
  reply: FastifyReply,
) {
  const user: User = request.body;
  return { message: "User created" };
}

export { getUsersHandler, createUserHandler };
