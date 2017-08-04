import {Component} from '@angular/core';
import {Links} from "../../shared/links";

@Component({
  moduleId: module.id,
  selector: 'aside-root',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent {
  links = Links
}
