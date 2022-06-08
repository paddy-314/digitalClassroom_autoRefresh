function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }
 
var roomClosed = true;
while (roomClosed) {
    var attr = $("div.run-container").children("button").attr('disabled');
    $("div.run-container").attr("id", "containerId")
    var id = $("div.run-container").children("button").attr('id');
    if (typeof attr !== 'undefined' && attr !== false) {
        console.log("not open yet, refreshing");
        $("#main-content").load(window.location.href + " #main-content > *", "");
        await Sleep(1000);
    }
    else {
        var speak = new SpeechSynthesisUtterance("Der Raum ist offen, es geht los!");
        speak.lang = "de-DE";
        speechSynthesis.speak(speak);
        roomClosed = false;
        window.location.reload();
    }
}
