import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer-component',
  templateUrl: './sizer-component.component.html',
  styleUrls: ['./sizer-component.component.css']
})
export class SizerComponentComponent implements OnInit {

  @Input() size! :number | string;
  
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  resize(resizeSize: number)
  {
    this.size = Math.min(40, Math.max(8, +this.size + resizeSize))
    this.sizeChange.emit(this.size);
  }

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

}
