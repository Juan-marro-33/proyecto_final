function proyectoFinal() {
    while (true) {

        // Todos los mensajes Del final
        function displayTotal() {
            console.log("tu recargo por edad es  ")
            console.log(recargo);
            console.log("tu recargo por conyuge ")
            console.log(recargo_conyuge);
            console.log("tu recargo por tus hijos ")
            console.log(recargo_hijos);
            console.log("tu recargo por tarifa base ")
            console.log(precio_base);
            console.log("tu recargo total es ")
            console.log(recargo_total);
            console.log("tu presio final es");
            console.log(precio_final)

            alert("Para el asegurado " + nombre)
            alert("El recargo total sera de: " + recargo_total)
            alert("El precio sera de: " + precio_final)


        }
        //Precio base de la cotización, en quetzales, lo puede cambiar
        var precio_base = 2000

        //Valores de los recargos 
        var edad_18 = 0.1 // 10%
        var edad_25 = 0.2 // 20%
        var edad_50 = 0.3 // 30%

        var casado_18 = 0.1 // 10%
        var casado_25 = 0.2 // 20%
        var casado_50 = 0.3 // 30%

        var hijos1 = 0.2 // 20%

        //Recargo
        var recargo = 0
        var recargo_conyuge = 0
        var recargo_hijos = 0
        var recargo_total = 0

        //Precio final 
        var precio_final = 0

        //Mensajes de alerta para ingresar datos 
        var nombre = prompt("Ingrese su nombre, por favor")
        var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
        var casado = prompt("¿Está casado actualmente?")

        //Comprobamos la edad del cónyuge, solamente si se está casado/a
        var edad_conyuge = 0;
        if ("SI" === casado.toUpperCase()) {
            edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
        }
        //convirtiendo las edades ingresadas a números 
        var edad_numero = parseInt(edad)
        var edad_conyuge_numero = 0
        //convirtiendo la edad del cónyuge si se esta casado/a
        if ("SI" === casado.toUpperCase()) {
            edad_conyuge_numero = parseInt(edad_conyuge)
        }
        var hijos = prompt("¿Tiene hijos o hijas?")
        // OJO 

        if ("SI" === hijos.toUpperCase()) {
            var cantidad_hijos = 0;
            cantidad_hijos = Number(prompt("Cuantos hijos tiene ?"));
            recargo_hijos = ((precio_base * hijos1) * cantidad_hijos);
        }
        // convierta la cantidad de hijos a numero 
        //var cantidad_hijos_numero = parseInt(cantidad_hijos)
        //Aquí debe calcular el recargo total basado en las respuestas ingresadas
        if (edad_numero >= 18 && edad_numero <= 24) {
            recargo = precio_base * edad_18;
        } else if (edad_numero >= 25 && edad_numero <= 49) {
            recargo = precio_base * edad_25;
        } else {
            recargo = precio_base * edad_50;
        }

        // recargo por la edad del conyuge

        if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
            recargo_conyuge = precio_base * edad_18;
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
            recargo_conyuge = precio_base * edad_25;
        } else if (edad_conyuge >= 50 && edad_conyuge <= 99) {
            recargo_conyuge = precio_base * edad_50;
        } else {
            recargo_conyuge = 0;
        }

        // 3. Recargo por la cantidad de hijos     

        recargo_total = recargo + recargo_conyuge + recargo_hijos
        precio_final = precio_base + recargo_total
        // resultado en una formula
        displayTotal();
        // mecanismo de repeticion lo meti en un while que siempre se ejecuta hasta que se le da breack
        var opcion = prompt("desea hacer otra cotizacion ? o salir ? ")
        if (opcion.toUpperCase() === "SALIR") {
            break;
        }



    }
    console.log("fi");
    alert("muchas gracias que pase una feliz tarde");
}

proyectoFinal()
