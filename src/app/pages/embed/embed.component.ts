import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-embed-page',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.scss']
})

export class EmbedPageComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private document: DocumentService,
  ) { }

  public inputValue!: string;
  public html!: SafeHtml;
  public containerWidth = 1200;
  public containerPadding = true;
  public containerBackground = '#ffffff';
  public embedBorder = false;
  public embedCenter = false;

  ngOnInit(): void {
    this.document.setTitle('Embed codes');
  }

  insert(): void {
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.inputValue);
  }

  clear(): void {
    this.inputValue = '';
  }
}
