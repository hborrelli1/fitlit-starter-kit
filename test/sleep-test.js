const chai = require("chai");
const expect = require('chai').expect;
const Sleep = require('../classes/sleep');
const sleepData = require('./datasets/sleep-sample-data');

describe('Sleep Tests', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(sleepData);
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
  });

});
