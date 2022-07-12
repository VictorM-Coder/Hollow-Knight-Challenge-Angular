import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'section-aboutus',
	templateUrl: './section-aboutus.html'
})

export class SectionAboutus implements OnInit{
    constructor(){

    }

    ngOnInit(): void {
        
    }

    goToTeamCherry(){
        window.open('https://www.teamcherry.com.au', '_blank');
    }

    goToLead(){
        window.open('https://leadfortaleza.com.br', '_blank');
    }
}
