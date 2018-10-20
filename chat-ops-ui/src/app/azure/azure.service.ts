import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';


import { VMService } from '../vm/vm.service';

@Injectable({
  providedIn: 'root'
})
export class AzureService extends VMService {
  cloud = "azure";

  extractVMs(cloud: string, res: Response) {
    let data = res.json();
    if (data) {
      data.forEach(element => {
        element.cloud = cloud
        element.name = element.name
        element.id = element.id
        element.state = element.status
      });
      console.log(data);
      return data;
    }
    return { };
  }
}
