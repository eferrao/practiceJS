$(document).ready(function(){
    $(".hello").text()

    $("#userName").focus();
});

    //If user hits enter, execute function entryReel
    $('#userName').keypress(function (e) {
        var key = e.which;
     if(key == 13)  // the enter key code
      {
        entryReel();
      }
    });   


    //If user hits submit, execute function entryReel
    $("#userNameButton").click(function(event){
        entryReel();
    })


    function entryReel(){
        $(".1helloPg").show();
        $(".1enterName").hide();

        var userName = $('input#userName').val();

        $(".element").typed({
            strings: ["Welcome "+userName, 
            "Let's make your scarcest resource stretch further", 
            "No, not money.",
            "TIME",
            "Let me get some info first:"],
            typeSpeed: 30,
            contentType: 'text', 
            showCursor: true,
            cursorChar: '|'
        });
    }

