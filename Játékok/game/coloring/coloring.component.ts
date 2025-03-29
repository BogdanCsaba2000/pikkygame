// import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { routes } from '../../app.routes';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-coloring',
//   standalone: true,
//   imports: [
    
//     RouterModule,
//   FormsModule],

  
//   templateUrl: './coloring.component.html',
//   styleUrl: './coloring.component.css'
// })
// export class ColoringComponent {

//   colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'black'];
//   selectedColor = 'black';
//   canvas = Array(100).fill('white');

//   selectColor(color: string) {
//     this.selectedColor = color;
//   }

//   paintCell(index: number) {
//     this.canvas[index] = this.selectedColor;
//   }

//   clearCanvas() {
//     this.canvas = Array(100).fill('white');
//   }
//   loadImage() {
//     if (!this.ctx) return;

//     const image = new Image();
//     image.src = 'https://example.com/sample-coloring-image.png'; // Cseréld ki saját képre
//     image.crossOrigin = 'anonymous'; // Ha külső szerverről töltesz be

//     image.onload = () => {
//       this.ctx!.drawImage(image, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
//     };
// }}

  

