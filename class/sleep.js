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

  // getSleepQualityByWeek(userID, dateRange) {
  //   let entries = this.data.filter(user => {
  //     return (user.userID === userID && (user.date >= dateRange[0] && user.date <= dateRange[1]));
  //   });
  //
  //   return entries.reduce((acc, date) => {
  //     acc.push({ date:date.date, sleepQuality: date.sleepQuality });
  //
  //     return acc;
  //   }, []);
  // }

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
    // let sleepEntriesByWeek = [];
    let highQualitySleepers = [];

    userRepo.data.forEach(user => userIds.push(user.id));

    let sleepEntriesByWeek = this.data.filter(entry => entry.date >= dateRange[0] && entry.date <= dateRange[1]);

    let usersEntries = [];
    userIds.forEach(id => {
      usersEntries.push(sleepEntriesByWeek.filter(entry => entry.userID === id));
    });
    console.log(usersEntries);

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

    console.log(highQualitySleepers);

    // Filter all entries by dateRange
    // Filter all entries in dateRange by user.
      // Reduce to calculate avg for week by user
      // If users average > 3 add to array.


    // console.log('users ids: ' + userIds);
    // userIds.forEach(id => {
    //   return sleepEntriesByWeek.push(this.data.filter(user => user.userID === id && (this.data.date >= dateRange[0] && this.data.date <= dateRange[1])));
    // });
    //
    // console.log('sleep entries by week: ' + sleepEntriesByWeek);

    // let filterSleepersByDate = userIds.reduce((acc, sleepEntry) => {
    //   if (this.data.date >= dateRange[0] && this.data.date <= dateRange[1]) {
    //     acc.push()
    //   }
    //
    //   return acc;
    // },[])
  }



  // For each user grab entries for given week.
  // If users sleep quality is > 3 for given week push to array
  // return array of users whos quality is > 3 for given week.


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


// Methods:

// findWorstSleeper(date) ** // Get user with least amount of total sleep
//
