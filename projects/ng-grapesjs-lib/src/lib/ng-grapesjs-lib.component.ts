import { Component, OnInit } from '@angular/core';
import * as grapesjs from 'grapesjs';



@Component({
  selector: 'ng-grapesjs-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class NgGrapesjsLibComponent implements OnInit {

  constructor() { }

  editor: any;

  ngOnInit() {
  }

  initEditor(): void {
    this.editor = grapesjs.init({
      container: '#gjs',
      components: "",
    });
  }

}
