import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroComponent} from './heroes/heroes.component';
import {HeroService} from '../services/hero.service';

@Component({
  selector   : 'my-app',
  directives : [ROUTER_DIRECTIVES],
  providers  : [HeroService, ROUTER_PROVIDERS],
  templateUrl: './app/components/app.html'
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
