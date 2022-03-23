//THE PROMPT
//Given two calendars of meetings, dailys start and end times, and meeting duration, return the available meeting times


function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
    // Write your code here.
  
      const updatedCal1 = updateCalendar(calendar1, dailyBounds1)
      const updatedCal2 = updateCalendar(calendar2, dailyBounds2)
      const mergedCal = mergeCalendars(updatedCal1, updatedCal2)
      const flattenedCal = flattenCalendar(mergedCal)
      return getAvailabilities(flattenedCal, meetingDuration)
  }
  
  function getAvailabilities(calendar, meetingDuration){
      const matchingAvail = [];
      for (let i = 1; i < calendar.length; i++){
          const start = calendar[i - 1][1];
          const end = calendar[i][0];
          const availDuration = end - start;
          if(availDuration >= meetingDuration){
              matchingAvail.push([start, end]);
          }
      }
      return matchingAvail.map(meeting => meeting.map(minutesToTime));
  }
  function flattenCalendar(calendar){
      const flattened = [calendar[0].slice()];
      for(let i = 1; i < calendar.length; i++) {
          const currentMeeting = calendar[i];
          const previousMeeting = flattened[flattened.length - 1]
          const [curStart, curEnd] = currentMeeting;
          const [prevStart, prevEnd] = previousMeeting;
          
          if(prevEnd >= curStart) {
              const newPreviousMeeting = [prevStart, Math.max(prevEnd, curEnd)]
              flattened[flattened.length - 1] = newPreviousMeeting;
          } else {
              flattened.push(currentMeeting.slice())
          }
      }
      return flattened;
  }
  
  function mergeCalendars(calendar1, calendar2){
      const merged = [];
      let i =0;
      let j = 0;
      while(i < calendar1.length && j < calendar2.length){
          const meeting1 = calendar1[i];
          const meeting2 = calendar2[j];
          
          if(meeting1[0] < meeting2[0]){
              merged.push(meeting1)
              i++
          } else {
              merged.push(meeting2);
              j++
          }
      }
      while( i < calendar1.length) merged.push(calendar1[i++])
      
      while( j < calendar2.length) merged.push(calendar2[j++])
      return merged;
  }
  
  function updateCalendar(calendar, dailyBounds){
      const updatedCalendar = [['0:00', dailyBounds[0]], ...calendar, [dailyBounds[1], '23:59']]
      return updatedCalendar.map(meeting => meeting.map(timeToMinutes))
  }
  
  function timeToMinutes(time){
      const [hours, minutes] = time.split(':').map(str => parseInt(str));
      return hours * 60 + minutes;
  }
  
  function minutesToTime(minutes){
      const hours = Math.floor(minutes / 60)
      const mins = minutes % 60;
      const hoursStr = hours.toString()
      const minutesStr = mins < 10 ? '0' + mins.toString() : mins.toString()
      
      return hoursStr + ':' + minutesStr;
  }