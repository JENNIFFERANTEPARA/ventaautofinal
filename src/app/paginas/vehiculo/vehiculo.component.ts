import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculoService:VehiculoService) { }
  filtrarpor:string = " ";
  listaVehiculo:any[] = [];

  MostrarImagen: boolean = false;

  ngOnInit() {
    this.listaVehiculo = this.vehiculoService.getVehiculos();
  }

}
