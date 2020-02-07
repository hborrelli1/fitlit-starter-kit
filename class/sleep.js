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

  getSleepAmountByDate(userID, date) {
    let entry = this.data.find(user => {
      return user.userID === userID && user.date === date;
    });
    return entry.hoursSlept;
  }

  getSleepQualityByDate(userID, date) {
    let entry = this.data.find(user => {
      return user.userID === userID && user.date === date;
    });

    return entry.sleepQuality;
  }

  getSleepAmountByWeek(userID, dateRange) {
    let entries = this.data.filter(user => {
      return (user.userID === userID && (user.date <= dateRange[0] && user.date >= dateRange[1]));
    });

    return entries.reduce((acc, date) => {
      acc.push({ date: date.date, hoursSlept: date.hoursSlept, sleepQuality: date.sleepQuality });

      return acc;
    }, []);
  }

  getSleepQualityByWeek(userID, dateRange) {
    let entries = this.data.filter(user => {
      return (user.userID === userID && (user.date >= dateRange[0] && user.date <= dateRange[1]));
    });

    return entries.reduce((acc, date) => {
      acc.push({ date:date.date, sleepQuality: date.sleepQuality });

      return acc;
    }, []);
  }

  getAllUsersAvgSleepQuality() {
    let total = this.data.reduce((total, entry) => {
      return total += entry.sleepQuality;

      return acc;
    },0);
    let avg = total / this.data.length;
    return Number(avg.toFixed(1));
  }

  // findAllHighQualitySleepers(dateRange)

  // get entries for a


  getUserWhoSleptMost(date) {
    let sleepForDate = this.data.filter(user => user.date === date);

    return sleepForDate.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[0];
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}


// Methods:

// findWorstSleeper(date) ** // Get user with least amount of total sleep
//
