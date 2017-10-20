//controller en angularJS en formato original
//anterior a angularJS 1.2

angular.module("appMain", [])   //Esto instancia el modulo appMain
//angular.module("appMain")       //Esto llama al modulo appMain (pero que si no esta instanciado da error)
.controller("AppController",function($scope){
    $scope.sTitulo="Curso de Angular JS y Bootstrap"; 
    $scope.sAutor='David P.';
    $scope.inputNombre= "Carlos ";
    console.log($scope);
    
    $scope.borrar= function(){
        $scope.inputNombre='';
        console.info("se ha pulsado el nombre");
        console.log($scope);
    }    
})

