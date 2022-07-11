javascript: document.getElementsByTagName("body")[0].innerHTML = "<iframe id=\"iFrame\" src=\"" + window.location.toString() + "\" style=\"position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;\"><\/iframe>";
reloadTimer = setInterval(function() {
    var attr = $("#iFrame").contents().find("div.run-container").children("button").attr('disabled');
    $("#iFrame").contents().find("div.run-container").attr("id", "containerId")
    var id = $("#iFrame").contents().find("div.run-container").children("button").attr('id');
    if (typeof attr !== 'undefined' && attr !== false) {
        console.log("not open yet, refreshing");
        document.getElementById("iFrame").src = document.getElementById("iFrame").src
    }
    else if (typeof attr == 'object'){ //make sure the object is loaded
        console.log(attr)
        var speak = new SpeechSynthesisUtterance("Der Raum ist offen, es geht los!");
        speak.lang = "de-DE";
        speechSynthesis.speak(speak);
        clearInterval(reloadTimer);
    }
}, 2000)
