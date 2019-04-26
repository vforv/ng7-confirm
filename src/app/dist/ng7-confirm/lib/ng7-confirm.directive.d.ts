import { Renderer2, ViewContainerRef, ComponentFactoryResolver, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Ng7ConfirmService } from './ng7-confirm.service';
import { Subscription } from 'rxjs';
export declare class Ng7ConfirmDirective implements OnInit, OnDestroy {
    private viewContainerRef;
    private componentFactoryResolver;
    private render;
    private ng7ConfirmService;
    continue: string;
    cancel: string;
    question: string;
    title: string;
    onConfirm: EventEmitter<any>;
    onCancel: EventEmitter<any>;
    sub: Subscription;
    dialogId: string;
    constructor(viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, render: Renderer2, ng7ConfirmService: Ng7ConfirmService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    performTask(): void;
}
