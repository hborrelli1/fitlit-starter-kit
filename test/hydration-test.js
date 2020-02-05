const chai = require("chai");
const expect = require('chai').expect;
const Hydration = require('../classes/hydration');
const hydrationData = require('./data/hydration-sample-data');

describe('Hydration', () => {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration(hydrationData);
  });

  describe('class initialization', () => {
    it('should be able to instantiate an instance of the hydration class', () => {
      expect(hydration).to.be.an.instanceof(Hydration);
    });

    it('should be able to take in hydration events', () => {
      expect(hydration.hydrationEvents.length).to.equal(6);
    });
  });

  describe('testing methods', () => {
    it('should be able to get users average consumed water of all time.', () => {
      expect(hydration.getAvgConsumedAllTime(1)).to.equal(40);
    });

    it('should be able to get users total amount of water consumed by date', () => {
      expect(hydration.getTotalConsumedByDate(3, '2019/06/16')).to.equal(47);
    });

    it('should be able to get users weekly water consumption', () => {
      expect(hydration.getWeeklyConsumption(1, ['2019/07/18', '2019/07/25'])).to.deep.equal([{date: '2019/07/18', numOfOunces: 37},{date: '2019/07/25', numOfOunces: 43}]);
    })
  });



})
