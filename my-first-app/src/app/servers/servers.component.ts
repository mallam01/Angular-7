import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = "No Server was created!";
  serverName = "";
  serverNameStatus = false;
  serversList = ['server1' , 'server2', 'server3'];

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverNameStatus = true;
    this.serversList.push(this.serverName);
    this.serverCreationStatus= "Server was created, this is server name : " + this.serverName ;
  }

  onUpdateServerName(event: any){
    console.log(event);
  }
}
