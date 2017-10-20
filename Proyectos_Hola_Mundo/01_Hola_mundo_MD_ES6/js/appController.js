//Controller segun el formato de estilo de toddmotto (EmmaScript 6 - AngularJS 1.5)


class AppController {

    //Este constructor se reserva para inyectar dependencias
    //Inyectamos el scope unicamente para mostrar por consola
    constructor($scope){
        this.$scope = $scope;
    }

    //Este es un segundo constructor, solo se va a ejecutar al inicio. Se utilizara para inicializar variables
    $onInit (){
        this.sTitulo="Curso de Angular JS y Bootstrap"; 
        this.sAutor='David P.';
        this.inputNombre= "Carlos ";
        console.log(this);
        console.log(this.$scope);  // si se quiere sacar por consola, se debe inyectar el scope (pasarlo por param)
    }
    borrar (){
        this.inputNombre='';
        console.info("se ha pulsado el nombre");
        console.log(this);
    }    
}

angular
    .module("appMain")
    .controller("AppController", AppController)



/** En Angular 2 seria mas o menos asi
 * -------------------------  
@ngComponent {
    template
    vista
}
    class App....{

    }
    */