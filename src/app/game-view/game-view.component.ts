import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Game } from './../game/game';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  @ViewChild('separator') _separator:ElementRef
  
  imgurl = 'https://openclipart.org/download/268262/Vintage-Decorative-Divider.svg';
  // imgurl = '/assets/separator.svg';

  game:Game = new Game()

  debby:string = ""
  
  constructor()
  {
  }

  ngOnInit() {
    this.game.start()
    this.game.onChange = () => this.scrollToSeparator()
  }

  ngAfterViewInit()
  {
    this.scrollToSeparator()
  }

  scrollToSeparator() {
    try {
      const o = this._separator.nativeElement;
      const d = o.y - innerHeight * .5 + o.height * .5;
      scrollBy( { top: d, behavior: "auto" } )
      // scrollBy( 0, d )
    } catch( e ) { }
  }

  // scrollToSeparatorSmooth() {
  //   try {
  //     const o = this._separator.nativeElement;
  //     const d = o.y - innerHeight * .5 + o.height * .5;
  //     scrollBy( { top: d, behavior: "smooth" } )
  //   } catch( e ) { }
  // }
}