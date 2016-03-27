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
    this.index  = this.client.initIndex('posts_local');
  }

  ngOnInit() {
    this.getSearchResults('angular');
  }

  getSearchResults(query:string) {
    this.index.search(query, this.options)
      .then(function(data) {
        this.results = data.hits;
        console.log(data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

}
