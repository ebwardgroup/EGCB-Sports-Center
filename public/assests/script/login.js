$("#Create").on("click", function(){
  window.location.href="/userquestions";
})

$("#loginbutton").on("click", function(){
    event.preventDefault();
    event.stopPropagation();
    let logincheck = {
        UserID: $("#Username").val().trim(),
        UserPassword: $("#Password").val().trim()
    };
    
    console.log(logincheck);


    $.ajax("/api/login/", {
        type: "GET",
        data: logincheck
      }).then(function(res) {
        console.log(res);
        window.location.href="/sportscenter/"+res;
        // let LoginTrueFalse = responce.body;
          
        // if (LoginTrueFalse === true){    
        //  $.ajax("/sportscenter", {
        //      type: "GET"             
        //      }).then(function(res){
        //  res.sendFile(path.join(__dirname,"../public/sportscenter.html"));
        // });
        // }
        // else{
        // $("#Successorfail").html("Wrong password or user name!");
        // }
        });

});

