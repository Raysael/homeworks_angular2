import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'link-aside',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})


export class LinkComponent {
@Input() linkItem;

  getLink() {
    return this.linkItem.link.search(/http/i) === 0
  }
}
