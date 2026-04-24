import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vet API",
      version: "1.0.0",
      description: "API para gestión de citas veterinarias",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/citas.routes.js"],
};

export const swaggerSpec = swaggerJsdoc(options);