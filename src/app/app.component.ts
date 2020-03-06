import { Component, Renderer2, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'practicalTest';
  imageUrl = ['/assets/image1.png', '/assets/image2.png', '/assets/image3.png', '/assets/image4.png'];
  backgroundColors = ['#0C182A', '#492901', '#38001C', '#1C081C'];
  presentTab = 0;

  @ViewChild('imageDiv') imageDiv: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper') wrapper: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.switchImageAndBackgroundColor(0);
  }
  switchImageAndBackgroundColor(imageId: number, event?: Event) {
    const previousTab = this.presentTab;
    this.presentTab = imageId;
    this.renderer.setStyle(this.imageDiv.nativeElement, 'background-image', `url('${this.imageUrl[imageId]}')`);
    this.renderer.setStyle(this.wrapper.nativeElement, 'background-color', `${this.backgroundColors[imageId]}`);
    if (event) {
      if (previousTab > this.presentTab) {
        // this.renderer.
      }
    }
  }
}
