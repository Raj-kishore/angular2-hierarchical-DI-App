import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../services/utility.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public currentDateTime : string;
  public childComponentVisible: boolean;
  constructor(private utilService: UtilityService) {
    this.currentDateTime = this.utilService.currentDateTime.toISOString();
    this.childComponentVisible = false;
   }

  ngOnInit() {
  }

  showHideChildComponent(){
    this.childComponentVisible = !this.childComponentVisible;
  }

}
