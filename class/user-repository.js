class UserRepository {
  constructor(userData) {
    this.data = userData;
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
  getFriends(idArray) {
    let friendsNames = idArray.map(function(id) {
      return this.data.find(function(userInfo) {
        return userInfo.id === id;
      }).name;
    }.bind(this))
    return friendsNames;
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
