import { NgFor } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [NgFor],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent  {

  constructor(private cdr: ChangeDetectorRef){}
 
  imageUrls :
  string[]= [
    "img/mozodny.jpg",
    "img/lionpuzzle.jpg"
  ];

  puzzlePieces: any[] = [];
  gridSize: number = 3;
  pieceSize: number = 100;
  draggingPiece: any = null;
  offsetX: number = 0;
  offsetY: number = 0;

  imageUrl: string ='';

  ngAfterViewInit() {
    this.imageUrl = this.getRandomImage();
    this.initializePuzzle();
    this.cdr.detectChanges();
    
  }
  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    return this.imageUrls[randomIndex];}

  initializePuzzle() {
    this.puzzlePieces = [];
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        this.puzzlePieces.push({
          x: col * this.pieceSize,
          y: row * this.pieceSize,
          correctX: col * this.pieceSize,
          correctY: row * this.pieceSize,
          size: this.pieceSize + 'px',
          position: `-${col * this.pieceSize}px -${row * this.pieceSize}px`
        });
      }
    }
    this.shufflePieces();
  }

  shufflePieces() {
    this.puzzlePieces.forEach(piece => {
      piece.x = Math.random() * (this.gridSize * this.pieceSize - this.pieceSize);
      piece.y = Math.random() * (this.gridSize * this.pieceSize - this.pieceSize);
    });
  }

  startDrag(event: MouseEvent, piece: any) {
    this.draggingPiece = piece;
    this.offsetX = event.clientX - piece.x;
    this.offsetY = event.clientY - piece.y;
    document.addEventListener('mousemove', this.dragPiece.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  dragPiece(event: MouseEvent) {
    if (!this.draggingPiece) return;
    this.draggingPiece.x = event.clientX - this.offsetX;
    this.draggingPiece.y = event.clientY - this.offsetY;
  }

  stopDrag() {
    document.removeEventListener('mousemove', this.dragPiece.bind(this));
    document.removeEventListener('mouseup', this.stopDrag.bind(this));
    this.draggingPiece = null;
  }

  checkSolution() {
    const isCorrect = this.puzzlePieces.every(piece => 
      Math.abs(piece.x - piece.correctX) < 10 && Math.abs(piece.y - piece.correctY) < 10);
    if (isCorrect) alert('Gratulálok! A puzzle kész!');
  }
}


