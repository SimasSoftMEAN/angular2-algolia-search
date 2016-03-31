import {OnInit, Component} from 'angular2/core';

@Component({
  selector   : 'app-app',
  templateUrl: './app/components/app.html'
})

export class AppComponent implements OnInit {
  index;
  client;
  results;
  title = 'hello';
  options:Object = {
    facets: '*',
    facetFilters: ['status:published', 'is_spam:0']
  };

  constructor() {
    this.client = client;
    this.index  = this.client.initIndex('posts_production');
  }

  ngOnInit() {
    console.log('init');
    console.log(this.getSearchResults('angular'));
  }

  getSearchResults(query:string) {
    this.index.search(query, this.options)
      .then((data) => {
        console.log(data);
        this.results = data.hits;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
