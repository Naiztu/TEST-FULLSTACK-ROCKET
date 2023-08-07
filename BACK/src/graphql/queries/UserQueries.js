import { getUsers } from "../../model/user.model.js";

const users = async () => {
  const users = await getUsers();
  return users;
};

export default {
  users,
};