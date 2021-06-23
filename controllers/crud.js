//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const nombredepa = req.body.nombredepa;
    const ubicacion = req.body.ubicacion;
    const encargado = req.body.encargado;


    conexion.query('INSERT INTO departamento SET ?',{nombredepa:nombredepa, ubicacion: ubicacion, encargado:encargado}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombredepa = req.body.nombredepa;
    const ubicacion = req.body.ubicacion;
    const encargado = req.body.encargado;
    
    /*const rol = req.body.rol;*/
    conexion.query('UPDATE departamento SET ? WHERE id = ?',[{nombredepa:nombredepa, ubicacion: ubicacion, encargado:encargado}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};