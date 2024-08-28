function changefun(){
    var val=document.getElementById("select").value;
     if (val=='sleep')
     {
        document.getElementById("Closes").innerHTML=("Uses Less Power") 
     }
    else if(val=='shut down')
    {
      document.getElementById("Closes").innerHTML="Closes all apps turns off the pc";
    }
    else if(val=='Switch user'){
      document.getElementById("Closes").innerHTML="Switch User Without Closing All Apps";
    }
    else if(val=='Restart'){
      document.getElementById("Closes").innerHTML="Close All Apps ,turn of the PC,and then Turn it On Again";
    }
    else if(val=='Sign out'){
      document.getElementById("Closes").innerHTML="Close All Apps and Signs You Out";
    }
      }









        