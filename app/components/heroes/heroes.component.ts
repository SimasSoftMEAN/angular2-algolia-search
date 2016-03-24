import {OnInit, Component}   from 'angular2/core';
import {Router}              from 'angular2/router';
import {Hero}                from '../../models/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from '../../services/hero.service';

@Component({
  selector   : 'my-app',
  directives : [HeroDetailComponent],
  styleUrls  : ['app/components/heroes/hero.css'],
  templateUrl: 'app/components/heroes/hero.html'
})

export class HeroesComponent implements OnInit {
  title:string = 'Tour of Heroes';
  hero: Hero = { id: 1, name: 'blah' };
  selectedHero: Hero;

  constructor(
    private _heroService: HeroService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
