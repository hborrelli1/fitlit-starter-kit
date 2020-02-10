
class Activity {
  constructor(data) {
    this.data = data;
  }
  getDistanceByDate(userID, date) {
    const mile = 5280;
    const strideLength = userRepo.getUserInfo(userID).strideLength;
    const stepAmount = this.getUserStepAmount(userID, date);

    return parseFloat(((strideLength * stepAmount) / mile).toFixed(2));
  }
  getUserStepAmount(userID, date) {
    return this.data.find(function(user) {
      return ((user.userID === userID) && (user.date === date));
    }).numSteps;
  }
  getActivityDurationByDate(userID, date) {
    return this.data.find(function(user) {
      return ((user.userID === userID) && (user.date === date));
    }).minutesActive;
  }
  getActivityByWeek(userID, activityType, dateRange) {
    let userActivities = this.data.filter(function(activity) {
      return (activity.userID === userID && (activity.date >= dateRange[0] && activity.date <= dateRange[1]))
    });
    let userActivityType = userActivities.map(function(activity) {
      return activity[activityType];
    });
    return userActivityType.reduce(function(acc, arr) {
      return (acc + arr);
    },0);
  }
  checkUserStepGoalByDate(userID, date) {
    const dailyStepGoal = userRepo.getUserInfo(userID).dailyStepGoal;
    const stepAmount = this.getUserStepAmount(userID, date);

    return stepAmount >= dailyStepGoal;
  }
  getAllExceededStepGoalDates(userID) {
    const dailyStepGoal = userRepo.getUserInfo(userID).dailyStepGoal;

    let userActivities = this.data.filter(function(activity) {
      return activity.userID === userID;
    });
    let activitiesArray = userActivities.reduce((acc, activity) => {
      if(activity.numSteps >= dailyStepGoal) {
        acc.push(activity.date);
      }
      return acc;
    },[])

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
  getAvgActivity(activity, date) {
    let userActivities = this.data.filter(function(activity) {
      return activity.date === date;
    });
    let activityAmounts = userActivities.map(function(activityObj) {
      return activityObj[activity];
    });
    return activityAmounts.reduce(function(acc, arr) {
      return (acc + arr);
    },0);
  }
  findUserActivityStanding(userID, activity, date){
     const currentUser = userRepo.getUserInfo(userID);

     const userActivityDuration = this.getActivityDurationByDate(userID, date);
     const averageActivityDurationAllUsers = this.getAvgActivity(activity, date);

     return `On this day you had ${userActivityDuration} minutes of activity while the average amount of activity for all users was ${averageActivityDurationAllUsers} minutes`
  }
  // findMostActiveUser(userID, date){
  //   const currentUser = userRepo.getUserInfo(userID);
  //   const usersFriends = currentUser.friends;
  //
  //   console.log(currentUser);
  //   console.log(usersFriends);
  //
  //   getDistanceByDate(userID, date);
  // }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
