const testText = document.getElementById("test-text");
const doneBtn = document.getElementById("doneBtn");
const typingText = document.getElementById("typing-text");
const totalTime = document.getElementById("total-time");
const generateBtn = document.getElementById("generateBtn");
const templates = document.getElementById("templates");
const abstractExpand = document.getElementById("abstract-expand");
const selectContainer = document.getElementById("select-container");
const currentYear = new Date().getFullYear();
const deleteDialog = document.getElementById("dialog-delete-warning");
const yesBtn = document.getElementById("button-yes");
const noBtn = document.getElementById("button-no");
const raw = document.getElementById("raw-wpm");
const net = document.getElementById("net-wpm");

let typed = 1;
let wrongs = 0;
let rights = 0;
let startTime = null;
let endTime = null;
let realTime = null;
let realTimeSecs = null
let abstract = false;
let templateOne = false;
let templateTwo = false;
let templateThree = false;
let templateFour = false;
let templateFive = false;

doneBtn.addEventListener("click", () => {
    if (testText.value.trim() === "") {
        alert("Do not leave input empty.")
        return;
    } else {
        typingText.style.display = "block";
        startTime = performance.now();
    }
    testText.readOnly = true;
    doneBtn.disabled = true;
    templates.hidden = true;
    generateBtn.disabled = true;

});

typingText.addEventListener("input", (e) => {

    let typingIndex = typingText.value.length;

    if (typingIndex >= 0) {
        if (typingText.value.charAt(typingIndex) !== testText.value.charAt(typingIndex)) {
            wrongs += 1;
            return;
        } else if (typingText.value !== testText.value) {
            rights += 1;
            return;
        } else {
            endTime = performance.now();
            console.log("end");
            realTime = endTime - startTime;
            realTimeSecs = (realTime / 1000).toFixed(2);
            totalTime.innerText = `Total time: ${realTimeSecs}`;
            totalTime.style.color = "white";
            raw.style.display = "block";
            net.style.display = "block";
            
            let rawWpm = ((typingIndex * 12) / realTimeSecs).toFixed(0);
            raw.style.display = "block";
            raw.innerText = `Raw WPM: ${rawWpm}`
        }
    }
});

