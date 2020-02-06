const userName = document.getElementById('userName');
const address = document.getElementById('address');
const email = document.getElementById('email');
const strideLenth = document.getElementById('strideLenth');
const dailyStepGoal = document.getElementById('dailyStepGoal');
const friends = document.getElementById('friends');
const waterComsumptionToday = document.getElementById('waterComsumptionToday');
const weeklyConsumptionList = document.getElementById('weeklyConsumptionList');

let userRepo = new UserRepository(userData);
let randNum = Math.floor(Math.random() * 50) + 1;
let currentUser = userRepo.getUserInfo(randNum);
let hydrationDataset = new Hydration(hydrationData);

let todaysDate = '2019/09/15';
let lastDate = '2019/09/21';
/*
page loads
userID generated
userRepo created
hydration for user is fetched

*/
let userWaterConsumption = hydrationDataset.getTotalConsumedByDate(randNum, todaysDate);
console.log(userWaterConsumption);

let weeklyConsumption = hydrationDataset.getWeeklyConsumption(randNum, [todaysDate, lastDate]);
console.log(weeklyConsumption);

function populateWeeklyWaterConsumption() {
  let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let fullWeek = '';

  let totalForWeek = weeklyConsumption.reduce((acc, day) => {
    fullWeek += `<div>
      <span class="day-of-week">${days[acc]}</span>
      <span id="waterConsumption-0">${day.numOfOunces}</span>
    </div>`;
    acc++;
    return acc;
  }, 0);

  console.log(totalForWeek);
  weeklyConsumptionList.insertAdjacentHTML('beforeend', fullWeek);

  // for (var i = 0; i < weeklyConsumption.length; i++){
  //   let dayOfWeek = `#waterConsumption-${i}`;
  //   document.querySelector(dayOfWeek).innerHTML = weeklyConsumption[i].numOfOunces;
  // }

}
populateWeeklyWaterConsumption();

waterComsumptionToday.innerHTML = userWaterConsumption;

// function getHydrationInfo(userID) {
//
// }
// creat array of currentUsers friends (objects)
// Loop through each object to push name (li with name) to usersFriends below.
// usersFriends then gets pushed to the friends element.

// Populate user information in dom
userName.innerText = currentUser.name;
address.innerText = currentUser.address;
email.innerText = currentUser.email;
strideLength.innerText = currentUser.strideLength;
dailyStepGoal.innerText = currentUser.dailyStepGoal;

// Populate Hydration information
// waterComsumptionToday.innerText =



// let usersFriends = '';

// currentUser.friends.forEach(friend => usersFriends += friend.friends);
// console.log(usersFriends);

// friends.insertAdjacentHTML('beforeend', usersFriends);


// Grab user from userRepository by id (randNum)

// Instantiate as currentUser
