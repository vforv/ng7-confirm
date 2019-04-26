/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Ng7ConfirmService } from './ng7-confirm.service';
export class Ng7ConfirmComponent {
    // *ngIf="ngFancyHost.viewContainerRef.length > 0" (click)="closeAlertComponent()"
    /**
     * @param {?} ng7ConfirmService
     * @param {?} elRef
     */
    constructor(ng7ConfirmService, elRef) {
        this.ng7ConfirmService = ng7ConfirmService;
        this.elRef = elRef;
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    continue() {
        this.ng7ConfirmService.continue(this.data.dialogId);
        this.elRef.nativeElement.remove();
    }
    /**
     * @return {?}
     */
    cancel() {
        this.ng7ConfirmService.cancel(this.data.dialogId);
        this.elRef.nativeElement.remove();
    }
}
Ng7ConfirmComponent.decorators = [
    { type: Component, args: [{
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
                styles: [".overlay{background:#101010;opacity:.5;z-index:98;position:fixed;left:0;top:0;right:0;bottom:0}.confirm-box-content .icon,.confirm-box-content button{background:#84817a!important}.confirm-box{z-index:99;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:30%;margin:0 auto}.confirm-box-content{background:#fff;text-align:center;border-radius:20%;font-family:Raleway,sans-serif;padding:10px;box-sizing:border-box;-webkit-animation:.5s shake;animation:.5s shake;box-shadow:1px 3px 2px 2px #656060}.confirm-box-content .icon{width:75px;height:75px;border-radius:100%;border:3px solid #fff;margin:-40px auto 0}.confirm-box-content img{margin-top:8px!important;vertical-align:unset!important}.confirm-box-content .icon span{color:#fff;font-size:50px;line-height:90px}.confirm-box-content .btn-ctrl{width:80%;margin:0 auto}.confirm-box-content button{width:35%!important;color:#fff!important;margin:5px 10px!important;padding:10px 0!important;text-transform:uppercase!important;border-radius:9px!important;font-size:12px!important;cursor:pointer!important}.confirm-box-content .btn-success{background:#b33939!important}.confirm-box-content button:focus{border:none;outline:0}.confirm-box-content h3{color:#545353;font-size:20px;margin:15px 0 10px}.confirm-box-content .confirm-body{color:#616060;font-size:15px}@-webkit-keyframes shake{0%{-webkit-transform:translate(1px,1px) rotate(0);transform:translate(1px,1px) rotate(0)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg);transform:translate(-1px,-2px) rotate(-1deg)}20%{-webkit-transform:translate(-3px,0) rotate(1deg);transform:translate(-3px,0) rotate(1deg)}30%{-webkit-transform:translate(3px,2px) rotate(0);transform:translate(3px,2px) rotate(0)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg);transform:translate(1px,-1px) rotate(1deg)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg);transform:translate(-1px,2px) rotate(-1deg)}60%{-webkit-transform:translate(-3px,1px) rotate(0);transform:translate(-3px,1px) rotate(0)}70%{-webkit-transform:translate(3px,1px) rotate(-1deg);transform:translate(3px,1px) rotate(-1deg)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg);transform:translate(-1px,-1px) rotate(1deg)}90%{-webkit-transform:translate(1px,2px) rotate(0);transform:translate(1px,2px) rotate(0)}100%{-webkit-transform:translate(1px,-2px) rotate(-1deg);transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{-webkit-transform:translate(1px,1px) rotate(0);transform:translate(1px,1px) rotate(0)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg);transform:translate(-1px,-2px) rotate(-1deg)}20%{-webkit-transform:translate(-3px,0) rotate(1deg);transform:translate(-3px,0) rotate(1deg)}30%{-webkit-transform:translate(3px,2px) rotate(0);transform:translate(3px,2px) rotate(0)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg);transform:translate(1px,-1px) rotate(1deg)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg);transform:translate(-1px,2px) rotate(-1deg)}60%{-webkit-transform:translate(-3px,1px) rotate(0);transform:translate(-3px,1px) rotate(0)}70%{-webkit-transform:translate(3px,1px) rotate(-1deg);transform:translate(3px,1px) rotate(-1deg)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg);transform:translate(-1px,-1px) rotate(1deg)}90%{-webkit-transform:translate(1px,2px) rotate(0);transform:translate(1px,2px) rotate(0)}100%{-webkit-transform:translate(1px,-2px) rotate(-1deg);transform:translate(1px,-2px) rotate(-1deg)}}@media only screen and (max-width:1100px){.confirm-box{width:50%}}@media only screen and (max-width:800px){.confirm-box{width:70%}}@media only screen and (max-width:500px){.confirm-box{width:80%}.btn-ctrl{display:flex;flex-direction:column;align-items:center;justify-content:center}.btn-cancel{order:2}.confirm-box-content .confirm-body{font-size:13px}.confirm-box-content .icon span{line-height:65px}.confirm-box-content h3{font-size:17px}.confirm-box-content button{width:80%!important;font-size:11px}.confirm-box-content .icon{width:65px;height:65px}.confirm-box-content img{margin-top:0;width:40px}}"]
            }] }
];
/** @nocollapse */
Ng7ConfirmComponent.ctorParameters = () => [
    { type: Ng7ConfirmService },
    { type: ElementRef }
];
Ng7ConfirmComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    Ng7ConfirmComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmComponent.prototype.ng7ConfirmService;
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmComponent.prototype.elRef;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc3LWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc3LWNvbmZpcm0vIiwic291cmNlcyI6WyJsaWIvbmc3LWNvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUE0QjFELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQVM5QixZQUFvQixpQkFBb0MsRUFBVSxLQUFpQjtRQUEvRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7SUFGdEYsQ0FBQzs7OztJQUlILFFBQVE7SUFDUixDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUOzthQUVGOzs7O1lBM0JRLGlCQUFpQjtZQURFLFVBQVU7OzttQkE4Qm5DLEtBQUs7Ozs7SUFBTixtQ0FNRTs7Ozs7SUFFVSxnREFBNEM7Ozs7O0lBQUUsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzdDb25maXJtU2VydmljZSB9IGZyb20gJy4vbmc3LWNvbmZpcm0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZzctY29uZmlybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1ib3gtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+PHNwYW4+PGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFLclNVUkJWR2hEN1poUFNGUlJGSWRIRTBURFJVSVpGaFJCVUxUSVhXN0NSU0M0aTJwUjBTS0NTQ2hvNDhwbHRncmFCYlV6TUdqUkpnbUNvRVcwQ0ZLcWpSQlJpeVFpb2tpcHNNaWE2VHYzL3JnMlU0TGFPRE5IN2dlSE8rZlB1L2Q3SU9PYlY4aGtNcGxNWmkxVExCYTdTcVhTU2RiOUt2a0QrVTNFTkRjUzRQTXh0WHlCK0MzZFE0RDhobHArUVBxUS9CUFV6cWp0QTRRN2lYZnlENUEvWWxtbkVSOGdmRDNZQzI3aU83RmJiUjhnUENEL0JMVmh0WDJBY0FlUnZxVU04cWNzTFJyeEFkTFhvbjZFL0FkTGo5bytRTHFQS01aYmlKQ09xTzBEbk51UmZoWDFJK1JUUkt0R2ZJRHdaZmtIeUg4Uys5VDJBY0s5SnE1N0NOaU5xZTBEaEZ1Sktma0h5RjhTYlJyeEFjSWo4ZytRRzMxcSt3RHZIcVR0NnpWQmZrVnRIK0RjZ3ZTVHFCOGhueVk2Tk9JRGhJZmxIeUEzK3RYMkFkNjdrUDRXYnlGQ1BxcDI5V0h6SWVJTDhZTG9WZm0vd0xtWnZleHhQRUgrbG1XRFJxb0xtM2NSNlhHQmozUEVFYlZYREh1YzE1Wi9jbER0NnNPQjlsdDVYZ2NGeUg4UlF4cFpObXl4Zyt1L3h0MGk1RGZWWGowNDVKeko2OHdFdGFzc3kvcWx4bndUMTkwUEd3anlEOFJHamF3dUhIU1ltTlBaQ1dwM2lTVi9WVEo3V3BjbXFCMVZ1elp3b0QwTHZkZjVDV3JQaUMwYVd4Um10akkrRzYrS1VCdFh1N1p3dHYxOVA0OGFDMUI3USt6VjJEK2hmMGZqQWZKUFJMZmF0WWZETy9GNEVIVVdvUDZaR05CWUdkUlBhQ3hCN1pUYTlRTUplMW9kazFPQzJqd3hxTEVBdVgzemZkUklnUHdlUzVORzZvdUpJSFFobUZWQS9SSkxFT1Z6NVZ0QysrZTZMV3pTU09CbUw1YkxubDROdXdIaXVOSUV0Yk82dFBGQTdnQXhJOWNFdGNxWENBOVpHdU5QYWpHUTNFTzhqc3AvUTg4ZWIzWnF2TEhCZHpPeWsxRzlIT29yZnF5cEN3aXZKMjdMUDBEK21NWFhpMmZEcEpHL3lEckxPc0c2WGExTUpwUEpyRVVLaGQ4SnMzVU14UTRhZ2dBQUFBQkpSVTVFcmtKZ2dnPT1cIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMz57e2RhdGEudGl0bGV9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYm9keVwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAge3tkYXRhLnF1ZXN0aW9ufX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWN0cmxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNhbmNlbFwiIChjbGljayk9XCJjYW5jZWwoKVwiPnt7ZGF0YS5jYW5jZWx9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImNvbnRpbnVlKClcIj57e2RhdGEuY29udGludWV9fTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9zdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZzdDb25maXJtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YToge1xuICAgIGNvbnRpbnVlOiBzdHJpbmc7XG4gICAgY2FuY2VsOiBzdHJpbmc7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRpYWxvZ0lkOiBzdHJpbmc7XG4gIH07O1xuICAvLyAqbmdJZj1cIm5nRmFuY3lIb3N0LnZpZXdDb250YWluZXJSZWYubGVuZ3RoID4gMFwiIChjbGljayk9XCJjbG9zZUFsZXJ0Q29tcG9uZW50KClcIlxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nN0NvbmZpcm1TZXJ2aWNlOiBOZzdDb25maXJtU2VydmljZSwgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgY29udGludWUoKSB7XG4gICAgdGhpcy5uZzdDb25maXJtU2VydmljZS5jb250aW51ZSh0aGlzLmRhdGEuZGlhbG9nSWQpO1xuICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgdGhpcy5uZzdDb25maXJtU2VydmljZS5jYW5jZWwodGhpcy5kYXRhLmRpYWxvZ0lkKTtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxufVxuIl19