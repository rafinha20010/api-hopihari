const http = require("http");
const app = require("./index"); // Certifique-se de que app.js existe aqui

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`API iniciada na porta ${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Erro: A porta ${PORT} já está em uso.`);
  } else {
    console.error("Erro inesperado:", erro);
  }
});
