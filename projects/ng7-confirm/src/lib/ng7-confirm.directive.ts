import { Directive, ElementRef, Renderer2, HostListener, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, OnInit, OnDestroy, Input } from '@angular/core';
import { Ng7ConfirmComponent } from './ng7-confirm.component';
import { Ng7ConfirmService } from './ng7-confirm.service';
import { Subscription } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Directive({
  selector: '[ng7Confirm]'
})
export class Ng7ConfirmDirective implements OnInit, OnDestroy {
  @Input() continue: string = 'Continue';
  @Input() cancel: string = 'Cancel';
  @Input() question: string = 'Are you sure you want to continue execution?';
  @Input() title: string = 'Confirm Dialog';
  @Output() onConfirm: EventEmitter<any>;
  @Output() onCancel: EventEmitter<any>;
  public sub: Subscription;
  public dialogId: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private render: Renderer2,
    private ng7ConfirmService: Ng7ConfirmService
  ) {
    this.onConfirm = new EventEmitter();
    this.onCancel = new EventEmitter();
    this.dialogId = uuid();
  }

  ngOnInit() {
    this.sub = this.ng7ConfirmService.shouldContinue
      .subscribe((data: { dialogId: string; continue: boolean }) => {
        if (!data.continue && data.dialogId === this.dialogId) {
          this.onCancel.emit();
        } else if (data.continue && data.dialogId === this.dialogId) {
          this.onConfirm.emit();
        }
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  @HostListener('click')
  public performTask() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      Ng7ConfirmComponent,
    );
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
