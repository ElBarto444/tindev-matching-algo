import hobbies from "./hobbies";
import languages from "./languages";
import type { User } from ".";

const hobbiesArray = hobbies;
const languagesArray = languages;

function removeUsingSet(arr: string[]) {
  let outputArray = Array.from(new Set(arr))
  return outputArray
}

export function userGenerator(userArray: User[] = []) {
  const gender = ["male", "female", "any"];
  const location = Math.floor(Math.random() * 800);

  for (let i = 0; i < 50; i++) {
    const name = "user" + i;
    const age = 18 + Math.floor(Math.random() * 42);
    const userHobbies = Array.from(
      { length: 5 },
      (hobby) => hobbiesArray[Math.floor(Math.random() * hobbiesArray.length)]
    );
    const userGender = gender[Math.floor(Math.random() * gender.length)];
    const userLanguages = Array.from(
        { length: 5 },
        (language) => languagesArray[Math.floor(Math.random() * languagesArray.length)]
      );
    // const agePref = Array.from({ length: Math.floor(Math.random() * 42) }, (_, i) => i + 18).sort();
    // const genderPref = [gender[(Math.floor(Math.random() * gender.length))]];

    const user: User = {
      name: name,
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

export default userGenerator;
