"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userGenerator_1 = require("./userGenerator");
var usersArray = (0, userGenerator_1.default)();
function matching(userA, userArray) {
    var prefs = userA.userPrefs;
    userArray.map(function (user) {
        if (prefs.age.includes(user.age)) {
            user.languages.map(function (l) {
                return prefs.languages.includes(l) ? user.affinityScore++ : "";
            });
            user.hobbies.map(function (h) {
                return userA.hobbies.includes(h) ? user.affinityScore++ : "";
            });
            if (prefs.gender.includes(user.gender)) {
                user.affinityScore++;
            }
            if (prefs.location.includes(user.location)) {
                user.affinityScore++;
            }
            if (user.affinityScore > 3) {
                console.log("\n".concat(user.name, " is a top profile for ").concat(userA.name, "\n scored: ").concat(user.affinityScore, " points! \nThe profile's \nlanguages: ").concat(user.languages, ", \nhobbies: ").concat(user.hobbies, ", \nlocation: ").concat(user.location, "\n"));
            }
            else {
                console.log("".concat(userA.name, " affinity score with ").concat(user.name, " is : ").concat(user.affinityScore));
            }
        }
    });
}
var charlesEdouard = {
    name: "Charles-Édouard",
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
        location: Array.from({ length: 100 - 0 + 1 }, function (_, i) { return i; }),
    },
};
matching(charlesEdouard, usersArray);
exports.default = matching;
