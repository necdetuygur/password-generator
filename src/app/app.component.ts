import { Component } from '@angular/core';
import { GeneratorService } from './services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private generatorService: GeneratorService) {}
  parola: string = '';
  uzunluk: number = 6;
  tips = {
    alfabe: false,
    sayi: false,
    sembol: false,
  };

  uzunlukChange(e: any) {
    this.uzunluk = e.target.value * 1;
  }

  chChange(e: any) {
    (this.tips as any)[e.target.value] = e.target.checked;
  }

  olusturBtnClick() {
    this.parola = this.generatorService.Generate(
      this.uzunluk,
      this.tips.alfabe,
      this.tips.sayi,
      this.tips.sembol
    );
  }
}
