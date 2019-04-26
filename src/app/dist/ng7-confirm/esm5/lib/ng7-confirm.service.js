/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var Ng7ConfirmService = /** @class */ (function () {
    function Ng7ConfirmService() {
        this._shouldContinue = new Subject();
    }
    Object.defineProperty(Ng7ConfirmService.prototype, "shouldContinue", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Ng7ConfirmService.ctorParameters = function () { return []; };
    /** @nocollapse */ Ng7ConfirmService.ngInjectableDef = i0.defineInjectable({ factory: function Ng7ConfirmService_Factory() { return new Ng7ConfirmService(); }, token: Ng7ConfirmService, providedIn: "root" });
    return Ng7ConfirmService;
}());
export { Ng7ConfirmService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Ng7ConfirmService.prototype._shouldContinue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc3LWNvbmZpcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nNy1jb25maXJtLyIsInNvdXJjZXMiOlsibGliL25nNy1jb25maXJtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFVRTtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQTJDLENBQUM7SUFDaEYsQ0FBQztJQU5ELHNCQUFJLDZDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLENBQUM7OztPQUFBOzs7OztJQU1NLG9DQUFROzs7O0lBQWYsVUFBZ0IsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVNLGtDQUFNOzs7O0lBQWIsVUFBYyxRQUFnQjtRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFMRDtDQXlCQyxBQXRCRCxJQXNCQztTQW5CWSxpQkFBaUI7Ozs7OztJQUM1Qiw0Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nN0NvbmZpcm1TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfc2hvdWxkQ29udGludWU6IFN1YmplY3Q8eyBkaWFsb2dJZDogc3RyaW5nOyBjb250aW51ZTogYm9vbGVhbiB9PjtcblxuICBnZXQgc2hvdWxkQ29udGludWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZENvbnRpbnVlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2hvdWxkQ29udGludWUgPSBuZXcgU3ViamVjdDx7IGRpYWxvZ0lkOiBzdHJpbmc7IGNvbnRpbnVlOiBib29sZWFuIH0+KCk7XG4gIH1cblxuICBwdWJsaWMgY29udGludWUoZGlhbG9nSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3VsZENvbnRpbnVlLm5leHQoeyBkaWFsb2dJZCwgY29udGludWU6IHRydWUgfSk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKGRpYWxvZ0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG91bGRDb250aW51ZS5uZXh0KHsgZGlhbG9nSWQsIGNvbnRpbnVlOiBmYWxzZSB9KTtcbiAgfVxuXG59XG4iXX0=