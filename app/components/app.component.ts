import {OnInit, Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector   : 'scotch-search',
  providers  : [HTTP_PROVIDERS],
  templateUrl: './app/components/app.html'
})

export class AppComponent implements OnInit {
  index;
  facetFilters:Array<string>;


  constructor() {}

  ngOnInit() {
    this.index = client.initIndex('posts_local');

    this.index.search('something', function searchDone(err, content) {
      // err is either `null` or an `Error` object, with a `message` property
      // content is either the result of the command or `undefined`

      if (err) {
        console.error(err);
        return;
      }

      console.log(content);
    });

    console.log('waht');
    console.log(algoliasearch);
  }
}
