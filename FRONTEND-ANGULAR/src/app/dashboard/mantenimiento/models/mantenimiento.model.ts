import { MecanicoModel } from '../../mecanico/models/mecanico.model';

export class MantenimientoModel {
    
    public id: number;
    public codigo: string;
    public estado: number;
    public fecha: string;
    public mecanico: MecanicoModel;
    
}