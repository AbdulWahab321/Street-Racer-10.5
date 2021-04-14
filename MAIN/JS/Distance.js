class Player {
    constructor(){
      this.index = null;
      
     
      this.name = null;
    }
  


  

    getDistance(){
        var contestantCountRef = database.ref('player/distance');
        contestantCountRef.on("value",(data)=>{
          distance = data.val();
          
        })
      }

   getName(){
        var contestantCountRef = database.ref("Player's");
        var name=input.value();
        contestantCountRef.on("value",(data)=>{
         playerNames = data.val();
        })
    }
    
 

  updateName(){
    var GmDetecter=inputGmail.value();
     nameName=input.value(); 

     
      var playerIndex=" Player's/player"+" "+input.value();
      database.ref(playerIndex).set({
          name:nameName,
          Gmail:GmDetecter
      })
      

  }
  updateBugs(){
    nameName=input.value(); 
     var playerIndex=" Player's/player"+" "+input.value()+" "+"Bugs"
     database.ref(playerIndex).set({
         BugOrSuggestions:input1.value()
         
     })
     

 }


  

  }