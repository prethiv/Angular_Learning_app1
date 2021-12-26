import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allownewserver=false;
  serverCreationStatus="No Server Was Created";
  serverName="";

  constructor() {

    setTimeout(()=>{
      this.allownewserver=true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='Server was Created!!!';
  }

  onUpdateServerName(event:Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}
