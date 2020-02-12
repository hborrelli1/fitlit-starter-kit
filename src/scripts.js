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

const stepsTotalWeek = document.getElementById('steps-total-week');
const stairsTotalWeek = document.getElementById('stairs-total-week');
const stepGoalStatusDay = document.getElementById('step-goal-status-day');
const stepGoalStatusAll = document.getElementById('step-goal-status-week');
const stairClimbingRecord = document.getElementById('stair-climbing-record');
const stairClimbingAverage = document.getElementById('stair-climbing-average');
const stepAverage = document.getElementById('step-average');
const minutesAverage = document.getElementById('minutes-average');
const mileageRecord = document.getElementById('mileage-record');

const hoursOfSleep = document.getElementById('hoursOfSleep');
const qualityOfSleep = document.getElementById('qualityOfSleep');
const weeklySleepList = document.getElementById('weeklySleepList');
const allTimeSleepQuality = document.getElementById('allTimeSleepQuality');
const allTimeSleepHours = document.getElementById('allTimeSleepHours');
const qualityOfSleepRecord = document.getElementById('qualityOfSleepRecord');

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

  // console.log(totalForWeek);
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


// Activity related DOM
let activity = new Activity(activityData);

function stepGoalFeedback() {
  let response
  let result = activity.checkUserStepGoalByDate(randNum, todaysDate);
  if(result === true) {
    response = 'met';
  } else {
    response = 'did not meet';
  }
  return response;
};


let stepGoalStats = activity.getAllExceededStepGoalDates(randNum);

function getStepGoalPercentage() {

}

activity.getDistanceRecord(randNum);

userStepAmount.innerText = activity.getUserStepAmount(randNum, todaysDate);
userMileage.innerText = activity.getDistanceByDate(randNum, todaysDate);
activityTotalDay.innerText = activity.getActivityDurationByDate(randNum, todaysDate);
activityTotalWeek.innerText = activity.getActivityByWeek(randNum, 'minutesActive', [lastDate, todaysDate]);
stairsTotalWeek.innerText = activity.getActivityByWeek(randNum, 'flightsOfStairs', [lastDate, todaysDate]);
stepsTotalWeek.innerText = activity.getActivityByWeek(randNum, 'numSteps', [lastDate, todaysDate]);
stepGoalStatusDay.innerText = stepGoalFeedback();
// stepGoalStatus.innerText = activity.getAllExceededStepGoalDates(randNum);
stairClimbingRecord.innerText = activity.getStairClimbingRecord(randNum);
stairClimbingAverage.innerText = activity.getAvgActivity('flightsOfStairs', todaysDate);
stepAverage.innerText = activity.getAvgActivity('numSteps', todaysDate);
minutesAverage.innerText = activity.getAvgActivity('minutesActive', todaysDate);
mileageRecord.innerText = activity.getDistanceRecord(randNum);
// Populate Hours of sleep
const populateHoursOfSleep = () => {
  hoursOfSleep.innerHTML = sleepDataset.getSleepAmountByDate(randNum, todaysDate);
}

// Populate Quantity of sleep
const populateQualityOfSleep = () => {
  qualityOfSleep.innerHTML = sleepDataset.getSleepQualityByDate(randNum, todaysDate);
}

// Populate weekly sleep info
const populateWeeklySleepInfo = (randNum, dateRange) => {
  let weeklySleep = sleepDataset.getSleepInfoByWeek(randNum, [lastDate, todaysDate]);
  let fullWeek = '';
  weeklySleep.reduce((acc, day) => {
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

const populateAllTimeAvgSleepQuality = () => {
  allTimeSleepQuality.innerHTML = sleepDataset.getAvgTotalSleepQuality(randNum);
}

const populateAllTimeAvgSleepHours = () => {
  allTimeSleepHours.innerHTML = sleepDataset.getAvgDailySleep(randNum);
}

const populateQualityOfSleepRecord = () => {
  qualityOfSleepRecord.innerHTML = sleepDataset.findSleepQualityRecord(randNum);
}

// const populateSleepInfoDOM = (randNum, todaysDate, lastDate) => {
//
// }
populateHoursOfSleep();
populateQualityOfSleep();
populateWeeklySleepInfo(randNum, [todaysDate, lastDate]);
populateAllTimeAvgSleepQuality();
populateAllTimeAvgSleepHours();
populateQualityOfSleepRecord();
