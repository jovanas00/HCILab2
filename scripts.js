var app = angular.module("Imenik", []);
app.controller("ImenikController", function($scope) {
    $scope.kontakti = [
        {id:1, ime:"Jovana", prezime:"Stojanović", telefon:"0652310723", email:"jovanastojanovic@elfak.rs"},
        {id:2, ime:"Saša", prezime:"Stojanović", telefon: "062482274", email:"stojanovic_sasa@rocketmail.com"},
        {id:3, ime:"Nikola", prezime:"Stojanović", telefon:"0692310722", email:"nikolastojanovic722@gmail.com"},
        {id:4, ime:"Snežana", prezime:"Najdanović", telefon:"0603571020", email:"snezananajdanovic555@gmail.com"},
        {id:5, ime:"Milica", prezime:"Gošić", telefon:"0652347571", email:"milicagosic32@gmail.com"}
    ];

    var pom;

    $scope.izmeniKontakt = function () {
        let index = this.$index;

        if(this.kontakti[index].ime == ""){
            alert("Unesite ime!"); 
            return;
        }
        if(this.kontakti[index].prezime == ""){
            alert("Unesite prezime!"); 
            return;
        }
        if(this.kontakti[index].telefon == ""){
            alert("Unesite broj telefona!"); 
            return;
        }
        if(this.kontakti[index].email == ""){
            alert("Unesite e-mail adresu!"); 
            return;
        }

        pom = { 
            ime:this.kontakti[index].ime, 
            prezime:this.kontakti[index].prezime, 
            telefon:this.kontakti[index].telefon, 
            email:this.kontakti[index].email 
        };

        $scope.prikaziKontakt = function (ind) {
            if (ind == index) {
                return true;
            }
        }
    }

    $scope.dodajKontakt = function () {

        if(!$scope.ime){
            alert("Unesite ime!"); 
            return;
        }
        else if(!$scope.prezime){
            alert("Unesite prezime!"); 
            return;
        }
        else if(!$scope.telefon){
            alert("Unesite broj telefona!"); 
            return;
        }
        else if(!$scope.email){
            alert("Unesite e-mail adresu!"); 
            return;
        }
        
        for (var i = 0; i < $scope.kontakti.length; i++) {

            if (($scope.kontakti[i].ime == $scope.ime) && 
                ($scope.kontakti[i].prezime == $scope.prezime)&&
                ($scope.kontakti[i].telefon == $scope.telefon)&&
                ($scope.kontakti[i].email == $scope.email)) {
                alert("Kontakt već postoji!");
                return false;
            }
        }
        $scope.kontakti.push({
            ime: $scope.ime,
            prezime: $scope.prezime,
            telefon: $scope.telefon,
            email: $scope.email
        });
        this.prazniInput();
    }

    $scope.prazniInput = function() {
        $scope.ime = ""; 
        $scope.prezime = "";
        $scope.telefon = "";
        $scope.email = "";
    }
    
    $scope.sacuvajKontakt = function () {
        let index = this.$index;

        $scope.prikaziKontakt = function (ind) {
            if (ind == index) {
                return false;
            }
        }
    }

    $scope.odustani = function () {
        let index = this.$index;

        $scope.prikaziKontakt = function (ind) {
            if (ind == index) {
                this.kontakti[index].ime = pom.ime;
                this.kontakti[index].prezime = pom.prezime;
                this.kontakti[index].telefon = pom.telefon;
                this.kontakti[index].email = pom.email;            
                return false;
            }
        }    
    }

})