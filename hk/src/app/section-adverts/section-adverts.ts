import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'section-adverts',
	templateUrl: './section-adverts.html'
})

export class SectionAdverts implements OnInit{
    constructor(){

    }

    ngOnInit(): void {
        
    }

    goToDiscord(){
        window.open('https://discord.com/invite/hollowknight', '_blank');
    }
}
