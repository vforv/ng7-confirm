import { OnInit, ElementRef } from '@angular/core';
import { Ng7ConfirmService } from './ng7-confirm.service';
export declare class Ng7ConfirmComponent implements OnInit {
    private ng7ConfirmService;
    private elRef;
    data: {
        continue: string;
        cancel: string;
        question: string;
        title: string;
        dialogId: string;
    };
    constructor(ng7ConfirmService: Ng7ConfirmService, elRef: ElementRef);
    ngOnInit(): void;
    continue(): void;
    cancel(): void;
}
