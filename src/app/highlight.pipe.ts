import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {


  constructor(private sanitizer: DomSanitizer) {

  }

  transform(value: string, name: string): any {

    if (name === 'Roanldo' || name === 'Neymer') {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:lightgreen">' + name + '</div>');
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:yellow">' + name + '</div>');
    }

  }

}
