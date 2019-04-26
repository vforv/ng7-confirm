import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Ng7ConfirmService } from './ng7-confirm.service';

@Component({
  selector: 'lib-ng7-confirm',
  template: `
        <div (click)="cancel()" class="overlay"></div>
        <div class="confirm-box">
        <div class="confirm-box-content">
          <div class="icon"><span><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKrSURBVGhD7ZhPSFRRFIdHE0TDRUIZFhRBULTIXW7CRSC4i2pR0SKCSCho48pltgraBbUzMGjRJgmCoEW0CFKqjRBRiyQiokipsMia6Tv3/rg2U4LaODNH7geHO+fPu/d7IOObV8hkMplMZi1TLBa7SqXSSdb9KvkD+U3ENDcS4PMxtXyB+C3dQ4D8hlp+QPqQ/BPUzqjtA4Q7iXfyD5A/YlmnER8gfD3YC27iO7FbbR8gPCD/BLVhtX2AcAeRvqUM8qcsLRrxAdLXon6E/AdLj9o+QLqPKMZbiJCOqO0DnNuRfhX1I+RTRKtGfIDwZfkHyH8S+9T2AcK9Jq57CNiNqe0DhFuJKfkHyF8SbRrxAcIj8g+QG31q+wDvHqTt6zVBfkVtH+DcgvSTqB8hnyY6NOIDhIflHyA3+tX2Ad67kP4WbyFCPqp29WHzIeIL8YLoVfm/wLmZvexxPEH+lmWDRqoLm3cR6XGBj3PEEbVXDHuc15Z/clDt6sOB9lt5XgcFyH8RQxpZNmyxg+u/xt0i5DfVXj045JzJ68wEtassy/qlxnwT190PGwjyD8RGjawuHHSYmNPZCWp3iSV/VTJ7WpcmqB1VuzZwoD0Lvdf5CWrPiC0aWxRmtjI+G6+KUBtXu7Zwtv19P48aC1B7Q+zV2D+hf0fjAfJPRLfatYfDO/F4EHUWoP6ZGNBYGdRPaCxB7ZTa9QMJe1odk1OC2jwxqLEAuX3zfdRIgPweS5NG6ouJIHQhmFVA/RJLEOVz5VtC++e6LWzSSOBmL5bLnl4NuwHiuNIEtbO6tPFA7gAxI9cEtcqXCA9ZGuNPajGQ3EO8jsp/Q88eb3ZqvLHBdzOyk1G9HOorfqypCwivJ27LP0D+mMXXi2fDpJG/yDrLOsG6Xa1MJpPJrEUKhd8Js3UMxQ4aggAAAABJRU5ErkJggg=="></span>
          </div>
          <div class="confirm-title">
            <h3>{{data.title}}</h3>
          </div>
          <div class="confirm-body">
            <p>
             {{data.question}}
            </p>
          </div>
          <div class="btn-ctrl">
          <button class="btn-cancel" (click)="cancel()">{{data.cancel}}</button>
            <button class="btn-success" (click)="continue()">{{data.continue}}</button>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./style.css']
})
export class Ng7ConfirmComponent implements OnInit {
  @Input() data: {
    continue: string;
    cancel: string;
    question: string;
    title: string;
    dialogId: string;
  };;
  // *ngIf="ngFancyHost.viewContainerRef.length > 0" (click)="closeAlertComponent()"
  constructor(private ng7ConfirmService: Ng7ConfirmService, private elRef: ElementRef) { }

  ngOnInit() {
  }

  public continue() {
    this.ng7ConfirmService.continue(this.data.dialogId);
    this.elRef.nativeElement.remove();
  }

  public cancel() {
    this.ng7ConfirmService.cancel(this.data.dialogId);
    this.elRef.nativeElement.remove();
  }

}
