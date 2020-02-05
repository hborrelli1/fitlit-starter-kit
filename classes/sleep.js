class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  getAvgDailySleep(userID) {
    let userInfo = this.data.filter(user => user.userID === userID);

    let totalHoursSlept = userInfo.reduce((total, sleepEntry) => {
      total += sleepEntry.hoursSlept;

      return total;
    }, 0);

    let avg = totalHoursSlept / userInfo.length;

    return Number(avg.toFixed(1));
  }

  getAvgTotalSleepQuality(userID) {
    let userInfo = this.data.filter(user => user.userID === userID);

    let avgHoursSlept = userInfo.reduce((total, sleepEntry) => {
      total += sleepEntry.sleepQuality;

      return total;
    }, 0);

    let avg = avgHoursSlept / userInfo.length;

    return Number(avg.toFixed(1));
  }

  // getSleepAmountByDate(userID, date)
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}


// Methods:

// getSleepQualityByDate(userID, date)
// getSleepAmountByWeek(userID, dateRange)
// getSleepQualityByWeek(userID, dateRange)
// getAllUsersAvgSleepQuality()
// findAllHighQualitySleepers(dateRange)
// getUserWhoSleptMost(date)
// findWorstSleeper(date) ** // Get user with least amount of total sleep
//
