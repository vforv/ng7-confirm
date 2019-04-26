export declare class Ng7ConfirmService {
    private _shouldContinue;
    readonly shouldContinue: import("rxjs").Observable<{
        dialogId: string;
        continue: boolean;
    }>;
    constructor();
    continue(dialogId: string): void;
    cancel(dialogId: string): void;
}
