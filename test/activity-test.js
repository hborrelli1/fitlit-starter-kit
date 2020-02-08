const chai = require('chai');
const expect = require('chai').expect;
const Activity = require('../class/activity');
const activityData = require('./datasets/activity-sample-data');
const userData = require('./datasets/user-sample-data');

describe('Activity', function() {

  beforeEach(function(){
    activity = new Activity(activityData);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should instantiate a new instance of the Activity class', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should be able to take in activity data', function() {
    expect(activity.data.length).to.equal(10);
  });

  it('should be able to get a user\'s step amount', function() {
    expect(activity.getUserStepAmount(3, '2019/06/15')).to.equal(7402);
  });

  it('should be able to calculate distance by date', function() {
    expect(activity.getDistanceByDate(3, '2019/06/15')).to.equal(6.17);
  });

  it('should be able to calculate distance by date', function() {
    expect(activity.getActivityDurationByDate(3, '2019/06/15')).to.equal(116);
  });

  // it('should be able to calculate distance by week', function() {
  //   expect(activity.getActivityByWeek(3, )).to.equal();
  // });

  it('should be able to check if a user did not meet their step goal on a given date', function() {
    expect(activity.checkUserStepGoalByDate(1, '2019/06/15')).to.equal(false);
  });

  it('should be able to check if a user met their step goal on a given date', function() {
    expect(activity.checkUserStepGoalByDate(3, '2019/06/15')).to.equal(true);
  });

  it('should return all dates a user has exceeded their step goal', function() {

  });

  it('should be able to return a user\'s stair climbing record', function() {
    expect(activity.getStairClimbingRecord(1)).to.equal(36);
  });

})
