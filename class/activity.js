const UserRepository = require('../class/user-repository');
const userData = require('../test/datasets/user-sample-data');

class Activity {
  constructor(data) {
    this.data = data;
  }
  getDistanceByDate(userID, date){
    const mile = 5280;
    const userRepo = new UserRepository(userData);
    const strideLength = userRepo.getUserInfo(userID).strideLength;
    const stepAmount = this.getUserStepAmount(userID, date);

    return parseFloat(((strideLength * stepAmount) / mile).toFixed(2));
  }
  getUserStepAmount(userID, date) {
    return this.data.find(function(user) {
      return ((user.userID === userID) && (user.date === date));
    }).numSteps
  }
  getActivityDurationByDate(userID, date) {
    return this.data.find(function(user) {
      return ((user.userID === userID) && (user.date === date))
    }).minutesActive;
  }
  getActivityByWeek(userID, dateRange) {

  }
  checkUserStepGoalByDate(userID, date) {
    const userRepo = new UserRepository(userData);
    const dailyStepGoal = userRepo.getUserInfo(userID).dailyStepGoal;
    const stepAmount = this.getUserStepAmount(userID, date);

    return stepAmount >= dailyStepGoal;
  }
  getAllExceededStepGoalDates(userID) {
    // given a userID, pull the user's step goal from the user repository.
    // pull all activity records for that user ID and put them in an array
    // search all user records and return all dates they exceeded their goal
    const userRepo = new UserRepository(userData);
    const dailyStepGoal = userRepo.getUserInfo(userID).dailyStepGoal;

    let userActivities = this.data.filter(function(activity) {
      return activity.userID === userID;
    });
    let activitiesArray = userActivities.map(function(activity) {
      return activity.numSteps >= dailyStepGoal
    }).date;
    return activitiesArray;
  }
  getStairClimbingRecord(userID) {
    let userActivities = this.data.filter(function(activity) {
      return activity.userID === userID;
    });
    let activitiesArray = userActivities.map(function(activity) {
      return activity.flightsOfStairs;
    });
    return Math.max(...activitiesArray);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}


// getActivityByWeek(userID, dateRange)

// getAllExceededStepGoalDates(userID)

// getAvgActivity(activity, date)
// findMostActiveUser() ** // Get user with the most days of activity
