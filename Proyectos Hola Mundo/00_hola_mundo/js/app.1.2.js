//controller en angularJS en formato 1.2

angular.module("appMain",[])
       .controller("AppController", AppController)

AppController.$inject=['$scope']; // Mecanismo de seguridad en caso de mimificacion
function AppController(){
    this.sTitulo="Curso de Angular JS y Bootstrap"; 
    this.sAutor='David P.';
    this.inputNombre= "Carlos ";
    console.log(this);
    //console.log($scope);  // si se quiere sacar por consola, se debe inyectar el scope (pasarlo por param)
    this.borrar= function(){
        this.inputNombre='';
        console.info("se ha pulsado el nombre");
        console.log(this);
    }    
}




/**------------------------------------------------------------------- 
 * Guia de estilos de John Papa
 * 
(function() {
    'use strict';

    angular
        .module('Module')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];
    function AppController(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();*/