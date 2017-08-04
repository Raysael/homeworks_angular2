import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'list-item-root',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {
@Input() item
}
