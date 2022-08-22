import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, of } from "rxjs";
import { Hero } from "../models";

@Injectable()
export class HeroService{

  private jsonFolder: string = '../../assets/json/wikipedia_marvel_data.json';

  constructor(private http: HttpClient){}

  getHeroesFromJson(){
    return this.http.get<Hero[]>(this.jsonFolder)
  }
}
