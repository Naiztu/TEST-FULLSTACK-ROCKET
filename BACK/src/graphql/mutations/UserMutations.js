import { createUser as createNewUser } from "../../model/user.model.js";

/**
 * The function `createUser` creates a new user object with the provided arguments and saves it to the
 * database.
 * @param _ - The underscore (_) is a convention used to indicate that the parameter is not being used
 * in the function. It is often used as a placeholder when the parameter is required by the function
 * signature but not needed in the function implementation.
 * @param args - The `args` parameter is an object that contains the arguments passed to the
 * `createUser` function. These arguments include the following properties:
 * `name`, `secondName`, `lastName`, `secondLastName`, `email`, `phone`, `yearBirth`, `monthBirth`, `dayBirth`.
 * @returns the `newUser` object.
 */
const createUser = async (_, args) => {
  const {
    name,
    secondName,
    lastName,
    secondLastName,
    email,
    phone,
    yearBirth,
    monthBirth,
    dayBirth,
  } = args;
  const dateBirth = new Date(yearBirth, monthBirth - 1, dayBirth);
  const newUser = {
    name,
    secondName,
    lastName,
    secondLastName,
    email,
    phone,
    dateBirth,
  };
  try {
    await createNewUser(newUser);
    return newUser;
  } catch (err) {
    throw err;
  }
};

export default { createUser };
