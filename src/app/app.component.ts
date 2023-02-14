import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangularproject';
  imgUrl:string ="../assets/logo.png"
  url:string = "https://www.bridgelabz.com";
  userName: string =""; 
  nameError:string="";
  
ngOnInit(): void{
   this.title="Hello From BridgeLabz !!!";
}

clickEvent(event:any){
  console.log("Clicked on bridgelabz logo! ",event);
  window.open(this.url,"_blank");
}
onInput($event:any){
  console.log("Change Event occured!!",$event.data);
  const nameRegex=RegExp('^[A-Z][a-z]{2,}$');
  if(nameRegex.test(this.userName))
  {
    this.nameError ="";
    return;
  }
  else{
    this.nameError="UserName is Incorrect!";
  }
}
}
