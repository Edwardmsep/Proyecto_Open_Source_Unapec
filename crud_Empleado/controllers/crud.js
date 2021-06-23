//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;

    const departamento = req.body.departamento;
    const puesto = req.body.puesto;
    const salario = req.body.salario;

    conexion.query('INSERT INTO empleado SET ?',{cedula:cedula, nombre:nombre, departamento: departamento, puesto:puesto, salario:salario}, (error, results)=>{
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
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const departamento = req.body.departamento;
    const puesto = req.body.puesto;
    const salario = req.body.salario;
    
    /*const rol = req.body.rol;*/
    conexion.query('UPDATE empleado SET ? WHERE id = ?',[{cedula:cedula, nombre:nombre, departamento: departamento, puesto:puesto, salario:salario}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};