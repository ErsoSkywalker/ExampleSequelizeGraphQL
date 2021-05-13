const jwt = require("jsonwebtoken");
const User = require("./models/Users");
const crearToken = (Dentist, secreta, expiresIn) => {
  const { id, usuario, nombre, apellido } = Dentist;
  return jwt.sign({ id, usuario, nombre, apellido }, secreta, {
    expiresIn,
  });
};

const resolvers = {
  Query: {
    getVersionAPI: () => "1.0.0",
  },
  Mutation: {
    createNewUser: async () => {
      const newUser = User.build({
        idUser: 1,
        Nombre: "Christian",
        Apellido: "Ontiveros",
      });
      await newUser.save();
      return "Nice";
    },
  },
};

module.exports = resolvers;
