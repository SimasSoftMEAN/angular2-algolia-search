import {OnInit, Component} from 'angular2/core';

@Component({
  selector   : 'scotch-search',
  templateUrl: './app/components/app.html'
})

export class AppComponent implements OnInit {
  index;
  client;
  results:Array<Object>;
  options:Object = {
    facets: '*',
    facetFilters: ['status:published', 'is_spam:0']
  };

  constructor() {
    this.client = client;
    this.index  = this.client.initIndex('posts_production');
  }

  ngOnInit() {
    this.getSearchResults('angular');
  }

  getSearchResults(query:string) {
    this.index.search(query, this.options)
      .then((data) => {
        this.results = data.hits;
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
