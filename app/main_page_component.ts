import {Component, View} from "angular2/core";
import {Navbar} from './nav/nav.component';
import {Content} from './Content/content.component';

@Component({
   selector: 'my-app'
})

@View({
  template: `
  	<my-nav></my-nav>
  	<my-content></my-content>
  	`,
  directives:[Navbar, Content]
})

export class AppComponent {

}