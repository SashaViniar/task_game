import {Component} from "angular2/core";


@Component({
   selector:'my-content',
   templateUrl:`app/Content/content.component.html`
})

export class Content{

	names = [
		{name_challenge :"football Dengo PS Fifa17", challenge :"football",count_people: "9" }
	]
		
	onAddName(nam_i_c_n,nam_i_c,nam_i_c_p) {
    this.names.push({name_challenge: nam_i_c_n.value, challenge: nam_i_c.value, count_people: nam_i_c_p.value});
  }
}