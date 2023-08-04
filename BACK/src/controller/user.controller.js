import { getUsers, createUser } from "../model/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const response = await getUsers();
    res.json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los usuarios",
      error,
    });
  }
};

export const createNewUser = async (req, res) => {
  const {
    name,
    secondName,
    lastName,
    secondLastName,
    yearBirth,
    monthBirth,
    dayBirth,
    email,
    phone,
  } = req.body;


  const newUser = {
    name: name || "",
    secondName: secondName || "",
    lastName: lastName || "",
    secondLastName: secondLastName || "",
    dateBirth: `${yearBirth || 2000}-${monthBirth || 1}-${dayBirth || 1}`,
    email: email || "",
    phone: phone || "",
  };

  
  try {
    await createUser(newUser);
    res.json({
      message: "Usuario creado correctamente",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error,
    });
  }
};