function updateText() {
    const selectedValue = templates.value;
    const abstractTrue = abstractExpand.checked;
    
    switch (selectedValue) {
        case "1":
            if (abstractTrue) {
                testText.innerText = "you probably did not join typing class yesterday at the university it was very productive and understandable and helped us type out the months of the year correctly and quickly over the next semester we had to invest in keyboards to improve our typing skills as youthful individuals it feels like the ultimate underestimated and underrated superpower oftentimes people forget how useful efficiency in typing really is speeding up your typing is a good move especially considering the average typing speed is pretty slow compared to how quickly you can type with enough practice it is a highly unique skill that is often overlooked and you should learn it with terra keychain";
            } else {
                testText.innerText = "You probably did not join typing class yesterday at the university. It was very productive and understandable, and helped us type out the months of the year correctly and quickly. Over the next semester we had to invest in keyboards to improve our typing skills as youthful individuals. It feels like the ultimate underestimated and underrated superpower. Oftentimes, people forget how useful efficiency in typing really is. Speeding up your typing is a good move, especially considering the average typing speed is pretty slow compared to how quickly you can type with enough practice. It is a highly unique skill that is often overlooked, and you should learn it with Terra Keychain.";    
            } 
            break;
        case "2": 
            if (abstractTrue) {
                testText.innerText = "brainstorming backronyms may seem benign in the beginning but many do not suspect its difficulty in assembling each one making sense of it is like a network of minds manually making up names for many things but buried underneath it are a numerous amount of people in numbness every night by attempting it oftentimes they abandon it and leave it behind because of how challenging it is to maintain the effort baby brother barely wanted to bake banana muffins because pans bent backwards benny banned many books by noon because the spines were bending"
            } else {
                testText.innerText = "Brainstorming backronyms may seem benign in the beginning, but many do not suspect its difficulty in assembling each one making sense of it is like a network of minds manually making up names for many things. But buried underneath it are a numerous amount of people in numbness every night by attempting it. Oftentimes they abandon it and leave it behind because of how challenging it is to maintain the effort. Baby brother barely wanted to bake banana muffins because pans bent backwards. Benny banned many books by noon, because the spines were bending."
            }
            break;
        case "3":
            if (abstractTrue) {
                testText.innerText = "cheese mix is crazy at the zoo xylophone boxes mix to the max exotically because sixes create vicious visible visual issues and caveats in the czech republic and exiting the caves consider xylo cars vexed and chivalrous cavemen are saving cider for vicks witches and vixen so luckily you can get extensivization in touching keys with volcanic zolos zooms and zippers cuz zinc cant be xrayed"
            } else {
                testText.innerText = "Cheese mix is crazy at the zoo. Xylophone boxes mix to the max exotically, because sixes create vicious visible visual issues and caveats in the Czech republic. And exiting the caves consider xylo cars vexed and chivalrous. Cavemen are saving cider for vicks, witches, and vixen, so luckily, you can get extensivization in touching keys with volcanic zolos, zooms, and zippers, cuz zinc can't be xrayed."
            }
            break;
        case "4": 
            if (abstractTrue) {
                testText.innerText = `in june 1874 the typewriter started selling for 125 dollars and 1204000 and 98 are cool numbers but 1994 was the best year however ${currentYear} is the current year and in 1 year it will be ${currentYear + 1} so 20 5 18 18 1 0 11 5 25 3 8 1 9 14 is a cool word in english and there are 52 cards in a deck and 54 if you count jokers and a 9 out of 10 chance that you will improve typing speed along by practicing for 15 minutes a day for 2 to 3 months and youll improve up to 60-75 wpm and my typing speed is at around 90 to 100 words per minute at an accuracy of 90 and from day 1 to 2 to 3 to 4 to 5 to 6 to 7 to 8 to 9 i improved significantly`
            } else {
                testText.innerText = `In June 1874, the typewriter started selling for 125 dollars, and 1204000 and 98 are cool numbers but 1994 was the best year. However, ${currentYear} is the current year, and in 1 year it will be ${currentYear + 1}. 20 5 18 18 1 0 11 5 25 3 8 1 9 14 is a cool word in English, and there are 52 cards in a deck, and 54 if you count jokers. And a 9 out of 10 chance that you will improve typing speed along by practicing for 15 minutes a day for 2 to 3 months, and you'll improve up to 60-75 wpm, and my typing speed is at around 90 to 100 words per minute at an accuracy of 90%. And from day 1 to 2 to 3 to 4 to 5 to 6 to 7 to 8 to 9 I improved significantly.`
            } 
            break;
        case "5":
            if (abstractTrue) {
                testText.innerText = "wow! @jonah #lol and muffins cost $98 because of the 50% discount and 2^2 is 4 & so is 2*2 and so is 2(2) and @bethany 52! is 52 factorial!! are you ready # @ ! go! (@(!**#&$^!)(#*$&@%!!!%@(#)$($*%&^$#!)(*@&"
            } else 
                testText.innerText = "Wow! @Jonah, #lol, and muffins cost $98 because of the 50% discount. And 2^2 is 4, & so is 2*2, and so is 2(2). And @Bethany, 52! is 52 factorial!! Are you ready? # @ ! Go! !##@!!##@!(@#*$&(@*#&(#&$#*@&$(#@&"
            break;            
    }
}
generateBtn.addEventListener("click", () => {

    if (testText.value !== "") {
        deleteDialog.showModal();
        yesBtn.addEventListener("click", () => {
            generateBtn.hidden = true;
            templates.hidden = false;
            abstractExpand.hidden = false;
            selectContainer.hidden = false;
            testText.value = "You probably did not join typing class yesterday at the university. It was very productive and understandable, and helped us type out the months of the year correctly and quickly. Over the next semester we had to invest in keyboards to improve our typing skills as youthful individuals. It feels like the ultimate underestimated and underrated superpower. Oftentimes, people forget how useful efficiency in typing really is. Speeding up your typing is a good move, especially considering the average typing speed is pretty slow compared to how quickly you can type with enough practice. It is a highly unique skill that is often overlooked, and you should learn it with Terra Keychain.";
            deleteDialog.close();
        });
        noBtn.addEventListener("click", () => {
            deleteDialog.close();
            return;
        });
    } else {
        testText.value = "You probably did not join typing class yesterday at the university. It was very productive and understandable, and helped us type out the months of the year correctly and quickly. Over the next semester we had to invest in keyboards to improve our typing skills as youthful individuals. It feels like the ultimate underestimated and underrated superpower. Oftentimes, people forget how useful efficiency in typing really is. Speeding up your typing is a good move, especially considering the average typing speed is pretty slow compared to how quickly you can type with enough practice. It is a highly unique skill that is often overlooked, and you should learn it with Terra Keychain.";
    }
});
templates.addEventListener("change", updateText);
abstractExpand.addEventListener("change", updateText);