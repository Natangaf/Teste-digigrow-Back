import app from "./app";
import connectToDatabase from "./database";

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(3000, () => {
      console.log("Servidor executando na porta 3000");
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
};

startServer();
