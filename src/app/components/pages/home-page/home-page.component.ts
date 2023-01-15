import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  // Orden del ciclo de vida de los componentes
  //* == Mas importantes/habituales
  //*1. ngOnChanges               - Se ejecuta cada vez que haya un cambio y se re-renderice el componente
  //*2. ngOnInint                 - Se ejecuta justo antes de renderizar el componente
  // 3. ngAfterContentInit
  // 4. ngAfterContentChecked
  // 5. ngAfterViewInit
  // 6. ngAfterViewChecked
  // 7. ngAfterContentChecked
  // 8. ngAfterViewChecked
  //*9. ngOnDestroy               - Se ejecuta despues que desaparece el componente
  }
}
