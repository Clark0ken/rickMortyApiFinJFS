// api.service.ts
/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private characterBaseUrl = 'https://rickandmortyapi.com/api/character/';
  private locationBaseUrl = 'https://rickandmortyapi.com/api/location/';
  private randomCharacterNumbers = Array.from({ length: 3 }, () => this.generateRandomNumber(1, 183));
  private randomLocationNumbers = Array.from({ length: 3 }, () => this.generateRandomNumber(1, 108));
  private characterUrlApi = `${this.characterBaseUrl}${this.randomCharacterNumbers.join(',')}`;
  private locationUrlApi = `${this.locationBaseUrl}${this.randomLocationNumbers.join(',')}`;

  constructor(private http: HttpClient) { }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getCharacterData(): Observable<Character[]> {
    return this.http.get<any>(this.characterUrlApi).pipe(
      map(response => ('results' in response) ? response.results.map((character: any) => new Character(character)) : [new Character(response)])
    );
  }

  public getLocationData(): Observable<Location[]> {
    return this.http.get<any>(this.locationUrlApi).pipe(
      map(response => ('results' in response) ? response.results.map((location: any) => new Location(location)) : [new Location(response)])
    );
  }
}
*/


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//7.3 importamos el objeto para que funcione el observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //7.1 Creamos una variable para guardar el URL y asi obtener la informacion
  private baseUrl = 'https://rickandmortyapi.com/api/character/';
  //7.2 luego con esta variable generamos numeros aleatorios para pillar personajes diferentes
  private randomNumbers = Array.from({ length: 3 }, () => this.generateRandomNumber(1, 183));
  //guardamos la url modificada
  private urlApi = `${this.baseUrl}${this.randomNumbers.join(',')}`;

  constructor(private http: HttpClient) { }
//7.2 Generamos nueros aleatorios con esta funcion
  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//7.3 Como no sabemos el tipo de dato que puede retornar creamos un observavle 
//de tipo any
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
