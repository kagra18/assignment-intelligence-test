window.Test1 = (function () {
    "use strict";


    var test1 = {

        quizBox: document.getElementsByClassName("quizArea")[0],

        //** Array with all questions. **//
        questionAry: [
            "<p class='boldParagraph'>Hur många SM-guld har Malmö FF per 2019?</p>",
            "<p class='boldParagraph'>Vem av följande har inte Malmö FF som moderklubb?</p>",
            "<p class='boldParagraph'>Vilket lag mötte Malmö FF i Europacupfinalen 1979?</p>",
            "<p class='boldParagraph'>Vem slog hedersavspark när nya Malmö stadion " +
            "invigdes 2009?</p>",
            "<p class='boldParagraph'>Vad heter Malmö FF:s officiella supporterklubb?</p>",
        ],

        //** Array with all correct answers. **//
        answerAry: [
            "2: 20 guld",
            "X: Egzon Binaku",
            "X: Nottinham Forrest FC",
            "1: Bo Larsson",
            "2: MFF Support",
        ],

        //** Five different arrays with three answer-options each. **//
        qOneAry: [
            "1: 10 guld",
            "X: 16 guld",
            "2: 20 guld",
        ],

        qTwoAry: [
            "1: Marcus Rosenberg",
            "X: Egzon Binaku",
            "2: Behrang Safari",
        ],

        qThreeAry: [
            "1: Leeds United",
            "X: Nottinham Forrest FC",
            "2: Liverpool FC",
        ],

        qFourAry: [
            "1: Bo Larsson",
            "X: Zlatan Ibrahimovic",
            "2: Stefan Schwarz",
        ],

        qFiveAry: [
            "1: Blådårarna",
            "X: Malmö Fans",
            "2: MFF Support",
        ],

        //** Five methods creating divs with different questions
        // and answers based on arrays above. **//
        qOne: function() {
            this.quizBox.className = "quizBox";
            this.quizBox.innerHTML = this.questionAry[0];
            for (var i = 0; i < 3; i++) {
                var temp = document.createElement("div");

                temp.className = "questionLine";
                temp.innerHTML = this.qOneAry[i];
                this.quizBox.appendChild(temp);
            }
        },

        qTwo: function() {
            this.quizBox.className = "quizBox";
            this.quizBox.innerHTML = this.questionAry[1];
            for (var i = 0; i < 3; i++) {
                var temp = document.createElement("div");

                temp.className = "questionLine";
                temp.innerHTML = this.qTwoAry[i];
                this.quizBox.appendChild(temp);
            }
        },

        qThree: function() {
            this.quizBox.className = "quizBox";
            this.quizBox.innerHTML = this.questionAry[2];
            for (var i = 0; i < 3; i++) {
                var temp = document.createElement("div");

                temp.className = "questionLine";
                temp.innerHTML = this.qThreeAry[i];
                this.quizBox.appendChild(temp);
            }
        },

        qFour: function() {
            this.quizBox.className = "quizBox";
            this.quizBox.innerHTML = this.questionAry[3];
            for (var i = 0; i < 3; i++) {
                var temp = document.createElement("div");

                temp.className = "questionLine";
                temp.innerHTML = this.qFourAry[i];
                this.quizBox.appendChild(temp);
            }
        },

        qFive: function() {
            this.quizBox.className = "quizBox";
            this.quizBox.innerHTML = this.questionAry[4];
            for (var i = 0; i < 3; i++) {
                var temp = document.createElement("div");

                temp.className = "questionLine";
                temp.innerHTML = this.qFiveAry[i];
                this.quizBox.appendChild(temp);
            }
        },
    };

    return test1;
})();
