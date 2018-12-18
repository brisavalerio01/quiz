/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore=(quest1score+quest2score+quest3score+quest4score);
        
        var quest1score= question1(q1Result);
        var quest2score= question2(q2Result);
        var quest3score= question3(q3Result);
        var quest4score= question4(q4Result);
        $(".result").html(totalScore);
    });
   
    
});

 function question1(answer){
        if (answer==="fire"){
        return  4;
    }else if (answer==="water"){
        return 3;
    }else if(answer==="earth"){
        return 2;
    }else if (answer==="air"){
        return 1;
    }
  }
  
  function question2(answer){
      if (answer ==="love"){
          return 4;
      }else if (answer==="money"){
          return 3;
      }else if(answer==="snacks"){
          return 2;
      }else if(answer==="phone"){
          return 1;
      }
  }
  
  function question3(answer){
      if(answer==="Bahamas"){
          return 4;
      }else if(answer==="Japan"){
          return 3;
      }else if(answer==="France"){
          return 2;
      }else if(answer==="Other"){
          return 1;
      }
  }
  
  function question4(answer){
      if(answer==="Gun"){
          return 4;
      }else if(answer==="Sword"){
          return 3;
      }else if(answer==="Bombs"){
          return 2;
      }else if(answer==="Poision"){
          return 1;
      }
  }
  