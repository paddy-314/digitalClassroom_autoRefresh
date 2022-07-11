function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }
 
var roomClosed = true;
while (roomClosed) {
    var button = $("div.run-container").children("button")
    if (typeof button !== 'undefined' && button.attr('disabled') == 'disabled') {
        console.log("not open yet, refreshing");
        $("#main-content").load(window.location.href + " #main-content > *", "");
        await Sleep(1000);
    }
      else if (typeof button == 'object'){
        var speak = new SpeechSynthesisUtterance("Der Raum ist offen, es geht los!");
        speak.lang = "de-DE";
        speechSynthesis.speak(speak);
        roomClosed = false;
        window.location.reload();
    }
}
