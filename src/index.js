// crear el package con npm init --y
// instalar express con npm i express
// Creacion de un web server en express 
// Iniciar el programa node --watch src/index.js

// Invocar la libreria expres
const express = require('express') //Commonjs

const {engine} = require('express-handlebars')

// import { engine } from 'express-handlebars'; //Esmodule

// Creamos una instancia
const app = express()

app.use(express.json())



// get es obtener
// post es para registrar
// put es actualizar
// delete para eliminar

// // Es importante crear las rutas en orden el use va al final

// app.get('/',(req, res)=>{
//     // Crear rutas en expres
//     res.send('Bienvenidos')
// })

// app.get('/dashboard',(req, res)=>{
//     // Nueva ruta creada
//     res.send("Dashboard principal")
// })

// app.use((req, res)=>{
//     // Mensaje de error cuando ingresan a una ruta que no exite
//     res.send("404 - Not Found")
// })

// app.post('/register',(req, res)=>{
//     const {pedido, solicitado} = req.body //Desestructuracion
//     res.send(`El pedido de ${pedido} es realizado por ${solicitado}`) //Backit
// })

// // :tipo es cualquier nombre, recibe cualquier tipo de solicitud de la web
// app.get('/pedido/:tipo', (req,res)=>{
//     res.send(`El pedido es hamburguesa ${req.params.tipo}`)
// })

// // con el query se debe de colocar la direccion y ? porque lo recoje como objeto
// app.get('/search', (req, res)=>{
//     if (req.query.tipo === "sencilla"){
//         res.send("Hamburguesa sencilla")
//     }else{
//         res.send("Otro tipo de hamburguesa")
//     }
// })

// app.get('/hamburguesa/simple',(req,res)=>{
//     res.send('Hamburguesa - simple')
// })

// // _dirname enseña la ruta
// console.log(__dirname);

// // Enviar al navegador una imagen
// app.get('/hamburguesa/doble',(req,res)=>{
//     res.sendFile('./hamburguesa.jpg',{
//         root:__dirname
//     })
// })

// // Hacer que se descargue un documento
// app.get('/hamburguesa/triple',(req,res)=>{
//     res.sendFile('./hamburguesa word.docx',{
//         root:__dirname
//     })
// })

// // Mostrar la informacion en JSON
// app.get('/hamburguesa/mixta',(req,res)=>{
//     res.status(200).json({
//         "tipo": "Mixta",
//         "extra": "NO"
//     })
// })

// Utilizar un motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Ubicacion del directorio views
app.set('views', './src/views');

app.get('/hamburguesa/vegana',(req,res)=>{
    res.render('home')
})
app.get('/hamburguesa/about',(req,res)=>{
    res.render('about')
})

app.get('/hamburguesa/main',(req,res)=>{
    res.render('./layouts/main')
})


// Iniciar el servidor en el puerto 3000
app.listen(3000)

console.log("Web server ejecutandose en el puerto 3000");

