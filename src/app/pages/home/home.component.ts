import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(
    private document: DocumentService,
  ) { }

  tools: Array<any> = [
    {name: 'Embed code', icon: faCode, link: 'embed', description: 'Test your embedding codes'},
  ];

  ngOnInit(): void {
    this.document.setTitle('Select tool');
  }

}
