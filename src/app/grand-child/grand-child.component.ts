import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../services/utility.service';
@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  public currentDateTime : string;
  constructor(private utilService: UtilityService) {
    this.currentDateTime = this.utilService.currentDateTime.toISOString();
   }

  ngOnInit() {
  }

}
