import { Component, OnInit } from '@angular/core';
import { updateFontSize } from '../app.component';


@Component({
	selector: 'my-header',
	templateUrl: 'my-header.html',
    
})

export class MyHeader implements OnInit{
    constructor(){

    }

    actualURL:string = document.location.pathname

    ngOnInit(){

    }

    changeToHome(){
        document.location.href = '/'
        this.actualURL = '/'
    }

    changeToAdverts(){
        document.location.href = '/adverts'
        this.actualURL = '/adverts'
    }

    changeToAboutus(){
        document.location.href = '/aboutus'
        this.actualURL = '/aboutus'
    }

    incrementFont(){
        let fontSize:number = Number(localStorage.getItem('fontSize'))

        if(fontSize < 22){
            localStorage.setItem('fontSize', `${fontSize + 2}`)
            updateFontSize()
        }
    }

    resetFont(){
        localStorage.setItem('fontSize', `${16}`)
        updateFontSize()
    }

    decrementFont(){
        let fontSize:number = Number(localStorage.getItem('fontSize'))

        if(fontSize > 10){
            localStorage.setItem('fontSize', `${fontSize - 2}`)
            updateFontSize()
        }
    }
}
