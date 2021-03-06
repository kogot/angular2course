import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective{
    
    constructor(private el: ElementRef, private render:Renderer){
    }
    
    
    onFocus(){
        this.render.setElementStyle(this.el.nativeElement,'width', '300px')
        console.log("onfocus");
    }

    onBlur(){
        this.render.setElementStyle(this.el.nativeElement,'width', '120px')
        console.log("onblur");
    }
    


}