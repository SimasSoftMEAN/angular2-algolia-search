import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../../models/hero';

@Component({
  selector   : 'my-hero-detail',
  inputs     : ['hero'],
  templateUrl: 'app/components/heroes/hero-detail.html'
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private _routeParams: RouteParams,
    private _heroService: HeroService
  ) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
