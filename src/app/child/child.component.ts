import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../services/utility.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [UtilityService]
})
export class ChildComponent implements OnInit {

  public currentDateTime : string;
  constructor(private utilService: UtilityService) {
    this.currentDateTime = this.utilService.currentDateTime.toISOString();
   }

  ngOnInit() {
  }

}
