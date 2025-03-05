import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  myNumber: string = '5519996950437'
  linkedin_link: string = 'https://www.linkedin.com/company/emcale/';
  instagram_link:string = 'https://www.instagram.com/emcale.telecom/';

  constructor() { }
}
