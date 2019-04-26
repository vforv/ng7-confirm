/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, HostListener, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, Input } from '@angular/core';
import { Ng7ConfirmComponent } from './ng7-confirm.component';
import { Ng7ConfirmService } from './ng7-confirm.service';
import { v4 as uuid } from 'uuid';
export class Ng7ConfirmDirective {
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
        this.dialogId = uuid();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc3LWNvbmZpcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc3LWNvbmZpcm0vIiwic291cmNlcyI6WyJsaWIvbmc3LWNvbmZpcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFNBQVMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNLLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS2xDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFVOUIsWUFDVSxnQkFBa0MsRUFDbEMsd0JBQWtELEVBQ2xELE1BQWlCLEVBQ2pCLGlCQUFvQztRQUhwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYnJDLGFBQVEsR0FBVyxVQUFVLENBQUM7UUFDOUIsV0FBTSxHQUFXLFFBQVEsQ0FBQztRQUMxQixhQUFRLEdBQVcsOENBQThDLENBQUM7UUFDbEUsVUFBSyxHQUFXLGdCQUFnQixDQUFDO1FBWXhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWM7YUFDN0MsU0FBUzs7OztRQUFDLENBQUMsSUFBNkMsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBR00sV0FBVzs7Y0FDVixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQzVFLG1CQUFtQixDQUNwQjs7Y0FDSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFSd0QsZ0JBQWdCO1lBQUUsd0JBQXdCO1lBQW5FLFNBQVM7WUFFaEMsaUJBQWlCOzs7dUJBUXZCLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsTUFBTTt1QkFDTixNQUFNOzBCQWdDTixZQUFZLFNBQUMsT0FBTzs7OztJQXJDckIsdUNBQXVDOztJQUN2QyxxQ0FBbUM7O0lBQ25DLHVDQUEyRTs7SUFDM0Usb0NBQTBDOztJQUMxQyx3Q0FBdUM7O0lBQ3ZDLHVDQUFzQzs7SUFDdEMsa0NBQXlCOztJQUN6Qix1Q0FBd0I7Ozs7O0lBR3RCLCtDQUEwQzs7Ozs7SUFDMUMsdURBQTBEOzs7OztJQUMxRCxxQ0FBeUI7Ozs7O0lBQ3pCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmc3Q29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbmc3LWNvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nN0NvbmZpcm1TZXJ2aWNlIH0gZnJvbSAnLi9uZzctY29uZmlybS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmc3Q29uZmlybV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nN0NvbmZpcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbnRpbnVlOiBzdHJpbmcgPSAnQ29udGludWUnO1xuICBASW5wdXQoKSBjYW5jZWw6IHN0cmluZyA9ICdDYW5jZWwnO1xuICBASW5wdXQoKSBxdWVzdGlvbjogc3RyaW5nID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjb250aW51ZSBleGVjdXRpb24/JztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICdDb25maXJtIERpYWxvZyc7XG4gIEBPdXRwdXQoKSBvbkNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBwdWJsaWMgc3ViOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBkaWFsb2dJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZzdDb25maXJtU2VydmljZTogTmc3Q29uZmlybVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5vbkNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5vbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLmRpYWxvZ0lkID0gdXVpZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLm5nN0NvbmZpcm1TZXJ2aWNlLnNob3VsZENvbnRpbnVlXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiB7IGRpYWxvZ0lkOiBzdHJpbmc7IGNvbnRpbnVlOiBib29sZWFuIH0pID0+IHtcbiAgICAgICAgaWYgKCFkYXRhLmNvbnRpbnVlICYmIGRhdGEuZGlhbG9nSWQgPT09IHRoaXMuZGlhbG9nSWQpIHtcbiAgICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNvbnRpbnVlICYmIGRhdGEuZGlhbG9nSWQgPT09IHRoaXMuZGlhbG9nSWQpIHtcbiAgICAgICAgICB0aGlzLm9uQ29uZmlybS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIHBlcmZvcm1UYXNrKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIE5nN0NvbmZpcm1Db21wb25lbnQsXG4gICAgKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UpLmRhdGEgPSB7XG4gICAgICBjb250aW51ZTogdGhpcy5jb250aW51ZSxcbiAgICAgIGNhbmNlbDogdGhpcy5jYW5jZWwsXG4gICAgICBxdWVzdGlvbjogdGhpcy5xdWVzdGlvbixcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZGlhbG9nSWQ6IHRoaXMuZGlhbG9nSWRcbiAgICB9O1xuICAgIHRoaXMucmVuZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG59XG4iXX0=