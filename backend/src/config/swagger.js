import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vet API",
      version: "1.0.0",
      description: "API para gestión de citas veterinarias",
    },
    tags: [
      { name: "Citas", description: "Operaciones de citas" },
      { name: "Dueños", description: "Gestión de dueños" }
    ],
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);