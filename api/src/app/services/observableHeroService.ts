import { HeroService } from './heroService';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../models';

@Injectable()
export class ObservableHeroService {
  constructor(private heroService: HeroService) {}

  heroList = new BehaviorSubject<Hero[]>([]);
  refreshFilter = new BehaviorSubject<boolean>(false);

  changeHeroList(newHeroList: Hero[]) {
    this.heroList.next(newHeroList);
    localStorage.setItem('heroList', JSON.stringify(newHeroList));
  }

  refreshApp(refresh: boolean){
    this.refreshFilter.next(refresh)
  }
}
