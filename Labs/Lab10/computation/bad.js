var txtInput = document.getElementById("txtInput");
var wordsFound = document.getElementById("wordsFound");
var wordCount = document.getElementById("wordCount");
badWords = "";
wordsTotal = 0;

function badWordCatcher() {
    var splitString = txtInput.value.split(" ");
    txtInput.value = "";

    for(i = 0; i < splitString.length; i++){
        if(splitString[i] == "clear"){
            badWords = "Yes";
            wordsTotal += 1;
        }else if (splitString[i] == "water") {
            badWords = "Yes";
            wordsTotal += 1;
        }else if (splitString[i] == "tires") {
            badWords = "Yes";
            wordsTotal += 1;
        }else{
            badWords = "No"
        }
        wordsFound.innerHTML = "Are there any bad words? " + badWords;
        wordCount.innerHTML = "Bad word count: " + wordsTotal;
    }
    wordsTotal = 0;

}