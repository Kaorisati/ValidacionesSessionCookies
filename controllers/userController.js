

const { validationResult }= require('express-validator');



// ACCIONES DE CADA RUTA
const userController = {
 /*========== REGISTRO DE NUEVO USUARIO =========== */
 register: (req, res, next) => {
    res.render('userRegister');
   },
   storeUser: (req,res,next)=>{
     /* VALIDACIONES, por ahora no encuentro solucion */
     let errors = validationResult(req);//objeto
     console.log(errors)
    //  console.log(req.body)
     console.log(errors.array())
     if (errors.isEmpty()){
         let frase= "Hola "+req.body.name+", elegiste el color "+req.body.color+" tu mail es: "+ req.body.email +" y tu edad es: "+req.body.edad;
         res.render('userRegister',{frase:frase,bkgcolor:req.body.color})
     }else{
        let frase= "Hola "+req.body.name+", elegiste el color "+req.body.color+" tu mail es: "+ req.body.email +" y tu edad es: "+req.body.age;
        res.render('userRegister',{errors:errors.array(), frase:frase,bkgcolor:req.body.color})
     }
     },

   /*============= LOGIN DE USUARIO ===========*/
  login: (req, res, next) => {
    res.render('usersLogin');
  },
  validarLogin: (req,res,next)=>{
    //debe recibir del req y comparar que el usuario se encuentre registrado en la BD
    let filtroXemail =users.filter(element => element.email==req.body.email)//filter devuelve un array
    if(Array.isArray(filtroXemail) && filtroXemail.length){
      res.send("existe usuario!"+filtroXemail[0].firstName+' llevar a pantalla con usuario logueado')
    }else{
     res.send('el usuario no existe o la contraseña es incorrecta, intenta de nuevo!')
    };
    res.redirect('/productCart')
  }




  };//cierre del conrtoller


// Acá exportamos el resultado
module.exports = userController;
