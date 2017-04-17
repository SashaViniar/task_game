import {Component, View} from "angular2/core";
import {Navbar} from './nav/nav.component';
import {Content} from './Content/content.component';
import {Registration} from './registration/registration';

@Component({
   selector: 'my-app'
})

@View({
  template: `
  	<my-nav></my-nav>
  	<my-regist></my-regist>
  	<my-content></my-content>
  	`,
  directives:[Navbar, Content, Registration]
})

export class AppComponent {

}