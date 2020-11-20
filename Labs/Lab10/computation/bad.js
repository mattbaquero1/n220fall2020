function badWordCatcher() {

    let wordInput = document.getElementById("wordInput").value;
    wordInput = wordInput.toLowerCase();
  

    let arr = wordInput.split(" ");

    let badWords = ["clear", "water", "tires"];
    
    let foundBadWords = arr.filter(el => badWords.includes(el));
    
    document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
    document.getElementById("wordAmount").innerHTML = foundBadWords.length;
    }