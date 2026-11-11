import { Component, signal } from '@angular/core';

@Component({
    templateUrl: './counter.html',
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `,
})
export class CounterComponent {
    counter = 10;
    counterSignal = signal(10);

    incremento(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }

    decremento(value: number) {
        this.counter -= value;
        this.counterSignal.update((current) => current - value);
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}