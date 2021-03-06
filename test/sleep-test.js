// const chai = require("chai");
const expect = require('chai').expect;
const userData = require('../data/users');
const Sleep = require('../class/sleep');
const UserRepository = require('../class/user-repository');

const sleepData = require('./datasets/sleep-sample-data');
// const userData = require('../data/users');
// const userRepo = new UserRepository(userData);

describe('Sleep Tests', () => {
  let sleep;
  let userRepo;

  beforeEach(() => {
    sleep = new Sleep(sleepData);
    userRepo = new UserRepository(userData);
  });

  describe('class initialization', () => {
    it('should be able to instantiate the Sleep class', () => {
      expect(sleep).to.be.an.instanceof(Sleep);
    });

    it('should be able to take in sleep data', () => {
      expect(sleep.data.length).to.equal(8);
    });
  });

  describe('testing methods', () => {
    it('should be able to calculate the average number of hours slept per day', () => {
      expect(sleep.getAvgDailySleep(4)).to.equal(9.5);
      expect(sleep.getAvgDailySleep(2)).to.equal(6.7);
    });

    it('should be able to calculate the average sleep quality per day over all time', () => {
      expect(sleep.getAvgTotalSleepQuality(5)).to.equal(3.6);
      expect(sleep.getAvgTotalSleepQuality(4)).to.equal(2.8);
    });

    it('should be able to calculate how many hours they slept for a specific day', () => {
      expect(sleep.getSleepAmountByDate(2, '2019/06/15')).to.equal(7);
      expect(sleep.getSleepAmountByDate(2, '2019/07/15')).to.equal(6.3);
    });

    it('should be able to return sleep quality for a specified day', () => {
      expect(sleep.getSleepQualityByDate(1, '2019/06/15')).to.equal(2.2);
      expect(sleep.getSleepQualityByDate(4, '2019/06/15')).to.equal(2.5);
    });

    it('should be able to calculate how many hours slept each day over the course of a given week (7 days)', () => {
      expect(sleep.getSleepInfoByWeek(4, ['2019/06/14', '2019/06/21'])).to.deep.equal([{date: '2019/06/16', hoursSlept: 10.4, sleepQuality: 3}, {date: '2019/06/15', hoursSlept: 9.4, sleepQuality: 2.5}, {date: '2019/06/14', hoursSlept: 8.8, sleepQuality: 3}]);
    });

    // it('should be able to calculate their sleep quality each day over the course of a given week (7 days)', () => {
    //   expect(sleep.getSleepQualityByWeek(5, ['2019/06/14', '2019/06/21'])).to.deep.equal([{date: '2019/06/15', sleepQuality: 3.6}]);
    //   expect(sleep.getSleepQualityByWeek(4, ['2019/06/14', '2019/06/21'])).to.deep.equal([{date: '2019/06/16', sleepQuality: 3}, {date: '2019/06/15', sleepQuality: 2.5}, {date: '2019/06/14', sleepQuality: 3}]);
    // });

    it('should be able to get the average sleep quality for all users', () => {
      expect(sleep.getAllUsersAvgSleepQuality()).to.equal(3.5);
    });

    it('should be able return users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week', () => {
      userRepo = new UserRepository(userData);
      expect(sleep.findAllHighQualitySleepers(['2019/06/14', '2019/06/21'])).to.deep.equal([2, 3, 5]);
    });

    it('should be able to find the user who slept the most number of hours (one or more if they tied)', () => {
      expect(sleep.getUserWhoSleptMost('2019/06/15')).to.deep.equal({
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      });
    });

    it('should be able to best sleep quality record for a user', () => {
      expect(sleep.findSleepQualityRecord(4)).to.equal(3);
      expect(sleep.findSleepQualityRecord(2)).to.equal(4.7);
    });

  });
});
