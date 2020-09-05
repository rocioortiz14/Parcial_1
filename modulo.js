
// Dibujamos panel de bienvenida e informativo.
console.log("|---------------------------------------------------------------|");
console.log("|---------------------------------------------------------------|");
console.log("|-------- BIENVENIDOS AL CALCULADOR SALARIO POR PROYECTO -------|");
console.log("|---------------------------------------------------------------|");
console.log("|---------------------------------------------------------------|");
console.log("|--------------- MATERIA: DISEÑO WEB ADAPTABLE -----------------|");
console.log("|--------------- DESARROLLADORA: ROCÍO ORTIZ -------------------|");
console.log("|---------------------------------------------------------------|");
console.log("|---------------------------------------------------------------| \n");
console.log("\n");
// Mostramos los datos de los integrantes del proyecto.
console.log("INTEGRANTES DEL PROYECTO - (EXPO-DESING): ");
console.log(" 1- John Doe Martínez, Diseñador Web.");
console.log(" 2- Ceci Ohm Griffinn, Tester UX/UI.");
console.log(" 3- Karla Ohmspring's, Desarrolladora Web.");
console.log(" 4- Simon Smith Dogmi, Administrador de BD. \n")
function salaryJob() {
    // Declaramos variables para alamacenar el salario devengado por persona y por el equipo.
    var salaryTeam = 0.0, salaryPerson1 = 0.0, salaryPerson1, salaryPerson3 = 0.0, salaryPerson4 = 0.0;
    // Declaramos variables para asignar las horas trabajadas por c/u además del total del equipo.
    var totalHoursTeam = 0.0, hours1 = 55, hours2 = 45, hours3 = 65, hours4 = 50;
    // Declaramos variables para asignar el valor de pago de horas trabajadas por c/u del equipo.
    var payForHourDev = 22.30, payForHourDes = 18.50, payForHourTest = 14.50, payForHourDb = 19.80;
   // Valor de la holgura y total extra.
    var hlg = 0.08, totalHlg = 0.0, totalMaterials = 785.00, totalProject = 0.0, totalProjectHlg = 0.0;
  
    console.log("|---------------------------------------------------------------|");
    console.log("|-------------- SALARIO DEVENGADO C/U POR PROYECTO -------------|");
    console.log("|---------------------------------------------------------------| \n");
  
    // Proceso de cálculo de salario, para trabajador 1:
    salaryPerson1 = hours1 * payForHourDev;
    console.log(" 1- John Doe Martínez, Diseñador Web.");
    console.log(" Horas trabajadas: ", hours1);
    console.log(" Pago por hora: $", payForHourDev);
    console.log(" Pago total proyecto: $", salaryPerson1, "\n");
  
    // Proceso de cálculo de salario, para trabajador 2:
    salaryPerson2 = hours2 * payForHourDes;
    console.log(" 2- Ceci Ohm Griffinn, Tester UX/UI.");
    console.log(" Horas trabajadas: ", hours2);
    console.log(" Pago por hora: $",payForHourDes);
    console.log(" Pago total proyecto: $", salaryPerson2, "\n");
  
    // Proceso de cálculo de salario, para trabajador 3:
    salaryPerson3 = hours3 * payForHourTest;
    console.log(" 3- Karla Ohmspring's, Desarrolladora Web.");
    console.log(" Horas trabajadas: ", hours3);
    console.log(" Pago por hora: $", payForHourTest);
    console.log(" Pago total proyecto: $", salaryPerson3, "\n");
  
    // Proceso de cálculo de salario, para trabajador 4:
    salaryPerson4 = hours4 * payForHourDb;
    console.log(" 4- Simon Smith Dogmi, Administrador de BD.");
    console.log(" Horas trabajadas: ", hours4);
    console.log(" Pago por hora: $",payForHourDb);
    console.log(" Pago total proyecto: $", salaryPerson4, "\n");
  
    console.log("|---------------------------------------------------------------|");
    console.log("|--------------- DATOS GENERALES DEL PROYECTO ------------------|");
    console.log("|---------------------------------------------------------------| \n");
  
    // Proceso de cálculo de datos generales del proyecto.
    salaryTeam = salaryPerson1 + salaryPerson2 + salaryPerson3 + salaryPerson4;
    totalHoursTeam = hours1 + hours2 + hours3 + hours4;
    totalProject = salaryTeam + totalMaterials;
    totalHlg = totalProject * hlg;
    totalProjectHlg = totalProject + totalHlg;
   
    // Creamos una función que almacena en un array los datos cálculados anteriormente.
    function devolverArrayDatos() {
      // Insertamos en el Array los datos cálculados.
        var miArray = [salaryTeam, totalHoursTeam, totalProject, totalHlg, totalProjectHlg];
      // Retornamos los valores
        return miArray;
    };
  
    // Volcamos los datos en variables para su impresión.
    var [a, b, c, d, e] = devolverArrayDatos();
    console.log("Total de salario devengado por el equipo: $", a);
    console.log("Total de horas trabajadas por el equipo: $", b);
    console.log("Total de desarrollo por el proyecto: $", c);
    console.log("Total de holgura: $", d);
    console.log("Total del proyecto con holgura: $", e);
  }
  module.exports = {
    salaryJob : salaryJob
  }