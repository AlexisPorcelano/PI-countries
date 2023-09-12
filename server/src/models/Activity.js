const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    Duracion: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Temporada: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Verano", "Otoño", "Invierno", "Primavera"]],
      },
    },
  });
};
