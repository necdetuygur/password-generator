import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor() {}

  public Generate(l: number, a: boolean, n: boolean, s: boolean) {
    let k = '';
    let o: string = '';
    a && (o += 'abcdefghijklmnopqrstuvwxyz');
    n && (o += '0123456789');
    s && (o += '!+-?_&@%');
    while (l--) {
      k += o[Math.floor(Math.random() * o.length)];
    }
    return k;
  }
}
