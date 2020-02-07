const chai = require('chai');
const expect = require('chai').expect;
const Activity = require('../class/activity');
const activityData = require('./datasets/activity-sample-data');

describe('Activity', function() {

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  })
})
