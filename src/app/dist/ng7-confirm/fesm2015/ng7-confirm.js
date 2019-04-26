import { Subject } from 'rxjs';
import { Injectable, Directive, Renderer2, HostListener, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, Input, Component, ElementRef, NgModule, defineInjectable } from '@angular/core';
import { v4 } from 'uuid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng7ConfirmService {
    constructor() {
        this._shouldContinue = new Subject();
    }
    /**
     * @return {?}
     */
    get shouldContinue() {
        return this._shouldContinue.asObservable();
    }
    /**
     * @param {?} dialogId
     * @return {?}
     */
    continue(dialogId) {
        this._shouldContinue.next({ dialogId, continue: true });
    }
    /**
     * @param {?} dialogId
     * @return {?}
     */
    cancel(dialogId) {
        this._shouldContinue.next({ dialogId, continue: false });
    }
}
Ng7ConfirmService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Ng7ConfirmService.ctorParameters = () => [];
/** @nocollapse */ Ng7ConfirmService.ngInjectableDef = defineInjectable({ factory: function Ng7ConfirmService_Factory() { return new Ng7ConfirmService(); }, token: Ng7ConfirmService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng7ConfirmComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng7ConfirmDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} componentFactoryResolver
     * @param {?} render
     * @param {?} ng7ConfirmService
     */
    constructor(viewContainerRef, componentFactoryResolver, render, ng7ConfirmService) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.render = render;
        this.ng7ConfirmService = ng7ConfirmService;
        this.continue = 'Continue';
        this.cancel = 'Cancel';
        this.question = 'Are you sure you want to continue execution?';
        this.title = 'Confirm Dialog';
        this.onConfirm = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.dialogId = v4();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.ng7ConfirmService.shouldContinue
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!data.continue && data.dialogId === this.dialogId) {
                this.onCancel.emit();
            }
            else if (data.continue && data.dialogId === this.dialogId) {
                this.onConfirm.emit();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    performTask() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Ng7ConfirmComponent);
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        (componentRef.instance).data = {
            continue: this.continue,
            cancel: this.cancel,
            question: this.question,
            title: this.title,
            dialogId: this.dialogId
        };
        this.render.appendChild(document.body, componentRef.location.nativeElement);
    }
}
Ng7ConfirmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ng7Confirm]'
            },] }
];
/** @nocollapse */
Ng7ConfirmDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: Ng7ConfirmService }
];
Ng7ConfirmDirective.propDecorators = {
    continue: [{ type: Input }],
    cancel: [{ type: Input }],
    question: [{ type: Input }],
    title: [{ type: Input }],
    onConfirm: [{ type: Output }],
    onCancel: [{ type: Output }],
    performTask: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng7ConfirmModule {
}
Ng7ConfirmModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Ng7ConfirmComponent, Ng7ConfirmDirective],
                entryComponents: [Ng7ConfirmComponent],
                imports: [],
                exports: [Ng7ConfirmDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Ng7ConfirmService, Ng7ConfirmComponent, Ng7ConfirmModule, Ng7ConfirmDirective as ɵa };

//# sourceMappingURL=ng7-confirm.js.map