import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeReader',
})
export class SizeReaderPipe implements PipeTransform {
  transform(value: number): string {
    const size =
      value >= 1048576
        ? (value / 1048576).toFixed(1) + ' Mb'
        : value < 1048576 && value >= 1024
        ? (value / 1024).toFixed(1) + ' Kb'
        : value + ' B';
    return size;
  }
}
