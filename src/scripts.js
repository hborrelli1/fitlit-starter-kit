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
const hoursOfSleep = document.getElementById('hoursOfSleep');
const qualityOfSleep = document.getElementById('qualityOfSleep');
const weeklySleepList = document.getElementById('weeklySleepList');

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
let sleepDataset = new Sleep(sleepData);

let todaysDate = '2019/09/22';
let lastDate = '2019/09/16';

let userWaterConsumption = hydrationDataset.getTotalConsumedByDate(randNum, todaysDate);
console.log(userWaterConsumption);



function populateWeeklyWaterConsumption() {
  let weeklyConsumption = hydrationDataset.getWeeklyConsumption(randNum, [todaysDate, lastDate]);
  console.log(weeklyConsumption);

  let fullWeek = '';

  let totalForWeek = weeklyConsumption.reduce((acc, day) => {
    let date = day.date.substring(5);
    fullWeek += `<div>
      <span class="day-of-week">${date}</span>
      <span>${day.numOfOunces}</span>
    </div>`;
    // acc++;
    return acc;
  }, 0);

  // console.log(totalForWeek);
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

const populateHoursOfSleep = () => {
  hoursOfSleep.innerHTML = sleepDataset.getSleepAmountByDate(randNum, todaysDate);
}

populateHoursOfSleep();


const populateQualityOfSleep = () => {
  qualityOfSleep.innerHTML = sleepDataset.getSleepQualityByDate(randNum, todaysDate);
}

populateQualityOfSleep();



function populateWeeklySleepInfo(randNum, dateRange) {
  let weeklySleep = sleepDataset.getSleepAmountByWeek(randNum, [todaysDate, lastDate]);
  console.log(weeklySleep);

  let fullWeek = '';

  let totalForWeek = weeklySleep.reduce((acc, day) => {
    let date = day.date.substring(5);
    fullWeek += `<div>
      <span class="day-of-week">${date}</span>
      <span>${day.hoursSlept} h</span>
      <span>${day.sleepQuality} q</span>
    </div>`;
    acc;
    return acc--;
  }, 6);

  console.log(fullWeek);
  weeklySleepList.insertAdjacentHTML('beforeend', fullWeek);
}

populateWeeklySleepInfo(randNum, [todaysDate, lastDate]);
