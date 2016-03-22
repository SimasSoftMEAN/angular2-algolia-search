import {OnInit, Component}   from 'angular2/core';
import {Hero}                from '../../models/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from '../../services/hero.service';

@Component({
  selector   : 'my-app',
  directives : [HeroDetailComponent],
  styleUrls  : ['./app/components/heroes/hero.css'],
  templateUrl: './app/components/heroes/hero.html'
})

export class HeroesComponent implements OnInit {
  title:string = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
