"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGenerator = void 0;
var hobbies_1 = require("./hobbies");
var languages_1 = require("./languages");
var hobbiesArray = hobbies_1.default;
var languagesArray = languages_1.default;
function removeUsingSet(arr) {
    var outputArray = Array.from(new Set(arr));
    return outputArray;
}
function userGenerator(userArray) {
    if (userArray === void 0) { userArray = []; }
    var gender = ["male", "female", "any"];
    var location = Math.floor(Math.random() * 800);
    for (var i = 0; i < 50; i++) {
        var name_1 = "user" + i;
        var age = 18 + Math.floor(Math.random() * 42);
        var userHobbies = Array.from({ length: 5 }, function (hobby) { return hobbiesArray[Math.floor(Math.random() * hobbiesArray.length)]; });
        var userGender = gender[Math.floor(Math.random() * gender.length)];
        var userLanguages = Array.from({ length: 5 }, function (language) { return languagesArray[Math.floor(Math.random() * languagesArray.length)]; });
        // const agePref = Array.from({ length: Math.floor(Math.random() * 42) }, (_, i) => i + 18).sort();
        // const genderPref = [gender[(Math.floor(Math.random() * gender.length))]];
        var user = {
            name: name_1,
            age: age,
            hobbies: userHobbies,
            gender: userGender,
            languages: removeUsingSet(userLanguages),
            location: location,
            affinityScore: 0,
        };
        userArray.push(user);
    }
    return userArray;
}
exports.userGenerator = userGenerator;
exports.default = userGenerator;
