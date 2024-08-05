import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { User } from './models/user.model';
import { Credentials } from './models/userCredencial';


@Component({
  selector: 'app-root', //nombre del componente 
  standalone: true, // si queremos usar otros componentes para este componente
  imports: [RouterOutlet],// el import para el componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-introduction';


  constructor(private router: Router) { }

  state = false;

  user = {
    username:'',
    password:'',
  }


  public redirectToList() {
    this.router.navigate(['/list']);
  }

  public onChange =(e:Event) => {
    e.preventDefault();
    const target = e.target
    if(target instanceof HTMLInputElement){
      if (target.name === 'name') {
        this.user.username = target.value;
      } else if (target.name === 'password') {
        this.user.password = target.value;
      }
    }
  }

  public onSubmit = () => {
    this.evaluateCredentials(this.user);
    console.log('Form submitted. State:', this.state);
  }

  public evaluateCredentials(parrams:Credentials):boolean{
    
    if(parrams.username === 'Admin' && parrams.password === 'password'){
      return this.state = true;
    }
    return this.state;
  }
  

  users: User[] = [
    {
      id:1,
      name: 'Juan',
      age: 25,
      hobbies:[
        {id: 1, name: 'Jugar Video Juegos'},
        {id: 2, name: 'Nadar'},
        {id: 3, name: 'VOley'},
      ],
      address:{
        street: 'Piñera',
        city: 'Ranoa',
        state:'Ranoa'
      },
      friends:[
        {
          id:1,
          name: 'Pedro',
          age: 28,
        }
      ]
    },
    {
      id:2,
      name: 'Ana',
      age: 30,
      hobbies:[
        {id: 1, name: 'Jugar Video Juegos'},
        {id: 2, name: 'Leer'},
        {id: 3, name: 'Baile'}
      ],
      address:{
        street: 'Av. Siempre Viva',
        city: 'Ranoa',
        state:'Ranoa'
      },
      friends:[
        {
          id:1,
          name: 'Juan',
          age: 25,
        }
      ]
    },
    {
      id:3,
      name: 'Maria',
      age: 35,
      hobbies:[
        {id: 1, name: 'Jugar Video Juegos'},
        {id: 2, name: 'Caminar'},
        {id: 3, name: 'Escribir'}
      ],
      address:{
        street: 'Calle 123',
        city: 'Ranoa',
        state:'Ranoa'
      },
      friends:[
        {
          id:1,
          name: 'Juan',
          age: 25,
        }
      ]
    }
  ];

}
