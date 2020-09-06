var express = require('express');
var bodyParser = require('body-parser');

// Instanciamos a Express y definimos el puerto con el que trabajaremos.
var app = express();
var port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Imprimos en el navegador, que el servicio ha sido lanzado.
app.get('/', function(req, res){
  // Módulo de envío de estatus del servicio levantado.
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
  // Módulo de errores, en el caso de que no se pueda acceder al puerto establecido.
  res.render('error', {
    message: err.message,
    error: err
  });
});

// Aquí imprimimos en consola los datos de la Aplicación como su puerto y cálculos.
app.listen(port, function(){
  // Dibujamos panel de bienvenida e informativo.
  console.log("|---------------------------------------------------------------|");
  console.log("|---------------------------------------------------------------|");
  console.log("|-------- BIENVENIDOS AL CALCULADOR SALARIO POR PROYECTO -------|");
  console.log("|---------------------------------------------------------------|");
  console.log("|-----------------------PARCIAL I-------------------------------|");
  console.log("|--------------- MATERIA: DISEÑO WEB ADAPTABLE -----------------|");
  console.log("|--------------- ESTUDIANTE: ROCÍO ORTIZ -----------------------|");
  console.log("|---------------------------------------------------------------|");
  console.log("|---------------------------------------------------------------| \n");
	console.log(`INFORMACIÓN - PROYECTO CORRIENDO EN LA RUTA://localhost:${port}/`);
	console.log("\n");
  // Mostramos los datos de los integrantes del proyecto.
  console.log("INTEGRANTES DEL PROYECTO - (EXPO-DESING): ");
  console.log(" 1- John Doe Martínez, Diseñador Web.");
  console.log(" 2- Ceci Ohm Griffinn, Tester UX/UI.");
  console.log(" 3- Karla Ohmspring's, Desarrolladora Web.");
  console.log(" 4- Simon Smith Dogmi, Administrador de BD. \n");

  // Instanciamos la función que se encarga de cálcular y mostrar los datos del equipo.
  salaryJob();
});

function salaryJob() {
  // Declaramos variables para alamacenar el salario devengado por persona y por el equipo.
  var salarioTeam = 0.0, salarioPerson1 = 0.0, salarioPerson2=0.0, salarioPerson3 = 0.0, salarioPerson4 = 0.0;
  // Declaramos variables para asignar las horas trabajadas por c/u además del total del equipo.
  var totalHorasTeam = 0.0, horas1 = 55, horas2 = 45, horas3 = 65, horas4 = 50;
  // Declaramos variables para asignar el total de horas trabajadas por c/u del equipo.
  var pagoPerson1 = 22.30, pagoPerson2 = 18.50, pagoPerson3 = 14.50, pagoPerson4 = 19.80;
  // Valor de la holgura y total extra.
  var hlg = 0.08, totalHlg = 0.0, totalMateriales = 785.00, totalProject = 0.0, totalProjectHlg = 0.0;

  console.log("|---------------------------------------------------------------|");
  console.log("|-------------- SALARIO DEVENGADO C/U POR PROYECTO -------------|");
  console.log("|---------------------------------------------------------------| \n");

  // Proceso de cálculo de salario, para trabajador 1:
  salarioPerson1 = horas1 * pagoPerson1;
  console.log(" 1- John Doe Martínez, Diseñador Web.");
  console.log(" Horas trabajadas: ", horas1);
  console.log(" Pago por hora: $", pagoPerson1);
  console.log(" Pago total proyecto: $", salarioPerson1, "\n");

  // Proceso de cálculo de salario, para trabajador 2:
  salarioPerson2 = horas2 * pagoPerson2;
  console.log(" 2- Ceci Ohm Griffinn, Tester UX/UI.");
  console.log(" Horas trabajadas: ", horas2);
  console.log(" Pago por hora: $", pagoPerson2);
  console.log(" Pago total proyecto: $", salarioPerson2, "\n");

  // Proceso de cálculo de salario, para trabajador 3:
  salarioPerson3 = horas3 * pagoPerson3;
  console.log(" 3- Karla Ohmspring's, Desarrolladora Web.");
  console.log(" Horas trabajadas: ", horas3);
  console.log(" Pago por hora: $", pagoPerson3);
  console.log(" Pago total proyecto: $", salarioPerson3, "\n");

  // Proceso de cálculo de salario, para trabajador 4:
  salarioPerson4 = horas4 * pagoPerson4;
  console.log(" 4- Simon Smith Dogmi, Administrador de BD.");
  console.log(" Horas trabajadas: ", horas4);
  console.log(" Pago por hora: $", pagoPerson4);
  console.log(" Pago total proyecto: $", salarioPerson4, "\n");

  console.log("|---------------------------------------------------------------|");
  console.log("|--------------- DATOS GENERALES DEL PROYECTO ------------------|");
  console.log("|---------------------------------------------------------------| \n");

  // Proceso de cálculo de datos generales del proyecto.
  salarioTeam = salarioPerson1 + salarioPerson2 + salarioPerson3 + salarioPerson4;
  totalHorasTeam = horas1 + horas2 + horas3 + horas4;
  totalProject = salarioTeam + totalMateriales;
  totalHlg = totalProject * hlg;
  totalProjectHlg = totalProject + totalHlg;

  // Creamos una función que almacena en un array los datos cálculados anteriormente.
  function devolverArrayDatos() {
    // Insertamos en el Array los datos cálculados.
	  var miArray = [salarioTeam, totalMateriales,totalHorasTeam, totalProject, totalHlg, totalProjectHlg];
    // Retornamos los valores
	  return miArray;
  };

  // Volcamos los datos en variables para su impresión.
  var [a, b, c, d, e,f] = devolverArrayDatos();
  console.log("Total de salario devengado por el equipo: $", a);
  console.log("Total de costo materiales: $", b);
  console.log("Total de horas trabajadas por el equipo: $", c);
  console.log("Total de desarrollo por el proyecto (materiales + salario del equipo): $", d);
  console.log("Total de holgura: $", e);
  console.log("Total del proyecto con holgura: $", f);
}

  module.exports = {
    salaryJob : salaryJob
  }