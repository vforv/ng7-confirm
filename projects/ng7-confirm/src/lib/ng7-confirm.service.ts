import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ng7ConfirmService {
  private _shouldContinue: Subject<{ dialogId: string; continue: boolean }>;

  get shouldContinue() {
    return this._shouldContinue.asObservable();
  }

  constructor() {
    this._shouldContinue = new Subject<{ dialogId: string; continue: boolean }>();
  }

  public continue(dialogId: string) {
    this._shouldContinue.next({ dialogId, continue: true });
  }

  public cancel(dialogId: string) {
    this._shouldContinue.next({ dialogId, continue: false });
  }

}
