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
    let userActivities = this.data.filter(function(activity) {
      return (activity.userID === userID && (activity.date >= dateRange[0] && activity.date <= dateRange[1]))
    });
    let userActiveMin = userActivities.map(function(activity) {
      return activity.minutesActive;
    })
    return userActiveMin.reduce(function(acc, arr) {
      return (acc + arr);
    },0)
  }
  checkUserStepGoalByDate(userID, date) {
    const userRepo = new UserRepository(userData);
    const dailyStepGoal = userRepo.getUserInfo(userID).dailyStepGoal;
    const stepAmount = this.getUserStepAmount(userID, date);

    return stepAmount >= dailyStepGoal;
  }
  getAllExceededStepGoalDates(userID) {
    const userRepo = new UserRepository(userData);
    const dailyStepGoal = userRepo.getUserInfo(userID).dailyStepGoal;

    let userActivities = this.data.filter(function(activity) {
      return activity.userID === userID;
    });
    let activitiesArray = userActivities.map(function(activity) {
      if(activity.numSteps >= dailyStepGoal){
        return activity.date;
      }
    });
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


// getAvgActivity(activity, date)
// findMostActiveUser() ** // Get user with the most days of activity
