import { prisma } from "../../../../adapters";
export async function getAllUsers(req, res) {
const allUsers = await prisma.user.findMany();
return res.json(allUsers);
}