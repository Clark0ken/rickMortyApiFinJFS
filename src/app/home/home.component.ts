// home.component.ts
/*import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { Location } from '../models/location.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characterData: Character[] = [];
  locationData: Location[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarDatosPersonajes();
    this.llenarDatosUbicaciones();
  }

  llenarDatosPersonajes() {
    this.apiService.getCharacterData().subscribe(characters => {
      this.characterData = characters;
      console.log('Personajes:', this.characterData);
    });
  }

  llenarDatosUbicaciones() {
    this.apiService.getLocationData().subscribe(locations => {
      this.locationData = locations;
      console.log('Ubicaciones:', this.locationData);
    });
  }
}*/

// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //8.1 creamos la variable para almacenar los datos
  data: Character[] = [];
//importante en el constructor importar los servicios
  constructor(private apiService: ApiService) {}
 //8.2 hacemos la llamada al metodo de llenar data para llenarlo de datos
  ngOnInit(): void {
    this.llenarData();
  }

 //8.3 Terminamos de complementar los datos y con esto podemos ver 
 //si la aplicacion devuelve los datos
  llenarData() {
    this.apiService.getData().subscribe(characters => {
      this.data = characters;
      console.log(this.data);
    });
  }
}
