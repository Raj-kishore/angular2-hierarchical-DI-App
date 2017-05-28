import { Component } from '@angular/core';
import { UtilityService } from './services/utility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app component works!';
  public currentDateTime : string;
  public parentComponentVisible : boolean;
  constructor(private utilService: UtilityService) {
    this.currentDateTime = this.utilService.currentDateTime.toISOString();
    this.parentComponentVisible = false;
   }

  ngOnInit() {
  }
  showHideParentComponent(){
    this.parentComponentVisible = !this.parentComponentVisible;
  }
}
