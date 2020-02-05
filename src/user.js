class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends
  }
  returnUsersFirstName() {
    return (this.name.split(' ')).shift();
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
