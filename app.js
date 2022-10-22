

alert("Bienvenido a Verzall Gaming, por favor inicie sesion");
alert("Vamos a registrarnos");
let usuario = prompt("crea un nombre de usuario");
let contrasenia = prompt("crea tu contraseña");
alert("Ahora iniciemos sesion");
let validarUsuario = prompt("ingrese su nombre de usuario");
let validarContrasenia = prompt("ingrese su contraseña");

while (usuario !== validarUsuario) {
  alert("El nombre de usuario no existe, o no se ha ingresado correctamente");
  validarUsuario = prompt("Ingrese su nombre de usuario");
}

while (contrasenia !== validarContrasenia) {
  alert("La contraseña ingresada es incorrecta, vuelva a intentarlo");
  validarContrasenia = prompt("Ingrese su contraseña nuevamente");
}

alert(`Bienvenido ${usuario}`);

const caracteristicas = (procesador,mother,placa,ram,almacenamiento,ssd,fuente) => {
  return `La Pc elegida cuenta con un ${procesador}.
       Una tarjeta madre ${mother}.
       Con ${ram}gb de ram.
       Una ${placa}.
       Un dico rigido de ${almacenamiento}.
       Un ssd de ${ssd} y
       una fuente de ${fuente}...`
};

let  eleccionCategoria = prompt("Que tipo de PC buscas? gamer, ofimatica, workstation").toLowerCase();

switch (eleccionCategoria) {
    case "gamer":
      alert(caracteristicas("i7", "Z570", "3080", "16", "1tb", "240gb", "600w"));
      break;
    
    case "ofimatica":
      alert(caracteristicas("i3", "H410", "Integrada", "4", "1tb", "120gb", "400w"));
      break;

    case "workstation":
      alert(caracteristicas("Ryzen5900X","B550","Integrada","32","4tb","1tb","850w"));
      break;

    default:
      while(eleccionCategoria !== "gamer" && eleccionCategoria !== "ofimatica" && eleccionCategoria !== "workstation" ){
        alert('escriba bien no sea boludo')
        eleccionCategoria = prompt("Que tipo de PC buscas? gamer, ofimatica, workstation").toLowerCase();
      }
      break;
  }

  let comprar = prompt("Desea comprar esta Pc. Responda por Si o No?").toLowerCase();

  if (comprar == "si") {
    alert("Gracias por su compra, sera redirigido a la parte de pagos");
  } else {
    alert("Es una lastima. Esperamos que vuelvas a visitarnos. Adios");
  }

