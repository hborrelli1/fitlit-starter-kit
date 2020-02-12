class UserRepository {
  constructor(userData) {
    this.data = userData;
  }
  getUserInfo(userID) {
    return this.data.find((userInfo) => {
      return userInfo.id === userID;
    });
  }
  calculateAvgTotalStepGoal() {
    let sumOfAllStepGoals = this.data.reduce((acc, userInfo) => {
      return acc + userInfo.dailyStepGoal;
    }, 0);
    return sumOfAllStepGoals / this.data.length;
  }
  getFriends(idArray) {
    let friendsNames = idArray.map((id) => {
      return this.data.find((userInfo) => {
        return userInfo.id === id;
      }).name;
    });
    return friendsNames;
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
