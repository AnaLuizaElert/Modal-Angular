import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('mural', {static: true})
  modal: ElementRef<HTMLParagraphElement>;

  verifyModalFlora
  verifyModalFauna
  verifyModalConcept
  img_amazonia
  
  ngOnInit(): void {
    this.verifyModalFlora = false;
    this.verifyModalFauna = false;
    this.verifyModalConcept = false;
    this.img_amazonia = false;
  }

}
