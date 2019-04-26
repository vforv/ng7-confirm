(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('uuid')) :
    typeof define === 'function' && define.amd ? define('ng7-confirm', ['exports', 'rxjs', '@angular/core', 'uuid'], factory) :
    (factory((global['ng7-confirm'] = {}),global.rxjs,global.ng.core,global.uuid));
}(this, (function (exports,rxjs,i0,uuid) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Ng7ConfirmService = /** @class */ (function () {
        function Ng7ConfirmService() {
            this._shouldContinue = new rxjs.Subject();
        }
        Object.defineProperty(Ng7ConfirmService.prototype, "shouldContinue", {
            get: /**
             * @return {?}
             */ function () {
                return this._shouldContinue.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} dialogId
         * @return {?}
         */
        Ng7ConfirmService.prototype.continue = /**
         * @param {?} dialogId
         * @return {?}
         */
            function (dialogId) {
                this._shouldContinue.next({ dialogId: dialogId, continue: true });
            };
        /**
         * @param {?} dialogId
         * @return {?}
         */
        Ng7ConfirmService.prototype.cancel = /**
         * @param {?} dialogId
         * @return {?}
         */
            function (dialogId) {
                this._shouldContinue.next({ dialogId: dialogId, continue: false });
            };
        Ng7ConfirmService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Ng7ConfirmService.ctorParameters = function () { return []; };
        /** @nocollapse */ Ng7ConfirmService.ngInjectableDef = i0.defineInjectable({ factory: function Ng7ConfirmService_Factory() { return new Ng7ConfirmService(); }, token: Ng7ConfirmService, providedIn: "root" });
        return Ng7ConfirmService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Ng7ConfirmComponent = /** @class */ (function () {
        // *ngIf="ngFancyHost.viewContainerRef.length > 0" (click)="closeAlertComponent()"
        function Ng7ConfirmComponent(ng7ConfirmService, elRef) {
            this.ng7ConfirmService = ng7ConfirmService;
            this.elRef = elRef;
        }
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
            { type: i0.Component, args: [{
                        selector: 'lib-ng7-confirm',
                        template: "\n        <div (click)=\"cancel()\" class=\"overlay\"></div>\n        <div class=\"confirm-box\">\n        <div class=\"confirm-box-content\">\n          <div class=\"icon\"><span><img\n                src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKrSURBVGhD7ZhPSFRRFIdHE0TDRUIZFhRBULTIXW7CRSC4i2pR0SKCSCho48pltgraBbUzMGjRJgmCoEW0CFKqjRBRiyQiokipsMia6Tv3/rg2U4LaODNH7geHO+fPu/d7IOObV8hkMplMZi1TLBa7SqXSSdb9KvkD+U3ENDcS4PMxtXyB+C3dQ4D8hlp+QPqQ/BPUzqjtA4Q7iXfyD5A/YlmnER8gfD3YC27iO7FbbR8gPCD/BLVhtX2AcAeRvqUM8qcsLRrxAdLXon6E/AdLj9o+QLqPKMZbiJCOqO0DnNuRfhX1I+RTRKtGfIDwZfkHyH8S+9T2AcK9Jq57CNiNqe0DhFuJKfkHyF8SbRrxAcIj8g+QG31q+wDvHqTt6zVBfkVtH+DcgvSTqB8hnyY6NOIDhIflHyA3+tX2Ad67kP4WbyFCPqp29WHzIeIL8YLoVfm/wLmZvexxPEH+lmWDRqoLm3cR6XGBj3PEEbVXDHuc15Z/clDt6sOB9lt5XgcFyH8RQxpZNmyxg+u/xt0i5DfVXj045JzJ68wEtassy/qlxnwT190PGwjyD8RGjawuHHSYmNPZCWp3iSV/VTJ7WpcmqB1VuzZwoD0Lvdf5CWrPiC0aWxRmtjI+G6+KUBtXu7Zwtv19P48aC1B7Q+zV2D+hf0fjAfJPRLfatYfDO/F4EHUWoP6ZGNBYGdRPaCxB7ZTa9QMJe1odk1OC2jwxqLEAuX3zfdRIgPweS5NG6ouJIHQhmFVA/RJLEOVz5VtC++e6LWzSSOBmL5bLnl4NuwHiuNIEtbO6tPFA7gAxI9cEtcqXCA9ZGuNPajGQ3EO8jsp/Q88eb3ZqvLHBdzOyk1G9HOorfqypCwivJ27LP0D+mMXXi2fDpJG/yDrLOsG6Xa1MJpPJrEUKhd8Js3UMxQ4aggAAAABJRU5ErkJggg==\"></span>\n          </div>\n          <div class=\"confirm-title\">\n            <h3>{{data.title}}</h3>\n          </div>\n          <div class=\"confirm-body\">\n            <p>\n             {{data.question}}\n            </p>\n          </div>\n          <div class=\"btn-ctrl\">\n          <button class=\"btn-cancel\" (click)=\"cancel()\">{{data.cancel}}</button>\n            <button class=\"btn-success\" (click)=\"continue()\">{{data.continue}}</button>\n          </div>\n        </div>\n      </div>\n  ",
                        styles: [".overlay{background:#101010;opacity:.5;z-index:98;position:fixed;left:0;top:0;right:0;bottom:0}.confirm-box-content .icon,.confirm-box-content button{background:#84817a!important}.confirm-box{z-index:99;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:30%;margin:0 auto}.confirm-box-content{background:#fff;text-align:center;border-radius:20%;font-family:Raleway,sans-serif;padding:10px;box-sizing:border-box;-webkit-animation:.5s shake;animation:.5s shake;box-shadow:1px 3px 2px 2px #656060}.confirm-box-content .icon{width:75px;height:75px;border-radius:100%;border:3px solid #fff;margin:-40px auto 0}.confirm-box-content img{margin-top:8px!important;vertical-align:unset!important}.confirm-box-content .icon span{color:#fff;font-size:50px;line-height:90px}.confirm-box-content .btn-ctrl{width:80%;margin:0 auto}.confirm-box-content button{width:35%!important;color:#fff!important;margin:5px 10px!important;padding:10px 0!important;text-transform:uppercase!important;border-radius:9px!important;font-size:12px!important;cursor:pointer!important}.confirm-box-content .btn-success{background:#b33939!important}.confirm-box-content button:focus{border:none;outline:0}.confirm-box-content h3{color:#545353;font-size:20px;margin:15px 0 10px}.confirm-box-content .confirm-body{color:#616060;font-size:15px}@-webkit-keyframes shake{0%{-webkit-transform:translate(1px,1px) rotate(0);transform:translate(1px,1px) rotate(0)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg);transform:translate(-1px,-2px) rotate(-1deg)}20%{-webkit-transform:translate(-3px,0) rotate(1deg);transform:translate(-3px,0) rotate(1deg)}30%{-webkit-transform:translate(3px,2px) rotate(0);transform:translate(3px,2px) rotate(0)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg);transform:translate(1px,-1px) rotate(1deg)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg);transform:translate(-1px,2px) rotate(-1deg)}60%{-webkit-transform:translate(-3px,1px) rotate(0);transform:translate(-3px,1px) rotate(0)}70%{-webkit-transform:translate(3px,1px) rotate(-1deg);transform:translate(3px,1px) rotate(-1deg)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg);transform:translate(-1px,-1px) rotate(1deg)}90%{-webkit-transform:translate(1px,2px) rotate(0);transform:translate(1px,2px) rotate(0)}100%{-webkit-transform:translate(1px,-2px) rotate(-1deg);transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{-webkit-transform:translate(1px,1px) rotate(0);transform:translate(1px,1px) rotate(0)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg);transform:translate(-1px,-2px) rotate(-1deg)}20%{-webkit-transform:translate(-3px,0) rotate(1deg);transform:translate(-3px,0) rotate(1deg)}30%{-webkit-transform:translate(3px,2px) rotate(0);transform:translate(3px,2px) rotate(0)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg);transform:translate(1px,-1px) rotate(1deg)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg);transform:translate(-1px,2px) rotate(-1deg)}60%{-webkit-transform:translate(-3px,1px) rotate(0);transform:translate(-3px,1px) rotate(0)}70%{-webkit-transform:translate(3px,1px) rotate(-1deg);transform:translate(3px,1px) rotate(-1deg)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg);transform:translate(-1px,-1px) rotate(1deg)}90%{-webkit-transform:translate(1px,2px) rotate(0);transform:translate(1px,2px) rotate(0)}100%{-webkit-transform:translate(1px,-2px) rotate(-1deg);transform:translate(1px,-2px) rotate(-1deg)}}@media only screen and (max-width:1100px){.confirm-box{width:50%}}@media only screen and (max-width:800px){.confirm-box{width:70%}}@media only screen and (max-width:500px){.confirm-box{width:80%}.btn-ctrl{display:flex;flex-direction:column;align-items:center;justify-content:center}.btn-cancel{order:2}.confirm-box-content .confirm-body{font-size:13px}.confirm-box-content .icon span{line-height:65px}.confirm-box-content h3{font-size:17px}.confirm-box-content button{width:80%!important;font-size:11px}.confirm-box-content .icon{width:65px;height:65px}.confirm-box-content img{margin-top:0;width:40px}}"]
                    }] }
        ];
        /** @nocollapse */
        Ng7ConfirmComponent.ctorParameters = function () {
            return [
                { type: Ng7ConfirmService },
                { type: i0.ElementRef }
            ];
        };
        Ng7ConfirmComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return Ng7ConfirmComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Ng7ConfirmDirective = /** @class */ (function () {
        function Ng7ConfirmDirective(viewContainerRef, componentFactoryResolver, render, ng7ConfirmService) {
            this.viewContainerRef = viewContainerRef;
            this.componentFactoryResolver = componentFactoryResolver;
            this.render = render;
            this.ng7ConfirmService = ng7ConfirmService;
            this.continue = 'Continue';
            this.cancel = 'Cancel';
            this.question = 'Are you sure you want to continue execution?';
            this.title = 'Confirm Dialog';
            this.onConfirm = new i0.EventEmitter();
            this.onCancel = new i0.EventEmitter();
            this.dialogId = uuid.v4();
        }
        /**
         * @return {?}
         */
        Ng7ConfirmDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.sub = this.ng7ConfirmService.shouldContinue
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    if (!data.continue && data.dialogId === _this.dialogId) {
                        _this.onCancel.emit();
                    }
                    else if (data.continue && data.dialogId === _this.dialogId) {
                        _this.onConfirm.emit();
                    }
                }));
            };
        /**
         * @return {?}
         */
        Ng7ConfirmDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.sub) {
                    this.sub.unsubscribe();
                }
            };
        /**
         * @return {?}
         */
        Ng7ConfirmDirective.prototype.performTask = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var componentFactory = this.componentFactoryResolver.resolveComponentFactory(Ng7ConfirmComponent);
                /** @type {?} */
                var componentRef = this.viewContainerRef.createComponent(componentFactory);
                (componentRef.instance).data = {
                    continue: this.continue,
                    cancel: this.cancel,
                    question: this.question,
                    title: this.title,
                    dialogId: this.dialogId
                };
                this.render.appendChild(document.body, componentRef.location.nativeElement);
            };
        Ng7ConfirmDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ng7Confirm]'
                    },] }
        ];
        /** @nocollapse */
        Ng7ConfirmDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef },
                { type: i0.ComponentFactoryResolver },
                { type: i0.Renderer2 },
                { type: Ng7ConfirmService }
            ];
        };
        Ng7ConfirmDirective.propDecorators = {
            continue: [{ type: i0.Input }],
            cancel: [{ type: i0.Input }],
            question: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            onConfirm: [{ type: i0.Output }],
            onCancel: [{ type: i0.Output }],
            performTask: [{ type: i0.HostListener, args: ['click',] }]
        };
        return Ng7ConfirmDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Ng7ConfirmModule = /** @class */ (function () {
        function Ng7ConfirmModule() {
        }
        Ng7ConfirmModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [Ng7ConfirmComponent, Ng7ConfirmDirective],
                        entryComponents: [Ng7ConfirmComponent],
                        imports: [],
                        exports: [Ng7ConfirmDirective]
                    },] }
        ];
        return Ng7ConfirmModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Ng7ConfirmService = Ng7ConfirmService;
    exports.Ng7ConfirmComponent = Ng7ConfirmComponent;
    exports.Ng7ConfirmModule = Ng7ConfirmModule;
    exports.ɵa = Ng7ConfirmDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng7-confirm.umd.js.map