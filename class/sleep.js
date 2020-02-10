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

  getSleepInfoByWeek(userID, dateRange) {
    let entries = this.data.filter(user => {
      return (user.userID === userID && (user.date >= dateRange[0] && user.date <= dateRange[1]));
    });

    return entries.reduce((acc, date) => {
      acc.push({ date: date.date, hoursSlept: date.hoursSlept, sleepQuality: date.sleepQuality });

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

  findAllHighQualitySleepers(dateRange) {
    let userIds = [];
    let usersEntries = [];
    let highQualitySleepers = [];

    // Push all userIds into `userIds` array.
    userRepo.data.forEach(user => userIds.push(user.id));

    // Get dates between the date range
    let sleepEntriesByWeek = this.data.filter(entry => entry.date >= dateRange[0] && entry.date <= dateRange[1]);

    // Create an array of arrays with each users weekly entries
    userIds.forEach(id => {
      usersEntries.push(sleepEntriesByWeek.filter(entry => entry.userID === id));
    });

    // For each weekly entry, get average sleep quality.
    // If sleep quality is > 3, add usersId to
    // `highQualitySleepers` array.
    usersEntries.forEach((week, index) => {
      let weeklyTotal = week.reduce((acc, day) => {
        acc += day.sleepQuality;

        return acc;
      }, 0);

      let avg = weeklyTotal / week.length;
      if (avg >= 3) {
        highQualitySleepers.push(index + 1);
      }
    });

    return highQualitySleepers;
  }

  getUserWhoSleptMost(date) {
    let sleepForDate = this.data.filter(user => user.date === date);

    return sleepForDate.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[0];
  }

  findWorstSleeper(date) {
    let sleepForDate = this.data.filter(user => user.date === date);

    return sleepForDate.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[sleepForDate.length - 1];
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
