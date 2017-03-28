/**
 * Created by sislex on 2/19/17.
 */

import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective{

    constructor(private element: ElementRef, private renderer: Renderer){

        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    }
}