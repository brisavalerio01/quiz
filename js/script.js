/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
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
      if (answer ==="your love"){
          return 4;
      }else if (answer==="your money"){
          return 3;
      }else if(answer==="your snacks"){
          return 2;
      }else if(answer==="your phone"){
          return 1;
      }
  }
  
  function question3(answer){
      if(answer===""){
          return 4;
      }else if(answer===""){
          return 3;
      }else if(answer===""){
          return 2;
      }else if(answer===""){
          return 1;
      }
  }
  
  function question4(answer){
      if(answer===""){
          return 4;
      }else if(answer===""){
          return 3;
      }else if(answer===""){
          return 2;
      }else if(answer===""){
          return 1;
      }
  }
  