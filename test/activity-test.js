const chai = require('chai');
const expect = require('chai').expect;
const Activity = require('../class/activity');
const activityData = require('./datasets/activity-sample-data');
const UserRepository = require('../class/user-repository');
const userData = require('../test/datasets/user-sample-data');

describe('Activity', function() {

  beforeEach(function(){
    userRepo = new UserRepository(userData);
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

  it('should be able to calculate activity duration by date', function() {
    expect(activity.getActivityDurationByDate(3, '2019/06/15')).to.equal(116);
  });

  it('should be able to calculate total acitivty time by week', function() {
    expect(activity.getActivityByWeek(3, 'minutesActive', ['2019/06/14','2019/06/16'])).to.equal(268);
  });

  it('should be able to calculate total flights of stairs by week', function() {
    expect(activity.getActivityByWeek(3, 'flightsOfStairs', ['2019/06/14','2019/06/16'])).to.equal(41);
  });

  it('should be able to calculate total acitivty time by week', function() {
    expect(activity.getActivityByWeek(3, 'numSteps', ['2019/06/14','2019/06/16'])).to.equal(19706);
  });

  it('should be able to check if a user did not meet their step goal on a given date', function() {
    expect(activity.checkUserStepGoalByDate(1, '2019/06/15')).to.equal(false);
  });

  it('should be able to check if a user met their step goal on a given date', function() {
    expect(activity.checkUserStepGoalByDate(3, '2019/06/15')).to.equal(true);
  });

  it('should return all dates a user has exceeded their step goal', function() {
    expect(activity.getAllExceededStepGoalDates(3)).to.deep.equal(['2019/06/15', '2019/06/16']);
  });

  it('should be able to return a user\'s stair climbing record', function() {
    expect(activity.getStairClimbingRecord(1)).to.equal(36);
  });

  it('should be able to calculate the average number of stairs climbed by all users on a given date', function() {
    expect(activity.getAvgActivity('flightsOfStairs', '2019/06/16')).to.equal(26);
  });

  it('should be able to calculate the average number of steps for all users on a given date', function() {
    expect(activity.getAvgActivity('numSteps', '2019/06/16')).to.equal(8618);
  });

  it('should be able to calculate the average minutes of activity for all users on a given date', function() {
    expect(activity.getAvgActivity('minutesActive', '2019/06/16')).to.equal(184);
  });

  it('should tell the user how many active minutes they had compared to all other users', function() {
    expect(activity.findUserActivityStanding(1, 'minutesActive', '2019/06/16')).to.equal('On this day you had 175 minutes of activity while the average amount of activity for all users was 184 minutes');

  })
  // it('should be able to calculate the user who with the longest distance walked on a given date', function() {
  //   expect(activity.findMostActiveUser(1, )).to.equal();
  // });
});
