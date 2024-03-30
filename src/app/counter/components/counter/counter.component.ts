import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    increaseOne(): void {
        this.counter += 1;
    }

    increaseByNumber( value: number ): void {
        this.counter -= value;
    }

    decreaseOne(): void {
        this.counter -= 1;
    }

    decreaseByNumber( value: number ): void {
        this.counter -= value;
    }

    reset(): void {
        this.counter = 10;
    }

}