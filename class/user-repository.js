const userList = require('../data/users');

class UserRepository {
  constructor(userList) {
    this.data = userList;
  }
  getUserInfo(userID) {
    return this.data.find(function(userInfo) {
      return userInfo.id === userID;
    })
  }
  calculateAvgTotalStepGoal() {
    let sumOfAllStepGoals = this.data.reduce(function(acc, userInfo) {
      return acc + userInfo.dailyStepGoal;
    }, 0)
    return sumOfAllStepGoals / this.data.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
