class Hydration {
  constructor(userData) {
    this.hydrationEvents = userData || null;
  }

  getAvgConsumedAllTime(userID) {
    let usersEvents = this.hydrationEvents.filter(user => user.userID === userID);

    let total = usersEvents.reduce((acc, user) => {
      acc += user.numOunces;

      return acc;
    }, 0);

    return total / usersEvents.length;
  }

  getTotalConsumedByDate(userID, date) {
    let usersEvents = this.hydrationEvents.filter(user => user.userID === userID && user.date === date);

    return usersEvents.reduce((acc, user) => {
      acc += user.numOunces;

      return acc;
    }, 0)
  }

  getWeeklyConsumption(userID, dateRange) {
    let usersEvents = this.hydrationEvents.filter(user => (user.userID === userID && (user.date >= dateRange[0] && user.date <= dateRange[1])));

    return usersEvents.reduce((acc, event) => {
      acc.push({date: event.date, numOfOunces: event.numOunces});

      return acc;
    }, []);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}


// getAvgConsumedAllTime(userID)
// getTotalConsumedByDate(userID, date)
// getWeeklyConsumption(userID, dateRange)
