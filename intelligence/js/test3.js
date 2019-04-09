window.Test3 = (function () {
    "use strict";


    //** Global variables holding timeOut-function. Holds "clearTimeout"
    // or "setTimeout" depending on methods "createFlag", "createOptions
    // and "hideFlag"" **//
    var options;
    var hidden;

    var test3 = {

        flagOptionBox: document.getElementsByClassName("flagOptionArea")[0],

        //** Method holding numbered list with order for flags to be cliked.
        // Contained with function closure, just to make sure it can't be altered by other code**//
        optionAry: (function () {
            var flagOptionAry = ["1. Skåne", "2. Polen", "3. Sverige", "4. Italien", "5. Frankrike",
                "5. Indonesien", "6. Irland", "7. England", "8. Nigeria"];

            return function () {
                return flagOptionAry;
            };
        })(),

        //**Updateble property for strings with the different names of the flags.**//
        flagHtml: "",

        flagBox: document.getElementsByClassName("flagArea")[0],

        //** Method combining flag name-strings with relevant classes to create full flags. **//
        init: function(flagHtml) {
            this.flagHtml = "<div class='flag " + flagHtml
            + "'><div class='par1 " + flagHtml + "'></div><div class='par2'></div></div>";
        },

        //** Method drawing each of the flags based on array in method "createFlag." **//
        draw: function()  {
            this.flagBox.className = "flagBox";
            this.flagBox.innerHTML += this.flagHtml;
        },

        //** Method creating shuffled array with flags based on method "init". Empties all divs
        // and clear timer functions when called, to enable "Test.reset()". **//
        createFlag: function() {
            this.flagBox.innerHTML = "";
            this.flagBox.style.pointerEvents = "auto";
            this.flagOptionBox.innerHTML = "";
            this.flagOptionBox.classList.remove("flagOptionBox");


            clearTimeout(options);
            clearTimeout(hidden);

            var irland = Object.create(test3);

            irland.init("irland");

            var italien = Object.create(test3);

            italien.init("italien");

            var nigeria = Object.create(test3);

            nigeria.init("nigeria");

            var indonesien = Object.create(test3);

            indonesien.init("indonesien");

            var frankrike = Object.create(test3);

            frankrike.init("frankrike");

            var sverige = Object.create(test3);

            sverige.init("sverige");

            var skåne = Object.create(test3);

            skåne.init("skåne");

            var england = Object.create(test3);

            england.init("england");

            var polen = Object.create(test3);

            polen.init("polen");

            var allFlags = [indonesien, irland, skåne,
                polen, frankrike, sverige, nigeria, england, italien];

            var j, x, i;

            for (i = allFlags.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = allFlags[i];
                allFlags[i] = allFlags[j];
                allFlags[j] = x;
            }

            this.flagBox.className = "flagBox";
            for (var e = 0; e < allFlags.length; e++) {
                allFlags[e].draw();
            }

            this.hideFlag();
            test3.createOptions();
        },

        //** Creates list of flags to be clicked based on method "optionAry".
        // Method delayed for five sconds. **//
        createOptions: function() {
            options = setTimeout(function() {
                var flagOptions = test3.optionAry();

                test3.flagOptionBox.className = "flagOptionBox";
                for (var e = 0; e < flagOptions.length; e++) {
                    var temp = document.createElement("div");

                    temp.className = "flagLine";
                    temp.innerHTML = flagOptions[e];
                    test3.flagOptionBox.appendChild(temp);
                }
            }, 5000);
        },

        //** Hides all flags by removing and adding classes from each element.
        // Method delayed for five seconds. **//
        hideFlag: function () {
            hidden = setTimeout(function() {
                var all = document.querySelectorAll(".flag");

                for (var s = 0; s < all.length; s++) {
                    var index = all[s];

                    index.classList.remove("flag");
                    index.classList.add("hide");
                }

                var allIreland = document.querySelectorAll(".irland");

                for (var a = 0; a < allIreland.length; a++) {
                    var indexIreland = allIreland[a];

                    indexIreland.classList.remove("irland");
                    indexIreland.classList.add("irlandH");
                }

                var allItaly = document.querySelectorAll(".italien");

                for (var b = 0; b < allItaly.length; b++) {
                    var indexItaly = allItaly[b];

                    indexItaly.classList.remove("italien");
                    indexItaly.classList.add("italienH");
                }

                var allPoland = document.querySelectorAll(".polen");

                for (var c = 0; c < allPoland.length; c++) {
                    var indexPoland = allPoland[c];

                    indexPoland.classList.remove("polen");
                    indexPoland.classList.add("polenH");
                }

                var allSweden = document.querySelectorAll(".sverige");

                for (var d = 0; d < allSweden.length; d++) {
                    var indexSweden = allSweden[d];

                    indexSweden.classList.remove("sverige");
                    indexSweden.classList.add("sverigeH");
                }

                var allEngland = document.querySelectorAll(".england");

                for (var e = 0; e < allEngland.length; e++) {
                    var indexEngland = allEngland[e];

                    indexEngland.classList.remove("england");
                    indexEngland.classList.add("englandH");
                }

                var allNigeria = document.querySelectorAll(".nigeria");

                for (var f = 0; f < allNigeria.length; f++) {
                    var indexNigeria = allNigeria[f];

                    indexNigeria.classList.remove("nigeria");
                    indexNigeria.classList.add("nigeriaH");
                }

                var allFrance = document.querySelectorAll(".frankrike");

                for (var g = 0; g < allFrance.length; g++) {
                    var indexFrance = allFrance[g];

                    indexFrance.classList.remove("frankrike");
                    indexFrance.classList.add("frankrikeH");
                }

                var allSkane = document.querySelectorAll(".skåne");

                for (var h = 0; h < allSkane.length; h++) {
                    var indexSkane = allSkane[h];

                    indexSkane.classList.remove("skåne");
                    indexSkane.classList.add("skåneH");
                }

                var allIndonesia = document.querySelectorAll(".indonesien");

                for (var i = 0; i < allIndonesia.length; i++) {
                    var indexIndonesia = allIndonesia[i];

                    indexIndonesia.classList.remove("indonesien");
                    indexIndonesia.classList.add("indonesienH");
                }
            }, 5000);
        },

        //** Nine methods for showing flags on click.
        // All controlled by clickhandler and checkfunctions in module "test." **//
        showSkane: function() {
            var all = document.querySelectorAll(".skåneH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("skåneH");
                all[i].classList.add("skåne");
                all[i].style.pointerEvents = "none";
            }
        },

        showPoland: function() {
            var all = document.querySelectorAll(".polenH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("polenH");
                all[i].classList.toggle("polen");
                all[i].style.pointerEvents = "none";
            }
        },

        showSweden: function() {
            var all = document.querySelectorAll(".sverigeH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("sverigeH");
                all[i].classList.toggle("sverige");
                all[i].style.pointerEvents = "none";
            }
        },

        showItaly: function() {
            var all = document.querySelectorAll(".italienH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("italienH");
                all[i].classList.toggle("italien");
                all[i].style.pointerEvents = "none";
            }
        },

        showFrance: function() {
            var all = document.querySelectorAll(".frankrikeH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("frankrikeH");
                all[i].classList.toggle("frankrike");
                all[i].style.pointerEvents = "none";
            }
        },

        showIndonesia: function() {
            var all = document.querySelectorAll(".indonesienH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("indonesienH");
                all[i].classList.toggle("indonesien");
                all[i].style.pointerEvents = "none";
            }
        },

        showIreland: function() {
            var all = document.querySelectorAll(".irlandH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("irlandH");
                all[i].classList.toggle("irland");
                all[i].style.pointerEvents = "none";
            }
        },

        showEngland: function() {
            var all = document.querySelectorAll(".englandH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("englandH");
                all[i].classList.toggle("england");
                all[i].style.pointerEvents = "none";
            }
        },

        showNigeria: function() {
            var all = document.querySelectorAll(".nigeriaH");

            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("nigeriaH");
                all[i].classList.toggle("nigeria");
                all[i].style.pointerEvents = "none";
            }
        },
    };

    return test3;
})();
