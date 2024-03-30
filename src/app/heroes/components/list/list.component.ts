import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Iron Man', 'Spider-man', 'Thor', 'Hulk', 'Black Widow'];
  public deletedHero?: string = '';

  removeLastHero(): void{
    this.deletedHero = this.heroeNames.pop();
    console.log(`Deleted hero: ${this.deletedHero}`);
  }
}
