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
const allTimeSleepQuality = document.getElementById('allTimeSleepQuality');
const allTimeSleepHours = document.getElementById('allTimeSleepHours');

// Initialize Data
const userRepo = new UserRepository(userData);
const allStepGoals = userRepo.calculateAvgTotalStepGoal();
let randNum = Math.floor(Math.random() * 50) + 1;
let currentUser = new User(userRepo.getUserInfo(randNum));
let names = userRepo.getFriends(currentUser.friends);

// Add Friends
function addFriendNames(){
  let friends = names.map(function(name){
    return `<li>${name}</li>`
  })
  return friends.join(' ');
}

// Get hydration info
let hydrationDataset = new Hydration(hydrationData);
let sleepDataset = new Sleep(sleepData);

// Set todays date and previous week date.\
let todaysDate = '2019/09/22';
let lastDate = '2019/09/16';

// Get water consumption
let userWaterConsumption = hydrationDataset.getTotalConsumedByDate(randNum, todaysDate);


// Populate Water Consumption
const populateWeeklyWaterConsumption = () => {
  let weeklyConsumption = hydrationDataset.getWeeklyConsumption(randNum, [todaysDate, lastDate]);
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

  weeklyConsumptionList.insertAdjacentHTML('beforeend', fullWeek);
}

populateWeeklyWaterConsumption();


// Populate DOM with User information
const populateWaterConsumption = () => {
  waterComsumptionToday.innerHTML = userWaterConsumption;
}

populateWaterConsumption();


firstName.innerHTML = `Welcome back, ${currentUser.returnUsersFirstName()}!`;
userName.innerText = currentUser.name;
address.innerText = currentUser.address;
email.innerText = currentUser.email;
strideLength.innerText = currentUser.strideLength;
dailyStepGoal.innerText = currentUser.dailyStepGoal;
friends.innerHTML = addFriendNames(names);
totalStepGoal.innerText = allStepGoals;

// Populate Hours of sleep
const populateHoursOfSleep = () => {
  hoursOfSleep.innerHTML = sleepDataset.getSleepAmountByDate(randNum, todaysDate);
}

populateHoursOfSleep();

// Populate Quantity of sleep
const populateQualityOfSleep = () => {
  qualityOfSleep.innerHTML = sleepDataset.getSleepQualityByDate(randNum, todaysDate);
}

populateQualityOfSleep();


// Populate weekly sleep info
const populateWeeklySleepInfo = (randNum, dateRange) => {
  let weeklySleep = sleepDataset.getSleepAmountByWeek(randNum, [todaysDate, lastDate]);
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

  weeklySleepList.insertAdjacentHTML('beforeend', fullWeek);
}

populateWeeklySleepInfo(randNum, [todaysDate, lastDate]);

const populateAllTimeAvgSleepQuality = () => {
  allTimeSleepQuality.innerHTML = sleepDataset.getAvgTotalSleepQuality(randNum);
}

populateAllTimeAvgSleepQuality();

const populateAllTimeAvgSleepHours = () => {
  allTimeSleepHours.innerHTML = sleepDataset.getAvgDailySleep(randNum);
}

populateAllTimeAvgSleepHours();
