function Animal() {
    /* Usar _self en lugar de this, por que ECMAScript 5 tiene problemas en tiempo de ejecución, 
    el puntero se puede perder. */
    var _self = this;
    _self.numOjos;
    _self.numPatas;
    _self.peso;

    _self.getNumOjos = function() {
        return _self.numOjos;
    }

    _self.setNumOjos = function(ojos) {
        _self.numOjos = ojos;
    }
}


function Mamifero(){
    var _self = this;
    this.numPezones;
    this.pelo;
}

Mamifero.prototype = new Animal;    // No se hace new Animal(). Pues no interesa que se ejecute el constructor.


function Reptil() {
    //...
}


