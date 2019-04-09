window.Test2 = (function () {
    "use strict";

    var test2 = {

        //** Updateble property holding start value for FizzBuzz sequence. **//
        fizzBuzzStart: 0,

        fizzBuzzBox: document.getElementsByClassName("fizzBuzzArea")[0],

        //** Method creating active answer based on randomized
        // start value from property "fizzBuzzStart" **//
        fizzBuzzAnswer: function() {
            var starting = this.fizzBuzzStart;
            var answer = starting + 5;

            if (answer%3==0 && answer%5==0) {
                answer = "FizzBuzz";
            } else if (answer%3==0) {
                answer = "Fizz";
            } else if (answer%5==0) {
                answer = "Buzz";
            } else {
                answer = answer + "";
            }
            return answer;
        },

        //** Method creating random value for property "fizzBuzzStart".
        //Creates full FizzBuzz sequence based on that value. **//
        fizzBuzzCreate: function() {
            this.fizzBuzzStart = Math.floor(Math.random() * 100);
            var start = this.fizzBuzzStart;
            var last = this.fizzBuzzStart;

            for (var e = 0; e < 5; e++) {
                last += 1;
            }

            var lastNumber = last;
            var startNumber = start.toString();
            var total = "";

            for (var i = 0; i < 5; i++) {
                start += 1;
                if (start%3==0 && start%5==0) {
                    var fizzBuzz = start;

                    fizzBuzz = "FizzBuzz,";
                    total += fizzBuzz;
                } else if (start%3==0) {
                    var fizz = start;

                    fizz = "Fizz,";
                    total += fizz;
                } else if (start%5==0) {
                    var buzz = start;

                    buzz = "Buzz,";
                    total += buzz;
                } else {
                    total += start + ",";
                }
            }

            var tempAry = total.slice(0, -1).split(",");
            var tempStart = startNumber.split();
            var fizzBuzzTemp = tempStart.concat(tempAry).slice(0, -1);
            var fizzBuzzQStr = fizzBuzzTemp.join(", ") + " ...?";
            var fizzBuzzQuestion = '<p class="boldParagraph">' + fizzBuzzQStr + '<p>';
            var fizzBuzzQAry =  ["Fizz", "Buzz", "FizzBuzz", lastNumber];

            this.qFizzBuzz(fizzBuzzQuestion, fizzBuzzQAry);
        },

        //** Method creating divs based on values from methods above. **//
        qFizzBuzz: function(fizzBuzzQuestion, fizzBuzzQAry) {
            this.fizzBuzzBox.className = "fizzBuzzBox";
            this.fizzBuzzBox.innerHTML = fizzBuzzQuestion;

            for (var i = 0; i < 4; i++) {
                var temp = document.createElement("div");

                temp.className = "questionLine";
                temp.innerHTML = fizzBuzzQAry[i];
                this.fizzBuzzBox.appendChild(temp);
            }
        },
    };

    return test2;
})();
