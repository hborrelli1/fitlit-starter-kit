*Class*

1. User:
	* returnUsersFirstName(userID)
	* Constructor to take in all user information from data file.

2. UserRepository
	* getUserInfo(userID)
	* calculateAvgTotalStepGoal()

3. Hydration
	Properties:
	* allUsers

	Methods:
	* getAvgConsumedAllTime(userID)
	* getTotalConsumedByDate(userID, date)
	* getWeeklyConsumption(userID, dateRange)

4. Sleep
	Properties:
	* allUsers

	Methods:
	* getAvgDailySleep(userID)
	* getAvgTotalSleepQuality(userID)
	* getSleepAmountByDate(userID, date)
	* getSleepQualityByDate(userID, date)
	* getSleepAmountByWeek(userID, dateRange)
	* getSleepQualityByWeek(userID, dateRange)
	* getAllUsersAvgSleepQuality()
	* findAllHighQualitySleepers(dateRange)
	* getUserWhoSleptMost(date)
	* findWorstSleeper(date) ** // Get user with least amount of total sleep

5. Activity
	* getDistanceByDate(userID, date)
	* getActivityDurationByDate(userID, date)
	* getActivityByWeek(userID, dateRange)
	* checkUserStepGoalByDate(userID, date)
	* getAllExceededStepGoalDates(userID)
	* getStairClimbingRecord(userID)
	* getAvgActivity(activity, date)
	* findMostActiveUser() ** // Get user with the most days of activity  
