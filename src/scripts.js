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

let todaysDate = '2019/09/22';
let lastDate = '2019/09/16';


let userWaterConsumption = hydrationDataset.getTotalConsumedByDate(randNum, todaysDate);
console.log(userWaterConsumption);

let weeklyConsumption = hydrationDataset.getWeeklyConsumption(randNum, [todaysDate, lastDate]);
console.log(weeklyConsumption);

function populateWeeklyWaterConsumption() {
  // let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let fullWeek = '';

  let totalForWeek = weeklyConsumption.reduce((acc, day) => {
    let date = day.date.substring(5);
    fullWeek += `<div>
      <span class="day-of-week">${date}</span>
      <span id="waterConsumption-0">${day.numOfOunces}</span>
    </div>`;
    acc--;
    return acc;
  }, 6);

  console.log(totalForWeek);
  weeklyConsumptionList.insertAdjacentHTML('beforeend', fullWeek);

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
