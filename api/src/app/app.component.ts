import { HeroService } from './services/heroService';
import { Component, OnInit } from '@angular/core';
import { ObservableHeroService } from './services/observableHeroService';
import { Hero } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tableData: Hero[] = []
  constructor(private heroService: HeroService, private observableHeroService: ObservableHeroService){}

  ngOnInit(): void {
    this.heroService.getHeroesFromJson().subscribe(heroData => this.observableHeroService.changeHeroList(heroData))
  }

}
