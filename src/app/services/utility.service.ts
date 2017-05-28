import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  public currentDateTime : Date;
  constructor() { 
    console.log("Inside Utility Service Constructor");
    this.currentDateTime = new Date();
  }

}
