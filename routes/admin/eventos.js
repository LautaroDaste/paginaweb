var express = require('express');
var router = express.Router();
var eventosModel = require('../../models/eventosModel');

router.get('/', async function (req, res, next) {

    var eventos = await eventosModel.getEventos();

    res.render('admin/eventos' , {
layout:'admin/layout',
usuario: req.session.nombre,
eventos
    });
  });

router.get('/eliminar/:id', async (req, res, next) => {
const id = req.params.id;
await eventosModel.deleteEventosById(id);
res.redirect('/admin/eventos')

})
router.get('/agregar', (req, res, next)=> {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})

router.post('/agregar', async (req, res, next)=>{
  try {
    if(req.body.titulo != "" && req.body.subtitulo !="" && req.body.cuerpo !=""){
      await eventosModel.insertEvento(req.body);
      res.redirect('/admin/eventos')
    } else {
res.render('admin/agregar', {
  layout: 'admin/layout',
  error: true,
  message: 'Todos los campos son requeridos'
})
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error:true,
      message: 'No se cargo el evento'
    })
  }
})

router.get('/modificar/:id', async (req, res,next)=> {
  var id = req.params.id;
  var evento = await eventosModel.getEventosById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    evento
  });
});

router.post('/modificar', async (req, res, next)=> {
  try {
    console.log(req.body.id);
    var obj = {
titulo: req.body.titulo,
subtitulo: req.body.subtitulo,
cuerpo: req.body.cuerpo
    }
    console.log(obj)
    await eventosModel.modificarEventosById(obj, req.body.id);
    res.redirect('/admin/eventos');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar'), {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el evento'
    }
  }
})

  module.exports = router;