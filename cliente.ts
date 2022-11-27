import {Paciente} from "./Paciente";

export default class Cliente{
    public id_Cliente : number;
    public nombre :  string;
    public telefono : number;
    public esVip : boolean;
    public pacientes : Array<Paciente>;
    public cantidadVisitas :  number;

     public constructor(id_Cliente: number, nombre: string, telefono: number, esVip: boolean, pacientes: Array<Paciente>, cantidadVisitas: number) {
        this.id_Cliente = id_Cliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = esVip;
        this.pacientes = pacientes;
        this.cantidadVisitas = cantidadVisitas;
     }
     public getIdCliente(): number {
        return this.id_Cliente;
     }
     public getNombre(): string {
        return this.nombre;
     }
     public getTelefono(): number {
        return this.telefono;
     }
     public getEsVip(): boolean {
        return this.esVip;
     }
     public getPacientes(n): Paciente {
        return this.pacientes[n];
     }
     public getCantidadVisitas(): number{
        return this.cantidadVisitas;
     }
     public setNombre(nuevoNombre: string) {
        this.nombre = nuevoNombre;
     }
     public setTelefone(nuevoTelefono: number) {
        this.telefono = nuevoTelefono;
     }
     public setPaciente(arregloPacientes : Array<Paciente>, nuevoPaciente: Paciente) {
        this.pacientes[arregloPacientes.length] = nuevoPaciente;
     }
     public registrarVisita(cantidadVisitas: number): number {
         this.cantidadVisitas += 1;
         return cantidadVisitas;
     }
     public listarPacientes(arregloPacientes: Array<Paciente>) {
         for (let i: number = 0; i <arregloPacientes.length; i++){
            console.log(`Nombre Paciente:  ${arregloPacientes[i].getNombre()}`);
         }
     }
     public borrarPaciente(arregloPacientes: Array<Paciente>, nombrePaciente: string) {
         for (let i: number = 0; i <arregloPacientes.length; i++){
            if (arregloPacientes[i].getNombre() == nombrePaciente){
               arregloPacientes.splice(i, 1);
            }
         }
     }
}
