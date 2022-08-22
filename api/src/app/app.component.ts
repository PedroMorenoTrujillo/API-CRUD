import { HeroService } from './services/heroService';
import { Component, OnInit } from '@angular/core';
import { ObservableHeroService } from './services/observableHeroService';
import { Hero } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private observableHeroService: ObservableHeroService
  ) {}

  ngOnInit(): void {
    this.initApp();
  }

  initApp(){
    this.heroService.getHeroesFromJson().subscribe((heroData: Hero[]) => {
      if (localStorage.getItem('heroList')) {
        const heroList = JSON.parse(localStorage['heroList']) as Hero[];
        this.observableHeroService.changeHeroList(heroList);
      } else {
        heroData.forEach(
          (hero: Hero) =>
            (hero.id = (hero.nameLabel + hero.citizenshipLabel).trim())
        );
        this.observableHeroService.changeHeroList(heroData);
      }
    });
  }
  resetApp(){
    localStorage.clear();
    this.observableHeroService.refreshApp(true);
    this.initApp();
  }

}
