"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userGenerator_1 = require("./userGenerator");
//From there we get a random list of 50 users generated randomly:
var usersArray = (0, userGenerator_1.default)();
function matching(userA, userArray) {
    var prefs = userA.userPrefs; //Stores the user's prefs in a variable
    //First we check if the generated user's age and gender match with Sample User's prefs, otherwise they won't show up in the matching process
    userArray.map(function (user) {
        if (prefs.age.includes(user.age) && prefs.gender.includes(user.gender)) {
            //Checking if the user's languages match with the Sample User's prefs
            user.languages.map(function (l) {
                return prefs.languages.includes(l) ? user.affinityScore++ : "";
            } // Every matching statement adds 1 point to the user's affinity score
            );
            //Same with hobbies
            user.hobbies.map(function (h) {
                return userA.hobbies.includes(h) ? user.affinityScore++ : "";
            });
            //Checks if user's location matches with Sample User's location (no coordinates here, just a number representing the distance)
            if (prefs.location.includes(user.location)) {
                user.affinityScore++;
            }
            //If the user's affinity score is greater than 3, it's a top profile, it logs the user's info
            if (user.affinityScore >= 3) {
                console.log("\n".concat(user.name, " is a top profile for ").concat(userA.name, "\n scored: ").concat(user.affinityScore, " points! \nThe profile's \ngender: ").concat(user.gender, " \nlanguages: ").concat(user.languages, ", \nhobbies: ").concat(user.hobbies, ", \nlocation: ").concat(user.location, "\n"));
                //If the user's affinity score is less than 3, it only logs the affinity score
            }
            else {
                console.log("".concat(userA.name, " affinity score with ").concat(user.name, " is : ").concat(user.affinityScore));
            }
        }
    });
}
//You can edit this user with values from hobbies.ts and languages.ts
var sampleUser = {
    name: "Sample User",
    age: 25,
    hobbies: [
        "taekwondo",
        "cycling",
        "platformer games",
        "home brewing",
        "camping",
    ],
    gender: "male",
    languages: ["javascript", "php", "c++"],
    location: 0,
    affinityScore: 0,
    userPrefs: {
        age: [20, 21, 22, 23, 24, 25, 26, 27],
        gender: ["female"],
        languages: ["javascript", "php"],
        location: Array.from({ length: 100 - 0 + 1 }, function (_, i) { return i; }), //Set max distance in the length property (default: 100)
    },
};
matching(sampleUser, usersArray);
exports.default = matching;
