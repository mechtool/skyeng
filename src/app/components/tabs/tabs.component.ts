import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TabClass} from '../shared/TabClass';
import {ifTransition} from '../../animations/app-animations';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
    animations :[ifTransition] ,
    
})
export class TabsComponent  {

    public tabs : TabClass[] = [
        new TabClass({header : 'Заголовок 1', content : 'Содержимое 1', active : true}),
        new TabClass({header : 'Заголовок 2', content : 'Содержимое 2'}),
        new TabClass(),
    ];
    
    public animationTrigger = 0 ;
    @Output() public activatedTab : EventEmitter<any> = new EventEmitter();
    
    onActiveTab(inx){
        this.clearActive();
      this.tabs[inx].active = true;
      this.animationTrigger = Math.random();
    }
    
     onContextMenu(event){
          event.preventDefault();
          this.activatedTab.emit(event);
     }
     
     clearActive(){
         this.tabs.forEach(tab => {
             tab.active = false;
         }) ;
    }
    public addTab(){
       this.tabs.push(new TabClass()) ;
    }
    public deleteTab(inx){
        if(this.tabs.length){
            let active = this.tabs[inx].active ;
            this.tabs.splice(inx, 1);
            active && this.tabs.length  && this.onActiveTab(0);
        }

    }


}
