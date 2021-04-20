const express = require("express");
const handlebars = require("express-handlebars");
const prodRoutes = require("./routes/ProductRoutes");
const frontRoutes = require("./routes/FrontRoutes");

const PORT = 8080;  
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', frontRoutes);
app.use('/api/productos', prodRoutes);

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials",
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

// Conexion a server con callback avisando de conexion exitosa
const server = app.listen(PORT, () => { console.log(`Ya me conecte al puerto ${PORT}.`) });
server.on('error', (error) => console.log('Hubo un error inicializando el servidor.'));


// - Utilizar iconfinder (https://www.iconfinder.com/free_icons) para obtener la url de las imágenes de los productos (click derecho sobre la imagen -> copiar dirección de la imagen)
