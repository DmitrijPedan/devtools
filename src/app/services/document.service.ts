import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  constructor(
    @Inject(DOCUMENT) private doc: any,
    private title: Title,
  ) { }

  setTitle(title: string): void {
    this.title.setTitle('DevTools | ' + title);
  }

}
