/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, HostListener, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, Input } from '@angular/core';
import { Ng7ConfirmComponent } from './ng7-confirm.component';
import { Ng7ConfirmService } from './ng7-confirm.service';
import { v4 as uuid } from 'uuid';
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
        this.onConfirm = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.dialogId = uuid();
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
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
        { type: Directive, args: [{
                    selector: '[ng7Confirm]'
                },] }
    ];
    /** @nocollapse */
    Ng7ConfirmDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: Ng7ConfirmService }
    ]; };
    Ng7ConfirmDirective.propDecorators = {
        continue: [{ type: Input }],
        cancel: [{ type: Input }],
        question: [{ type: Input }],
        title: [{ type: Input }],
        onConfirm: [{ type: Output }],
        onCancel: [{ type: Output }],
        performTask: [{ type: HostListener, args: ['click',] }]
    };
    return Ng7ConfirmDirective;
}());
export { Ng7ConfirmDirective };
if (false) {
    /** @type {?} */
    Ng7ConfirmDirective.prototype.continue;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.cancel;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.question;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.title;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.onConfirm;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.onCancel;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.sub;
    /** @type {?} */
    Ng7ConfirmDirective.prototype.dialogId;
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmDirective.prototype.render;
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmDirective.prototype.ng7ConfirmService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc3LWNvbmZpcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc3LWNvbmZpcm0vIiwic291cmNlcyI6WyJsaWIvbmc3LWNvbmZpcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFNBQVMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNLLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBYUUsNkJBQ1UsZ0JBQWtDLEVBQ2xDLHdCQUFrRCxFQUNsRCxNQUFpQixFQUNqQixpQkFBb0M7UUFIcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWJyQyxhQUFRLEdBQVcsVUFBVSxDQUFDO1FBQzlCLFdBQU0sR0FBVyxRQUFRLENBQUM7UUFDMUIsYUFBUSxHQUFXLDhDQUE4QyxDQUFDO1FBQ2xFLFVBQUssR0FBVyxnQkFBZ0IsQ0FBQztRQVl4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYzthQUM3QyxTQUFTOzs7O1FBQUMsVUFBQyxJQUE2QztZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBR00seUNBQVc7OztJQURsQjs7WUFFUSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQzVFLG1CQUFtQixDQUNwQjs7WUFDSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVJ3RCxnQkFBZ0I7Z0JBQUUsd0JBQXdCO2dCQUFuRSxTQUFTO2dCQUVoQyxpQkFBaUI7OzsyQkFRdkIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxNQUFNOzJCQUNOLE1BQU07OEJBZ0NOLFlBQVksU0FBQyxPQUFPOztJQWdCdkIsMEJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXREWSxtQkFBbUI7OztJQUM5Qix1Q0FBdUM7O0lBQ3ZDLHFDQUFtQzs7SUFDbkMsdUNBQTJFOztJQUMzRSxvQ0FBMEM7O0lBQzFDLHdDQUF1Qzs7SUFDdkMsdUNBQXNDOztJQUN0QyxrQ0FBeUI7O0lBQ3pCLHVDQUF3Qjs7Ozs7SUFHdEIsK0NBQTBDOzs7OztJQUMxQyx1REFBMEQ7Ozs7O0lBQzFELHFDQUF5Qjs7Ozs7SUFDekIsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzdDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9uZzctY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmc3Q29uZmlybVNlcnZpY2UgfSBmcm9tICcuL25nNy1jb25maXJtLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZzdDb25maXJtXSdcbn0pXG5leHBvcnQgY2xhc3MgTmc3Q29uZmlybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY29udGludWU6IHN0cmluZyA9ICdDb250aW51ZSc7XG4gIEBJbnB1dCgpIGNhbmNlbDogc3RyaW5nID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIHF1ZXN0aW9uOiBzdHJpbmcgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNvbnRpbnVlIGV4ZWN1dGlvbj8nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ0NvbmZpcm0gRGlhbG9nJztcbiAgQE91dHB1dCgpIG9uQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT47XG4gIHB1YmxpYyBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGRpYWxvZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nN0NvbmZpcm1TZXJ2aWNlOiBOZzdDb25maXJtU2VydmljZVxuICApIHtcbiAgICB0aGlzLm9uQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLm9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMuZGlhbG9nSWQgPSB1dWlkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMubmc3Q29uZmlybVNlcnZpY2Uuc2hvdWxkQ29udGludWVcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHsgZGlhbG9nSWQ6IHN0cmluZzsgY29udGludWU6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEuY29udGludWUgJiYgZGF0YS5kaWFsb2dJZCA9PT0gdGhpcy5kaWFsb2dJZCkge1xuICAgICAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY29udGludWUgJiYgZGF0YS5kaWFsb2dJZCA9PT0gdGhpcy5kaWFsb2dJZCkge1xuICAgICAgICAgIHRoaXMub25Db25maXJtLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgcGVyZm9ybVRhc2soKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgTmc3Q29uZmlybUNvbXBvbmVudCxcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHtcbiAgICAgIGNvbnRpbnVlOiB0aGlzLmNvbnRpbnVlLFxuICAgICAgY2FuY2VsOiB0aGlzLmNhbmNlbCxcbiAgICAgIHF1ZXN0aW9uOiB0aGlzLnF1ZXN0aW9uLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkaWFsb2dJZDogdGhpcy5kaWFsb2dJZFxuICAgIH07XG4gICAgdGhpcy5yZW5kZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbn1cbiJdfQ==