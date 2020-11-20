function badWordCatch() {

    var wordInput = document.getElementById("wordInput").value;
    wordInput = wordInput.toLowerCase();
  

    var arr = wordInput.split(" ");

    var badWords = ["clear", "water", "tires"];
    
    var foundBadWords = arr.filter(el => badWords.includes(el));
    
    document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
    document.getElementById("wordAmount").innerHTML = foundBadWords.length;
    }