import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-basic-demo',
  template: `
    <p>
      ...and the basic-demo works!
    </p>
  `,
  styles: [
  ]
})
export class BasicDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
