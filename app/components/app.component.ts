import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroService} from '../services/hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector   : 'my-app',
  directives : [ROUTER_DIRECTIVES],
  providers  : [HeroService, ROUTER_PROVIDERS],
  templateUrl: 'app/components/app.html'
})

@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/heroes', name: 'Heroes', component: HeroesComponent },
  { path: '/heroes/:id', name: 'HeroDetail', component: HeroDetailComponent }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
