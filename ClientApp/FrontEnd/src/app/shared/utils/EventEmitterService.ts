import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class EventEmitterService {

    eventEmitter = new EventEmitter();
    subsVar: Subscription;

    constructor() {
    }

    updateMatHeader() {
        this.eventEmitter.emit();
    }
}