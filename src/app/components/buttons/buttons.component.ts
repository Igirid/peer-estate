import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SignupForm } from "src/app/custom";

@Component({
    selector: 'app-nav-btn',
    template: `<a class="text-gray-400 text-xs rounded-md border border-gray-700 py-2 px-4 " [routerLink]="path" routerLinkActive="active" ariaCurrentWhenActive="page">{{content}}</a>`
})

export class NavBtnComponent {
    @Input() content!: string;
    @Input() path !: string;
}

@Component({
    selector: 'hero-btn',
    template: `<a class="text-gray-400 text-base rounded-md border border-gray-700 py-2.5 px-5" [routerLink]="path" routerLinkActive="active" ariaCurrentWhenActive="page">{{content}}</a>`
})

export class HeroBtnComponent {
    @Input() content!: string;
    @Input() path !: string;

}

@Component({
    selector: 'event-btn',
    template: `<button type="button" class="text-gray-400 text-base rounded-md border border-gray-700 py-1.5 px-5 " (click)="emitNewEvent()">{{content}}</button>`
})

export class EventBtnComponent {
    @Input() content!: string;
    @Output() newEvent = new EventEmitter()

    emitNewEvent() {
        this.newEvent.emit()
    }
}