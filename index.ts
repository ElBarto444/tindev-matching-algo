import userGenerator from "./userGenerator";

//From there we get a random list of 50 users generated randomly:
let usersArray = userGenerator();

export interface User {
  name: string;
  age: number;
  hobbies: string[];
  gender: "male" | "female" | any;
  languages: string[];
  location: number;
  affinityScore: number;
}

export interface UserWithPrefs {
  name: string;
  age: number;
  hobbies: string[];
  gender: "male" | "female" | any;
  languages: string[];
  location: number;
  userPrefs: UserPreferences;
  affinityScore: number;
}

export interface UserPreferences {
  age: number[];
  gender: string[];
  languages: string[];
  location: number[];
}

function matching(userA: UserWithPrefs, userArray: User[]) {
  const prefs = userA.userPrefs; //Stores the user's prefs in a variable

  //First we check if the generated user's age and gender match with Sample User's prefs, otherwise they won't show up in the matching process
  userArray.map((user) => {
    if (prefs.age.includes(user.age) && prefs.gender.includes(user.gender)) {

      //Checking if the user's languages match with the Sample User's prefs
      user.languages.map((l) =>
        prefs.languages.includes(l) ? user.affinityScore++ : "" // Every matching statement adds 1 point to the user's affinity score
      );

      //Same with hobbies
      user.hobbies.map((h) =>
        userA.hobbies.includes(h) ? user.affinityScore++ : ""
      );

      //Checks if user's location matches with Sample User's location (no coordinates here, just a number representing the distance)
      if (prefs.location.includes(user.location)) {
        user.affinityScore++;
      }

      //If the user's affinity score is greater than 3, it's a top profile, it logs the user's info
      if (user.affinityScore >= 3) {
        console.log(
          `\n${user.name} is a top profile for ${
            userA.name
          }\n scored: ${user.affinityScore} points! \nThe profile's \ngender: ${user.gender} \nlanguages: ${user.languages}, \nhobbies: ${user.hobbies}, \nlocation: ${user.location}\n`
        );
        
        //If the user's affinity score is less than 3, it only logs the affinity score
      } else {
        console.log(
          `${userA.name} affinity score with ${user.name} is : ${user.affinityScore}`
        );
      }
    }
  });
}

//You can edit this user with values from hobbies.ts and languages.ts
const sampleUser: UserWithPrefs = {
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
    age: [20, 21, 22, 23, 24, 25, 26, 27], //Select age range
    gender: ["female"],
    languages: ["javascript", "php"],
    location: Array.from({ length: 100 - 0 + 1 }, (_, i) => i), //Set max distance in the length property (default: 100)
  },
};

matching(sampleUser, usersArray);

export default matching;
