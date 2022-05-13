function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }
 
var roomOpen = false
while (roomOpen == false) {
    var attr = $("div.run-container").children("button").attr('disabled');
    $("div.run-container").attr("id", "containerId")
    var id = $("div.run-container").children("button").attr('id');
    if (typeof attr !== 'undefined' && attr !== false) {
        console.log("not yet, refreshing");
        $("#main-content").load(window.location.href + " #main-content > *", "");
        await Sleep(5000);
    }
    else {
        var speak = new SpeechSynthesisUtterance("Der Raum ist offen, es geht los!");
        speak.lang = "de-DE";
        speechSynthesis.speak(speak);
        roomOpen = true;
    }
}
