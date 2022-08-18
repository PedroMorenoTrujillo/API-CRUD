import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Hero } from "../models";

@Injectable()
export class ObservableHeroService{

  heroList = new BehaviorSubject<Hero[]>([]);

  changeHeroList(newHeroList: Hero[]){
    this.heroList.next(newHeroList);
  }

}
