import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'section-home',
	templateUrl: './section-home.html'
})

export class SectionHome implements OnInit{
    
    constructor(){

    }

    ngOnInit(): void {
        
    }

    goToSteam(){
        window.open('https://store.steampowered.com/app/367520/Hollow_Knight/', '_blank');
    }
}
