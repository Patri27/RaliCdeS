import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rcsTextarea]'
})
export class TextareaDirective {
  @HostListener('paste', ['$event'])
  onPaste(event) {
    this.autoExpand();
  }

  @HostListener('input', ['$event'])
  onInput(event) {
    this.autoExpand();
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event) {
    this.autoExpand();
  }

  constructor(private element: ElementRef) { }

  autoExpand() {
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height =
      this.element.nativeElement.scrollHeight + 'px';
  }
}
