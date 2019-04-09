window.Test = (function () {
    'use strict';

    //** Variables importing the three different tests and some of their styled divs.
    // Variable testPart keeps track of which of the three tests are active. **//
    var test1 = window.Test1;
    var test2 = window.Test2;
    var test3 = window.Test3;
    var content = document.getElementsByClassName("content")[0];
    var quizBox = test1.quizBox;
    var fizzBuzzBox = test2.fizzBuzzBox;
    var testPart = 0;

    //** Counters for each test. Keeps track of points,
    // questions and answers by logging user clicks. **//
    var quizCounters = {
        quizPoints: 0,
        quizNext: 0,
        numberClicked: 0,
    };

    var fizzBuzzCounters = {
        fizzBuzzPoints: 0,
    };

    var flagCounters = {
        flagPoints: 0,
        flagNext: 0,
        numberClicked: 0,
    };

    //** Object "test" is called whenever user enters Test.reset() in the console.
    // If user is in active test, object "test" resets all counters and calls relevant function.
    // If user is not in active test, an error message is thrown in the console. **//
    var test = {
        reset: function() {
            if (testPart === 1) {
                quizCounters.quizPoints = 0;
                quizCounters.quizNext = 0;
                testPart = 0;
                quizCounters.numberClicked = 0;
                quizMaster();
            } else if (testPart === 2) {
                fizzBuzzCounters.fizzBuzzPoints = 0;
                testPart = 0;
                fizzBuzzMaster();
            } else if (testPart === 3) {
                flagCounters.flagPoints = 0;
                flagCounters.numberClicked = 0;
                testPart = 0;
                flagMaster();
            } else {
                console.log("Can only reset when test is active!");
            }
        }
    };

    //** Function logging active test and updating variable "testPart." **//
    function logTestPart(intelligence) {
        if (intelligence === "quiz") {
            testPart = 1;
        } else if (intelligence === "fizzBuzz") {
            testPart = 2;
        } else if (intelligence === "flags") {
            testPart = 3;
        } else {
            return;
        }
    }

    //** Function welcoming user to test. Calls functions for test1 when clicked. **//
    function testWelcome() {
        var temp = document.createElement("div");
        var welcomeTestText = '<p class="headlineParagraph">' +
        'Välkommen till intelligenstestet!</p>' +
        '<p class="boldParagraph">Du ska först få fem frågor om världens viktigaste ämne, MFF. ' +
        '<br></br>Sedan följer taltest och minnestest.<br></br>Klicka igång när du är redo!</p>';

        temp.className = "welcomeBox";
        temp.innerHTML = welcomeTestText;
        content.appendChild(temp);
        temp.addEventListener("click", function() {
            quizMaster();
            quizClickHandler();
            content.removeChild(temp);
        });
    }

    //** Function controlling quiz-test and calling relevant functions
    // in module "test1" depending on number of clicks by user.  **//
    function quizMaster() {
        var intelligence = "quiz";

        logTestPart(intelligence);
        if (quizCounters.quizNext === 0) {
            test1.qOne();
        } else if (quizCounters.quizNext === 1) {
            test1.qTwo();
        } else if (quizCounters.quizNext === 2) {
            test1.qThree();
        } else if (quizCounters.quizNext === 3) {
            test1.qFour();
        } else if (quizCounters.quizNext === 4) {
            test1.qFive();
        } else {
            document.getElementsByTagName("body")[0].removeChild(quizBox);
            fizzBuzzWelcome();
        }
    }

    //** Function handling clicks for questions in module "test1".
    // Is only applied if element contains class "questionLine". **//
    function quizClickHandler() {
        quizBox.addEventListener("click", function(event) {
            if (!event.target.classList.contains("questionLine")) {
                return;
            } else {
                var clicked = quizCounters.numberClicked++;
                var guess = event.target.innerHTML;
                var choiche = event.target;

                choiche.classList.add("marked");
                var all = document.querySelectorAll(".questionLine");

                for (var i = 0; i < all.length; i++) {
                    all[i].style.pointerEvents = "none";
                }
            }
            quizCheck(clicked, guess);
            quizClickNext(clicked);
        });
    }

    //** Function creating clickable "next" and "see result"-options
    // as questions in from module "test1" is answered. **//
    function quizClickNext(clicked) {
        quizCounters.quizNext++;
        var temp = document.createElement("div");

        temp.className = "continueBox";
        quizBox.appendChild(temp);
        temp.addEventListener("click", function() {
            quizMaster();
        });

        if (clicked < 4) {
            temp.innerHTML = "<p class='boldParagraph'>Till nästa fråga!</p>";
        } else {
            temp.innerHTML = "<p class='boldParagraph'>Se resultat!</p>";
        }
    }
    //** Function checking which questions and which answers are active in  module "test1".
    // Logs points and creates divs depending on answer from user. **//
    function quizCheck(clicked, guess) {
        var activeAnswer = [];

        if (quizCounters.numberClicked === 1) {
            activeAnswer = test1.answerAry[0];
        } else if (quizCounters.numberClicked === 2) {
            activeAnswer = test1.answerAry[1];
        } else if (quizCounters.numberClicked === 3) {
            activeAnswer = test1.answerAry[2];
        } else if (quizCounters.numberClicked === 4) {
            activeAnswer = test1.answerAry[3];
        } else if (quizCounters.numberClicked === 5) {
            activeAnswer = test1.answerAry[4];
        }
        if (guess === activeAnswer) {
            quizCounters.quizPoints += 3;
            var temp = document.createElement("div");

            temp.className = "correctBox";
            temp.innerHTML = "<p class='boldParagraph'>Rätt!</p>";
            quizBox.appendChild(temp);
        } else {
            var correct = activeAnswer.slice(0, 1);

            temp = document.createElement("div");
            temp.className = "errorBox";
            temp.innerHTML = "<p class='errorParagraph'>Det var fel!</p>";
            quizBox.appendChild(temp);
            var tempTwo = document.createElement("div");

            tempTwo.className = "answerBox";
            tempTwo.innerHTML = "<p class='boldParagraph'>Rätt svar: " + correct + "</p>";
            quizBox.appendChild(tempTwo);
        }
    }

    //** Function welcoming user to FizzBuzz test and calls relevant functions on click. **//
    function fizzBuzzWelcome() {
        testPart = 0;
        var temp = document.createElement("div");
        var welcomeFizzBuzzText = '<p class="headlineParagraph">' +
        'Du fick ' + quizCounters.quizPoints + ' poäng.<br></br>' +
        '<p class="boldParagraph">Deltest två är FizzBuzz där ' +
        'du ska slutföra en talserie. <br></br>' +
        'Klicka "Fizz" om nästa tal är delbart med tre, ' +
        '"Buzz" om det är delbart med fem, och "FizzBuzz" om det är delbart med både tre och fem.' +
        '<br></br> Är det varken delbart med tre eller fem, klicka siffran.' +
        '<br></br>Klicka igång när du är redo. Lycka till!</p>';

        temp.className = "welcomeFizzBuzzBox";
        temp.innerHTML = welcomeFizzBuzzText;
        content.appendChild(temp);
        temp.addEventListener("click", function() {
            fizzBuzzMaster();
            fizzBuzzClickHandler();
            content.removeChild(temp);
        });
    }

    //** Function starting fizzBuzz-test and calling the relevant function in module "test2". **//
    function fizzBuzzMaster() {
        var intelligence = "fizzBuzz";

        logTestPart(intelligence);
        test2.fizzBuzzCreate();
    }

    //** Function handling clicks for question in module "test2".
    // Is only applied if element contains class "questionLine" **//
    function fizzBuzzClickHandler() {
        fizzBuzzBox.addEventListener("click", function(event) {
            if (!event.target.classList.contains("questionLine")) {
                return;
            } else {
                var guess = event.target.innerHTML;
                var choiche = event.target;

                choiche.classList.add("marked");
                var all = document.querySelectorAll(".questionLine");

                for (var i = 0; i < all.length; i++) {
                    all[i].style.pointerEvents = "none";
                }
            }
            fizzBuzzCheck(guess, choiche);
        });
    }

    //** Function checking which answer is active in  module "test2".
    // Logs points and creates divs depending on answer from user.
    // Creates clickable "wrong", "right" and "see result"-options on click. **//
    function fizzBuzzCheck(guess) {
        var activeAnswer = test2.fizzBuzzAnswer();

        if (guess === activeAnswer) {
            fizzBuzzCounters.fizzBuzzPoints += 3;
            var temp = document.createElement("div");

            temp.className = "fbCorrectBox";
            temp.innerHTML = "<p class='boldParagraph'>Rätt!</p>";
            fizzBuzzBox.appendChild(temp);
        } else {
            var correct = activeAnswer;

            temp = document.createElement("div");
            temp.className = "fbErrorBox";
            temp.innerHTML = "<p class='errorParagraph'>Det var fel!</p>";
            fizzBuzzBox.appendChild(temp);
            var tempTwo = document.createElement("div");

            tempTwo.className = "fbAnswerBox";
            tempTwo.innerHTML = "<p class='boldParagraph'>Svar: " + correct + "</p>";
            fizzBuzzBox.appendChild(tempTwo);
        }
        var tempThree = document.createElement("div");

        tempThree.className = "fbContinueBox";

        fizzBuzzBox.appendChild(tempThree);
        tempThree.addEventListener("click", function() {
            document.getElementsByTagName("body")[0].removeChild(fizzBuzzBox);
            flagWelcome();
        });
        tempThree.innerHTML = "<p class='boldParagraph'>Se resultat!</p>";
    }

    //** Function welcoming user to Flag test and calls relevant functions on click. **//
    function flagWelcome() {
        testPart = 0;
        var temp = document.createElement("div");
        var welcomeFlagText = '<p class="headlineParagraph">' +
        'Du fick ' + fizzBuzzCounters.fizzBuzzPoints + ' poäng.<br></br>' +
        '<p class="boldParagraph">Deltest tre är ett minnestest där ' +
        'du får se nio olika flaggor i fem sekunder. <br></br>' +
        'Därefter döljs de och du ska klicka på dem ' +
        'i rätt ordning enligt den lista som kommer upp.' +
        '<br></br> Varje flagga förekommer bara en gång och ' +
        'du får fortsätta så länge du gissar rätt' +
        '<br></br>Klicka igång när du är redo. Lycka till!</p>';

        temp.className = "welcomeFlagBox";
        temp.innerHTML = welcomeFlagText;
        content.appendChild(temp);
        temp.addEventListener("click", function() {
            content.removeChild(temp);
            flagMaster();
            flagClickHandler();
        });
    }

    //** Function starting Flag test and calling the relevant function in module "test3". **//
    function flagMaster() {
        var intelligence = "flags";

        logTestPart(intelligence);
        test3.createFlag();
    }

    //** Function handling clicks for question in module "test3".
    // Is only applied if element contains class "hide" **//
    function flagClickHandler() {
        test3.flagBox.addEventListener("click", function(event) {
            if (!event.target.classList.contains("hide")) {
                return;
            } else {
                var choice = event.target.innerHTML;
                var guess = choice.split("H").splice(0, 1).join(" ").split(" ").splice(2, 3).join();

                flagCounters.numberClicked++;
                flagCheck(guess);
            }
        });
    }

    //** Function checking guess from user on click, logging clicks and active in module "test3."
    // Calls relevant functions in "test3" depending on user cliks and number of clicks".
    // Creates clickable "see result"-option. Disables all other pointer events
    // if guess is not equal to active answer **//
    function flagCheck(guess) {
        switch (guess) {
            case "skåne":
                test3.showSkane();
                break;
            case "polen":
                test3.showPoland();
                break;
            case "sverige":
                test3.showSweden();
                break;
            case "italien":
                test3.showItaly();
                break;
            case "frankrike":
                test3.showFrance();
                break;
            case "indonesien":
                test3.showIndonesia();
                break;
            case "irland":
                test3.showIreland();
                break;
            case "england":
                test3.showEngland();
                break;
            case "nigeria":
                test3.showNigeria();
                break;
        }

        var tempAry = test3.optionAry();
        var anotherAry = [];

        for (var i = 0; i < tempAry.length; i++) {
            anotherAry[i] = tempAry[i].replace(/1. |2. |3. |4. |5. |6. |7. |8. |9. /g, "");
            var activeOption = anotherAry.map(function(item) { return item.toLowerCase(); });
        }

        if (flagCounters.numberClicked === 1) {
            var activeAnswer = activeOption[0];
        } else if (flagCounters.numberClicked === 2) {
            activeAnswer = activeOption[1];
        } else if (flagCounters.numberClicked === 3) {
            activeAnswer = activeOption[2];
        } else if (flagCounters.numberClicked === 4) {
            activeAnswer = activeOption[3];
        } else if (flagCounters.numberClicked === 5) {
            activeAnswer = activeOption[4];
        } else if (flagCounters.numberClicked === 6) {
            activeAnswer = activeOption[5];
        } else if (flagCounters.numberClicked === 7) {
            activeAnswer = activeOption[6];
        } else if (flagCounters.numberClicked === 8) {
            activeAnswer = activeOption[7];
        } else {
            activeAnswer = activeOption[8];
        }

        if (guess === activeAnswer) {
            logFlagPoints();
        } else {
            var flagOptionBox = document.getElementsByClassName("flagOptionBox")[0];
            var temp = document.createElement("div");

            temp.className = "errorBox";
            temp.innerHTML = "<p class='errorParagraph'>Fel! Spel slut!</p>";
            flagOptionBox.appendChild(temp);
            test3.flagBox.style.pointerEvents = "none";
            var all = document.querySelectorAll(".flagLine");

            for (var s = 0; s < all.length; s++) {
                var index = all[s];

                index.classList.add("marked");
            }

            var tempTwo = document.createElement("div");

            tempTwo.className = "continueBox";
            tempTwo.innerHTML = "<p class='boldParagraph'>Se resultat!</p>";
            flagOptionBox.appendChild(tempTwo);
            tempTwo.addEventListener("click", function() {
                document.getElementsByTagName("body")[0].removeChild(flagOptionBox);
                document.getElementsByTagName("body")[0].removeChild(test3.flagBox);
                testEnd();
            });
        }
    }

    //** Logs flag points. Creates clickable "see result"-option when nine
    // points is reached, while disabling all other pointer-events **//
    function logFlagPoints() {
        flagCounters.flagPoints++;
        var counted = flagCounters.flagPoints;

        if (counted === 9) {
            var flagOptionBox = document.getElementsByClassName("flagOptionBox")[0];
            var temp = document.createElement("div");

            temp.className = "correctBox";
            temp.innerHTML = "<p class='boldParagraph'>Alla rätt! Slut!</p>";
            flagOptionBox.appendChild(temp);
            test3.flagBox.style.pointerEvents = "none";
            var tempTwo = document.createElement("div");

            tempTwo.className = "continueBox";
            tempTwo.innerHTML = "<p class='boldParagraph'>Se resultat!</p>";
            flagOptionBox.appendChild(tempTwo);
            tempTwo.addEventListener("click", function() {
                document.getElementsByTagName("body")[0].removeChild(flagOptionBox);
                document.getElementsByTagName("body")[0].removeChild(test3.flagBox);
                testEnd();
            });
        } else {
            return;
        }
    }

    //** Informs user that alls tests are completed and calls relevant function when on click. **//
    function testEnd() {
        testPart = 0;
        var temp = document.createElement("div");
        var testEndText = '<p class="headlineParagraph">' +
        'Du fick ' + flagCounters.flagPoints + ' poäng.<br></br>' +
        '<p class="boldParagraph">Intelligenstestet är nu ' +
        'slut. Klicka vidare för att se total poäng och intelligensnivå.</p>';

        temp.className = "testEndBox";
        temp.innerHTML = testEndText;
        content.appendChild(temp);
        temp.addEventListener("click", function() {
            content.removeChild(temp);
            testResult();
        });
    }

    //** Informs user of their score and intelligence level
    // as well as max score and max intelligence level. **//
    function testResult() {
        testPart = 0;
        var temp = document.createElement("div");
        var totalPoints = quizCounters.quizPoints
        + fizzBuzzCounters.fizzBuzzPoints
        + flagCounters.flagPoints;
        var intLevel;
        var intJudge;

        if (totalPoints > 18) {
            intLevel = 3;
            intJudge = "högbegåvad";
        } else if (totalPoints < 9)  {
            intLevel = 1;
            intJudge = "svagbegåvad";
        } else {
            intLevel = 2;
            intJudge = "normalbegåvad";
        }

        var testResultText = '<p class="headlineParagraph">' +
        'Du fick sammanlagt ' + totalPoints + ' poäng av 27 på alla tre deltesten.<br></br>' +
        'Därmed är din intelligensnivå ' + intLevel +
        ', vilket motsvarar ' + intJudge +'.<br></br>Högsta möjliga intelligensnivå ' +
        'för detta test är 3 - högbegåvad.</p>';

        temp.className = "testResultBox";
        temp.innerHTML = testResultText;
        content.appendChild(temp);
    }

    testWelcome();

    return test;
})();
