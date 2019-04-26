/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class Ng7ConfirmService {
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
/** @nocollapse */ Ng7ConfirmService.ngInjectableDef = i0.defineInjectable({ factory: function Ng7ConfirmService_Factory() { return new Ng7ConfirmService(); }, token: Ng7ConfirmService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmService.prototype._shouldContinue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc3LWNvbmZpcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nNy1jb25maXJtLyIsInNvdXJjZXMiOlsibGliL25nNy1jb25maXJtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLGlCQUFpQjtJQU81QjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQTJDLENBQUM7SUFDaEYsQ0FBQzs7OztJQU5ELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFNTSxRQUFRLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsUUFBZ0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLDRDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmc3Q29uZmlybVNlcnZpY2Uge1xuICBwcml2YXRlIF9zaG91bGRDb250aW51ZTogU3ViamVjdDx7IGRpYWxvZ0lkOiBzdHJpbmc7IGNvbnRpbnVlOiBib29sZWFuIH0+O1xuXG4gIGdldCBzaG91bGRDb250aW51ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkQ29udGludWUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zaG91bGRDb250aW51ZSA9IG5ldyBTdWJqZWN0PHsgZGlhbG9nSWQ6IHN0cmluZzsgY29udGludWU6IGJvb2xlYW4gfT4oKTtcbiAgfVxuXG4gIHB1YmxpYyBjb250aW51ZShkaWFsb2dJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2hvdWxkQ29udGludWUubmV4dCh7IGRpYWxvZ0lkLCBjb250aW51ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWwoZGlhbG9nSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3VsZENvbnRpbnVlLm5leHQoeyBkaWFsb2dJZCwgY29udGludWU6IGZhbHNlIH0pO1xuICB9XG5cbn1cbiJdfQ==