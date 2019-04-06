import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import { MatMenuTrigger} from '@angular/material';
import {TabsComponent} from './components/tabs/tabs.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
    changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit{
    
    public setLabels;
    public selectedIndex;
    public tabs = [
        {label : 'Заголовок 1', content : 'Содержимое 1'},
        {label : 'Заголовок 2', content : 'Содержимое 2'},
        {label : 'Заголовок 3', content : 'Содержимое 3'},
    ];
    
    @ViewChild('menuTrigger', {read : MatMenuTrigger}) public menuTrigger : MatMenuTrigger;
    @ViewChild('secondMenuTrigger', {read : MatMenuTrigger}) public secondMenuTrigger : MatMenuTrigger;
    @ViewChild(TabsComponent) public appTabs : TabsComponent;
    
    
    constructor(public changeRef : ChangeDetectorRef){
        let that = this;
           this.setLabels = function() {
               document.querySelectorAll('div.mat-tab-label').forEach((tab)=>{
                   tab.addEventListener('contextmenu', (event : MouseEvent)=>{
                       that.menuTrigger.openMenu();
                       that.setPanel(event);
                       event.preventDefault();
                   })
               });
               
           }
    }
    
    ngAfterViewInit(){
        this.setLabels();
    }
    
    setPanel(event){
        let panel = document.querySelector('div.mat-menu-panel') as HTMLElement;
        panel.style.left = event.clientX + 'px';
        panel.style.top = '0px';/*event.clientY + 'px';*/
        panel.dataset.tab = (event.currentTarget as HTMLElement).id.substr(-1 , 1);
    }
    
    deleteTab(){
        let panel = document.querySelector('div.mat-menu-panel') as HTMLElement;
        this.tabs.splice(+panel.dataset.tab, 1)  ;
        this.selectedIndex = 0;
        this.changeRef.detectChanges();
    }
    addTab(){
        this.tabs.splice(this.tabs.length , 0, {label : `ЗАГОЛОВОК ${this.tabs.length + 1}`, content : `Содержимое ${this.tabs.length + 1 }`})  ;
        this.changeRef.detectChanges();
        this.setLabels();
    }
    
    onActiveTab(event){
       this.secondMenuTrigger.openMenu();
       this.setPanel(event) ;
    }
    
    deleteSecondTab(){
        let panel = document.querySelector('div.mat-menu-panel') as HTMLElement;
        this.appTabs.deleteTab(panel.dataset.tab ? +panel.dataset.tab : 0);
    }
    addSecondTab(){
      this.appTabs.addTab();
    }
}

