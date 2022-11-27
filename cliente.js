"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(id_Cliente, nombre, telefono, esVip, pacientes, cantidadVisitas) {
        this.id_Cliente = id_Cliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = esVip;
        this.pacientes = pacientes;
        this.cantidadVisitas = cantidadVisitas;
    }
    Cliente.prototype.getIdCliente = function () {
        return this.id_Cliente;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.getEsVip = function () {
        return this.esVip;
    };
    Cliente.prototype.getPacientes = function (n) {
        return this.pacientes[n];
    };
    Cliente.prototype.getCantidadVisitas = function () {
        return this.cantidadVisitas;
    };
    Cliente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Cliente.prototype.setTelefone = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    /* public setPaciente(nuevoPaciente: Paciente) {
      this.pacientes = nuevoPaciente;
    } */
    Cliente.prototype.registrarVisita = function () { };
    Cliente.prototype.listarPacientes = function () { };
    return Cliente;
}());
exports["default"] = Cliente;
