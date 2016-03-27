import {Injectable} from 'angular2/core';

@Injectable()

export class SearchService {

  constructor (private _algolia:algoliasearch) {}

}
