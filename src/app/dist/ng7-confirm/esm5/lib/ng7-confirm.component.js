/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Ng7ConfirmService } from './ng7-confirm.service';
var Ng7ConfirmComponent = /** @class */ (function () {
    // *ngIf="ngFancyHost.viewContainerRef.length > 0" (click)="closeAlertComponent()"
    function Ng7ConfirmComponent(ng7ConfirmService, elRef) {
        this.ng7ConfirmService = ng7ConfirmService;
        this.elRef = elRef;
    }
    ;
    /**
     * @return {?}
     */
    Ng7ConfirmComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Ng7ConfirmComponent.prototype.continue = /**
     * @return {?}
     */
    function () {
        this.ng7ConfirmService.continue(this.data.dialogId);
        this.elRef.nativeElement.remove();
    };
    /**
     * @return {?}
     */
    Ng7ConfirmComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.ng7ConfirmService.cancel(this.data.dialogId);
        this.elRef.nativeElement.remove();
    };
    Ng7ConfirmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ng7-confirm',
                    template: "\n        <div (click)=\"cancel()\" class=\"overlay\"></div>\n        <div class=\"confirm-box\">\n        <div class=\"confirm-box-content\">\n          <div class=\"icon\"><span><img\n                src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKrSURBVGhD7ZhPSFRRFIdHE0TDRUIZFhRBULTIXW7CRSC4i2pR0SKCSCho48pltgraBbUzMGjRJgmCoEW0CFKqjRBRiyQiokipsMia6Tv3/rg2U4LaODNH7geHO+fPu/d7IOObV8hkMplMZi1TLBa7SqXSSdb9KvkD+U3ENDcS4PMxtXyB+C3dQ4D8hlp+QPqQ/BPUzqjtA4Q7iXfyD5A/YlmnER8gfD3YC27iO7FbbR8gPCD/BLVhtX2AcAeRvqUM8qcsLRrxAdLXon6E/AdLj9o+QLqPKMZbiJCOqO0DnNuRfhX1I+RTRKtGfIDwZfkHyH8S+9T2AcK9Jq57CNiNqe0DhFuJKfkHyF8SbRrxAcIj8g+QG31q+wDvHqTt6zVBfkVtH+DcgvSTqB8hnyY6NOIDhIflHyA3+tX2Ad67kP4WbyFCPqp29WHzIeIL8YLoVfm/wLmZvexxPEH+lmWDRqoLm3cR6XGBj3PEEbVXDHuc15Z/clDt6sOB9lt5XgcFyH8RQxpZNmyxg+u/xt0i5DfVXj045JzJ68wEtassy/qlxnwT190PGwjyD8RGjawuHHSYmNPZCWp3iSV/VTJ7WpcmqB1VuzZwoD0Lvdf5CWrPiC0aWxRmtjI+G6+KUBtXu7Zwtv19P48aC1B7Q+zV2D+hf0fjAfJPRLfatYfDO/F4EHUWoP6ZGNBYGdRPaCxB7ZTa9QMJe1odk1OC2jwxqLEAuX3zfdRIgPweS5NG6ouJIHQhmFVA/RJLEOVz5VtC++e6LWzSSOBmL5bLnl4NuwHiuNIEtbO6tPFA7gAxI9cEtcqXCA9ZGuNPajGQ3EO8jsp/Q88eb3ZqvLHBdzOyk1G9HOorfqypCwivJ27LP0D+mMXXi2fDpJG/yDrLOsG6Xa1MJpPJrEUKhd8Js3UMxQ4aggAAAABJRU5ErkJggg==\"></span>\n          </div>\n          <div class=\"confirm-title\">\n            <h3>{{data.title}}</h3>\n          </div>\n          <div class=\"confirm-body\">\n            <p>\n             {{data.question}}\n            </p>\n          </div>\n          <div class=\"btn-ctrl\">\n          <button class=\"btn-cancel\" (click)=\"cancel()\">{{data.cancel}}</button>\n            <button class=\"btn-success\" (click)=\"continue()\">{{data.continue}}</button>\n          </div>\n        </div>\n      </div>\n  ",
                    styles: [".overlay{background:#101010;opacity:.5;z-index:98;position:fixed;left:0;top:0;right:0;bottom:0}.confirm-box-content .icon,.confirm-box-content button{background:#84817a!important}.confirm-box{z-index:99;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:30%;margin:0 auto}.confirm-box-content{background:#fff;text-align:center;border-radius:20%;font-family:Raleway,sans-serif;padding:10px;box-sizing:border-box;-webkit-animation:.5s shake;animation:.5s shake;box-shadow:1px 3px 2px 2px #656060}.confirm-box-content .icon{width:75px;height:75px;border-radius:100%;border:3px solid #fff;margin:-40px auto 0}.confirm-box-content img{margin-top:8px!important;vertical-align:unset!important}.confirm-box-content .icon span{color:#fff;font-size:50px;line-height:90px}.confirm-box-content .btn-ctrl{width:80%;margin:0 auto}.confirm-box-content button{width:35%!important;color:#fff!important;margin:5px 10px!important;padding:10px 0!important;text-transform:uppercase!important;border-radius:9px!important;font-size:12px!important;cursor:pointer!important}.confirm-box-content .btn-success{background:#b33939!important}.confirm-box-content button:focus{border:none;outline:0}.confirm-box-content h3{color:#545353;font-size:20px;margin:15px 0 10px}.confirm-box-content .confirm-body{color:#616060;font-size:15px}@-webkit-keyframes shake{0%{-webkit-transform:translate(1px,1px) rotate(0);transform:translate(1px,1px) rotate(0)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg);transform:translate(-1px,-2px) rotate(-1deg)}20%{-webkit-transform:translate(-3px,0) rotate(1deg);transform:translate(-3px,0) rotate(1deg)}30%{-webkit-transform:translate(3px,2px) rotate(0);transform:translate(3px,2px) rotate(0)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg);transform:translate(1px,-1px) rotate(1deg)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg);transform:translate(-1px,2px) rotate(-1deg)}60%{-webkit-transform:translate(-3px,1px) rotate(0);transform:translate(-3px,1px) rotate(0)}70%{-webkit-transform:translate(3px,1px) rotate(-1deg);transform:translate(3px,1px) rotate(-1deg)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg);transform:translate(-1px,-1px) rotate(1deg)}90%{-webkit-transform:translate(1px,2px) rotate(0);transform:translate(1px,2px) rotate(0)}100%{-webkit-transform:translate(1px,-2px) rotate(-1deg);transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{-webkit-transform:translate(1px,1px) rotate(0);transform:translate(1px,1px) rotate(0)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg);transform:translate(-1px,-2px) rotate(-1deg)}20%{-webkit-transform:translate(-3px,0) rotate(1deg);transform:translate(-3px,0) rotate(1deg)}30%{-webkit-transform:translate(3px,2px) rotate(0);transform:translate(3px,2px) rotate(0)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg);transform:translate(1px,-1px) rotate(1deg)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg);transform:translate(-1px,2px) rotate(-1deg)}60%{-webkit-transform:translate(-3px,1px) rotate(0);transform:translate(-3px,1px) rotate(0)}70%{-webkit-transform:translate(3px,1px) rotate(-1deg);transform:translate(3px,1px) rotate(-1deg)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg);transform:translate(-1px,-1px) rotate(1deg)}90%{-webkit-transform:translate(1px,2px) rotate(0);transform:translate(1px,2px) rotate(0)}100%{-webkit-transform:translate(1px,-2px) rotate(-1deg);transform:translate(1px,-2px) rotate(-1deg)}}@media only screen and (max-width:1100px){.confirm-box{width:50%}}@media only screen and (max-width:800px){.confirm-box{width:70%}}@media only screen and (max-width:500px){.confirm-box{width:80%}.btn-ctrl{display:flex;flex-direction:column;align-items:center;justify-content:center}.btn-cancel{order:2}.confirm-box-content .confirm-body{font-size:13px}.confirm-box-content .icon span{line-height:65px}.confirm-box-content h3{font-size:17px}.confirm-box-content button{width:80%!important;font-size:11px}.confirm-box-content .icon{width:65px;height:65px}.confirm-box-content img{margin-top:0;width:40px}}"]
                }] }
    ];
    /** @nocollapse */
    Ng7ConfirmComponent.ctorParameters = function () { return [
        { type: Ng7ConfirmService },
        { type: ElementRef }
    ]; };
    Ng7ConfirmComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return Ng7ConfirmComponent;
}());
export { Ng7ConfirmComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc3LWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc3LWNvbmZpcm0vIiwic291cmNlcyI6WyJsaWIvbmc3LWNvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFrQ0Usa0ZBQWtGO0lBQ2xGLDZCQUFvQixpQkFBb0MsRUFBVSxLQUFpQjtRQUEvRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7SUFGdEYsQ0FBQzs7OztJQUlILHNDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFTSxzQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVNLG9DQUFNOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw0d0RBcUJUOztpQkFFRjs7OztnQkEzQlEsaUJBQWlCO2dCQURFLFVBQVU7Ozt1QkE4Qm5DLEtBQUs7O0lBdUJSLDBCQUFDO0NBQUEsQUFsREQsSUFrREM7U0F4QlksbUJBQW1COzs7SUFDOUIsbUNBTUU7Ozs7O0lBRVUsZ0RBQTRDOzs7OztJQUFFLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmc3Q29uZmlybVNlcnZpY2UgfSBmcm9tICcuL25nNy1jb25maXJtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmc3LWNvbmZpcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IChjbGljayk9XCJjYW5jZWwoKVwiIGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjxzcGFuPjxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBS3JTVVJCVkdoRDdaaFBTRlJSRklkSEUwVERSVUlaRmhSQlVMVElYVzdDUlNDNGkycFIwU0tDU0NobzQ4cGx0Z3JhQmJVek1HalJKZ21Db0VXMENGS3FqUkJSaXlRaW9raXBzTWlhNlR2My9yZzJVNExhT0ROSDdnZUhPK2ZQdS9kN0lPT2JWOGhrTXBsTVppMVRMQmE3U3FYU1NkYjlLdmtEK1UzRU5EY1M0UE14dFh5QitDM2RRNEQ4aGxwK1FQcVEvQlBVenFqdEE0UTdpWGZ5RDVBL1lsbW5FUjhnZkQzWUMyN2lPN0ZiYlI4Z1BDRC9CTFZodFgyQWNBZVJ2cVVNOHFjc0xScnhBZExYb242RS9BZExqOW8rUUxxUEtNWmJpSkNPcU8wRG5OdVJmaFgxSStSVFJLdEdmSUR3WmZrSHlIOFMrOVQyQWNLOUpxNTdDTmlOcWUwRGhGdUpLZmtIeUY4U2JScnhBY0lqOGcrUUczMXErd0R2SHFUdDZ6VkJma1Z0SCtEY2d2U1RxQjhobnlZNk5PSURoSWZsSHlBMyt0WDJBZDY3a1A0V2J5RkNQcXAyOVdIekllSUw4WUxvVmZtL3dMbVp2ZXh4UEVIK2xtV0RScW9MbTNjUjZYR0JqM1BFRWJWWERIdWMxNVovY2xEdDZzT0I5bHQ1WGdjRnlIOFJReHBaTm15eGcrdS94dDBpNURmVlhqMDQ1SnpKNjh3RXRhc3N5L3FseG53VDE5MFBHd2p5RDhSR2phd3VISFNZbU5QWkNXcDNpU1YvVlRKN1dwY21xQjFWdXpad29EMEx2ZGY1Q1dyUGlDMGFXeFJtdGpJK0c2K0tVQnRYdTdad3R2MTlQNDhhQzFCN1ErelYyRCtoZjBmakFmSlBSTGZhdFlmRE8vRjRFSFVXb1A2WkdOQllHZFJQYUN4QjdaVGE5UU1KZTFvZGsxT0Myand4cUxFQXVYM3pmZFJJZ1B3ZVM1Tkc2b3VKSUhRaG1GVkEvUkpMRU9WejVWdEMrK2U2TFd6U1NPQm1MNWJMbmw0TnV3SGl1TklFdGJPNnRQRkE3Z0F4STljRXRjcVhDQTlaR3VOUGFqR1EzRU84anNwL1E4OGViM1pxdkxIQmR6T3lrMUc5SE9vcmZxeXBDd2l2SjI3TFAwRCttTVhYaTJmRHBKRy95RHJMT3NHNlhhMU1KcFBKckVVS2hkOEpzM1VNeFE0YWdnQUFBQUJKUlU1RXJrSmdnZz09XCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDM+e3tkYXRhLnRpdGxlfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWJvZHlcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgIHt7ZGF0YS5xdWVzdGlvbn19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jdHJsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1jYW5jZWxcIiAoY2xpY2spPVwiY2FuY2VsKClcIj57e2RhdGEuY2FuY2VsfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc3VjY2Vzc1wiIChjbGljayk9XCJjb250aW51ZSgpXCI+e3tkYXRhLmNvbnRpbnVlfX08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmc3Q29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IHtcbiAgICBjb250aW51ZTogc3RyaW5nO1xuICAgIGNhbmNlbDogc3RyaW5nO1xuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkaWFsb2dJZDogc3RyaW5nO1xuICB9OztcbiAgLy8gKm5nSWY9XCJuZ0ZhbmN5SG9zdC52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCA+IDBcIiAoY2xpY2spPVwiY2xvc2VBbGVydENvbXBvbmVudCgpXCJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZzdDb25maXJtU2VydmljZTogTmc3Q29uZmlybVNlcnZpY2UsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGNvbnRpbnVlKCkge1xuICAgIHRoaXMubmc3Q29uZmlybVNlcnZpY2UuY29udGludWUodGhpcy5kYXRhLmRpYWxvZ0lkKTtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKCkge1xuICAgIHRoaXMubmc3Q29uZmlybVNlcnZpY2UuY2FuY2VsKHRoaXMuZGF0YS5kaWFsb2dJZCk7XG4gICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbn1cbiJdfQ==