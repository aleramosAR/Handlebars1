# Handlebars 1

**Cargar el listado de productos**<br/>
GET http://localhost:8080/api/productos

**Agregar un producto**<br/>
POST http://localhost:8080/api/productos

**Seleccionar un determinado producto**<br/>
GET http://localhost:8080/api/productos/ID

**Editar un producto**<br/>
PUT http://localhost:8080/api/productos/actualizar/ID

**Eliminar un producto**<br/>
DEL http://localhost:8080/api/productos/borrar/ID

***

**Formulario de Carga**<br/>
POST http://localhost:8080/form

**Listado de Productos**<br/>
POST http://localhost:8080/productos/vista

***

**Imagenes simuladas**<br />
La ruta que use muestra imagenes de frutas y es:<br />
https://cdn1.iconfinder.com/data/icons/fruit-39/128/FRUIT_2-<span style="color:red">**XXX**</span>-128.png

Reemplazando el XXX con nros desde el 01 al 16.
Al cargar nuevos productos poner en el campo "Nombre de imagen" nros desde el 01 al 16 (como los del ejemplo de abajo), el resto del path ya esta incluido en el HTML.

***

**EJEMPLOS de productos para cargar en Postman desde body (JSON)**
```
{
  "title": "Zapatillas para Dama",
  "price": 8900,
  "thumbnail": "01"
}

{
  "title": "Paletas de Ping Pong",
  "price": 2500,
  "thumbnail": "02"
}

{
  "title": "Pelota de Futbol",
  "price": 12500,
  "thumbnail": "03"
}

{
  "title": "Par de medias",
  "price": 1400,
  "thumbnail": "04"
}
```