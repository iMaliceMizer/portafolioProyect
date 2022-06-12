const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require ('mysql2');
const { Console } = require('console');

const app = express();

app.use(cors());
app.use(bodyparser.json());


//conectar a base de datos mysql
const db = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'sushidb',
      port:8111
});

// revisa la coneccion a la base de datos
db.connect(err=>{
  if (err) {console.log('err');}
  console.log('base de datos conectado...');
})


//conseguir todos los datosde producto
app.get('/producto',(req,res)=>{
    let qr = 'select * from producto';
    db.query(qr,(err,result)=>{
      if(err)
      {
        console.log(err,'errs');
      }
      if(result.length>0)
      {
        res.send({
          message:'datos de los productos',
          data: result
        });
      }
    });
});


// conseguir todos los datos de pedido
app.get('pedido',(req,res)=>{
  let qr1 = 'select * from pedido';
  db.query(qr1,(err,result)=>{
    if(err)
    {
      console.log(err,'errs');
    }
    if(result.length>0)
    {
      res.send({
        message: 'datos de los pedidos',
        data: result
      });
    }
  })
})


//conseguir solo 1 dato producto
app.get('/producto/:id',(req, res)=> {
      let gID = req.params.id;
      let qr = `select * from producto where id = ${gID}`;
    db.query(qr,(err,result)=>{
        if(err){ console.log(err);}
        if(result.length)
        {
              res.send({
                message: 'obtener dato',
                data:result
              });
        }
        else
        {
              res.send({
                message: 'dato no encontrado'
              });
        }
    });
});

//conseguir solo 1 dato pedido
app.get('/pedido/:id', (req, res)=>{
      let gID = req.params.id;
      let qr = `select * from pedido where id = ${gID}`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if(result.length)
        {
          res.send({
            message: 'obtener dato',
            data: result
          });
        }
        else
        {
          res.send({
            message: 'dato no encontrado'
          });
        }
    });
});


// crear dato producto
app.post('/producto', (req,res)=>{
        console.log(req.body, 'crea dato');

        let nombre = req.body.nombre;
        let valor = req.body.valor;
        let descripcion = req.body.descripcion;
        let stock = req.body.stock;
        let categoria = req.body.categoria;

        let qr = `insert into producto(nombre, valor, descripcion, stock, categoria)
                    values('${nombre}','${valor}','${descripcion}',
                    '${stock}','${categoria}')`;

        console.log(qr, 'qr')
           db.query(qr,(err,result)=>{
                if(err){console.log(err)};
                console.log(result,'result')
                res.send({
                  message: 'dato insertado',
                });
        });
});

//crear dato pedido
app.post('/pedido', (req,res)=>{
        console.log(req.body, 'crea dato');

        let hora = req.body.hora;
        let fecha = req.body.fecha;
        let tipo = req.body.tipo;
        let valor = req.body.valor;

        let qr1 = `insert into pedido(hora, fecha, tipo, valor)
                    values('${hora}',${fecha}','${tipo}','${valor}')`;


        console.log(qr, 'qr')
          db.query(qr,(err,result)=>{
              if(err){console.log(err)};
              console.log(result,'result')
              res.send({
                 message: 'dato insertado',
                  });
        });

})

// Actualizar un dato producto
app.put('/producto/:id', (req,res)=>{
  console.log(req.body, 'actualiza dato');

  let gID = req.params.id;

  let nombre = req.body.nombre;
  let valor = req.body.valor;
  let descripcion = req.body.descripcion;
  let stock = req.body.stock;
  let categoria = req.body.categoria;

  let qr = `update producto set nombre = '${nombre}', valor =' ${valor}', descripcion = '${descripcion}',
              stock = '${stock}', categoria = '${categoria}'
              where id = ${gID}`;

  db.query(qr,(err,result)=>{
          if(err) {console.log(err);}

          res.send({
              message:'dato actualizado'
          });
  });
});

//actualizar un dato pedido
app.put('/pedido/:id', (req,res)=>{
  console.log(req.body, 'actualiza dato');

  let gID = req.params.id;

  let hora = req.body.hora;
  let fecha = req.body.fecha;
  let tipo = req.body.tipo;
  let valor = req.body.valor;

  let qr = `update producto set hora = '${hora}', fecha =' ${fecha}', tipo = '${tipo}',
              valor = '${valor}'
              where id = ${gID}`;

  db.query(qr,(err,result)=>{
          if(err) {console.log(err);}

          res.send({
              message:'dato actualizado'
          });
  });
});

//borrar un dato producto
app.delete('/producto/:id', (req,res)=>{

          let gID = res.params.id;
          let qr = `delete from producto where id = ${gID}`;
      db.query(qr,(err,result)=>{
              if(err){Console.log(err);}

              res.send(
                {
                    message: 'dato eliminado'
                }
              )
      });
});


// borrar un dato pedido
app.delete('/pedido/:id', (res,req)=>{
        let gID = res.params.id;
        let qr = `delete from pedido where id = ${gID}`;
      db.query(qr,(err,result)=>{
          if(err){Console.log(err);}

          res.send(
        {
            message: 'dato eliminado'
        }
      )
    });
});


//servidor corriendo
app.listen(3000,()=> {
  console.log('server running...');
});
