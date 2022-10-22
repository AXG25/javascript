let bienvenida = 'Bienvenido a Verzall Gaming, por favor inicie sesion';

alert(bienvenida);

let nombreUsuario = prompt ('Ingrese su nombre de usuario')

while (nombreUsuario != 'Pablo84') {
    alert ('El nombre de usuario no existe, o no se ha ingresado correctamente')
    nombreUsuario = prompt ('Ingrese su nombre de usuario')
}

let contraseña = Number(prompt ('Ingrese su contraseña'))
while (contraseña != 123456){
    alert('La contraseña ingresada es incorrecta, vuelva a intentarlo')
    contraseña = Number(prompt ('Ingrese su contraseña nuevamente'))
}  

alert ('Bienvenido' + ' ' + nombreUsuario + '. ' + 'A continuacion podras elegir una categoria')

const caracteristicas = (procesador, mother, placa, ram, almacenamiento, ssd, fuente) => { 
    alert('La Pc elegida cuenta con un,' + ' ' + procesador + ' ' + ',una mother' + ' ' + mother + ', ' + ram + ' ' + 'gb de ram,' + ' ' + 'una' + ' ' + placa + ' ' + ', un disco rigido de ' + almacenamiento + ', ' + ' un ssd de' + ' ' + ssd + ' ' + 'y una fuente de' + ' ' + fuente );
}    



let eleccionCategoria

while (eleccionCategoria != 'Gamer' && eleccionCategoria != 'Ofimatica' && eleccionCategoria != 'Workstation') {   
    eleccionCategoria = prompt ('Que tipo de PC buscas? gamer, ofimatica, workstation').toLowerCase()
    switch (eleccionCategoria) {
            case 'gamer' :
                alert (caracteristicas ('i7', 'Z570', '3080', '16', '1tb', '240gb', '600w'));
                break;    
            case 'ofimatica' :
                alert (caracteristicas ('i3', 'H410', 'Integrada', '4', '1tb', '120gb', '400w'));
                break;
            case 'workstation' :
                alert (caracteristicas ('Ryzen5900X', 'B550', 'Integrada', '32', '4tb', '1tb', '850w'));
                break; 
            default:    
                alert ('La opcion ingresada no es valida')    
                break;
            }        

let comprar = ('Desea comprar esta Pc. Responda por Si o por No?').toLowerCase()

if (comprar == 'si') {
    alert ('Gracias por su compra, sera redirigido a la parte de pagos')
} else {'Es una lastima. Esperamos que vuelvas a visitarnos. Adios'
} 
}







