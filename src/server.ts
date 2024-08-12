import app from "./app";
import connectToDatabase from "./database";

const startServer = async () => {
  try {
    await connectToDatabase();
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, () => {
      console.log("Servidor executando na porta 3000");
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
};

startServer();
