import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todos';
  todos = [ 
    {  
    label: 'Bring Milk',
    done: false,
    priority: 3
    },
    {  
    label: 'Pay mobile bill',
    done: true,
    priority: 1
    },
    {  
    label: 'Clean house',
    done: false,
    priority: 4
    },
    {  
    label: 'Fix the bulb',
    done: false,
    priority: 5
    }
  ];
}
