import {Component} from "@angular/core";

import {Data} from "../../shared/data"

@Component({
  moduleId: module.id,
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  dataItems = Data
}
