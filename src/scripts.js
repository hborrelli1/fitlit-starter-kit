const userName = document.getElementById('userName');
const address = document.getElementById('address');
const email = document.getElementById('email');
const strideLenth = document.getElementById('strideLenth');
const dailyStepGoal = document.getElementById('dailyStepGoal');
const friends = document.getElementById('friends');
const firstName = document.getElementById('firstName');
const totalStepGoal = document.getElementById('totalStepGoal');
const waterComsumptionToday = document.getElementById('waterComsumptionToday');
const weeklyConsumptionList = document.getElementById('weeklyConsumptionList');
const userStepAmount = document.getElementById('user-step-amount');
const userMileage = document.getElementById('user-mileage');
const activityTotalDay = document.getElementById('activity-total-day');
const activityTotalWeek = document.getElementById('activity-total-week');
const stepGoalStatusDay = document.getElementById('step-goal-status');
const stepGoalStatusWeek = document.getElementById('step-goal-status-week');
const stairClimbingRecord = document.getElementById('stair-climbing-record');
const stairClimbingAverage = document.getElementById('stair-climbing-average');
const stepAverage = document.getElementById('step-average');
const minutesAverage = document.getElementById('minutes-average');


let userRepo = new UserRepository(userData);
const allStepGoals = userRepo.calculateAvgTotalStepGoal();
let randNum = Math.floor(Math.random() * 50) + 1;
let currentUser = new User(userRepo.getUserInfo(randNum));
let names = userRepo.getFriends(currentUser.friends);

function addFriendNames(){
  let friends = names.map(function(name){
    return `<li>${name}</li>`
  })
  return friends.join(' ');
}

let hydrationDataset = new Hydration(hydrationData);

let todaysDate = '2019/09/21';
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

firstName.innerHTML = `Welcome back, ${currentUser.returnUsersFirstName()}!`;
userName.innerText = currentUser.name;
address.innerText = currentUser.address;
email.innerText = currentUser.email;
strideLength.innerText = currentUser.strideLength;
dailyStepGoal.innerText = currentUser.dailyStepGoal;
friends.innerHTML = addFriendNames(names);
totalStepGoal.innerText = allStepGoals;


// Activity related DOM
