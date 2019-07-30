let Cuenta = function(saldo,limite, history){
	this.saldo = saldo;
	this.limite = limite;
	this.history = history;
}

Cuenta.prototype.depositar = function(saldo){
	this.saldo += 50;
	this.history+= "Deposito : 50";
	this.history+= "<br>"
	document.getElementById(saldo).innerHTML= this.saldo;
}

Cuenta.prototype.retirar = function(saldo){
	if (this.saldo > this.limite){
		this.saldo -= 50;
		this.history+= "Retiro: 50";
		this.history+= "<br>"
		document.getElementById(saldo).innerHTML= this.saldo;
	}
	else{
		alert("No puede retirar mas plata");
	}
}

Cuenta.prototype.historial = function(histo){
	document.getElementById(histo).innerHTML= this.history;
}

let CajaDeAhorro = function(saldo, limite, history){
	Cuenta.call(this,saldo, limite, history);
}

let CuentaCorriente = function(saldo, limite, history){
	Cuenta.call(this, saldo, limite, history);
}

CajaDeAhorro.prototype = Object.create(Cuenta.prototype);

CuentaCorriente.prototype = Object.create(Cuenta.prototype);

let cajaDeAhorro = new CajaDeAhorro(0,0, "");

let cuentaCorriente = new CuentaCorriente(0,-100, "");

