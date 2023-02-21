import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  public stringSubject = new Subject<number>();

  passValue(data:number) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }

}