import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: "striphtml"
})
export class Striphtml implements PipeTransform {

  transform(value: string): any {
    return value.replace(/<.*?>/g, '');
  }
}
