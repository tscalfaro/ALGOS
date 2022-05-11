//GIVEN TWO INPUT ARRAYS OF STUDENTS HEIGHTS THAT ARE EQUAL IN LEGNTH. RETURN TRUE OR FALSE IF A PHOTO CAN BE TAKEN IF EACH STUDENT IN THE BACK ROW STOOD IN FRONT OF A STUDENT IN THE FRONT ROW THAT IS SHORTER



function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      let count = 0;
      
      let redMax = redShirtHeights.reduce((elem, max = 0) => {
          if (elem > max) max = elem;
          return max
      })
      let blueMax = blueShirtHeights.reduce((elem, max = 0) => {
          if (elem > max) max = elem;
          return max
      })
      
      let backRow = Math.max(redMax, blueMax) === redMax ? redShirtHeights : blueShirtHeights
      let frontRow = Math.max(redMax, blueMax) === redMax ? blueShirtHeights : redShirtHeights
      backRow.sort((a,b) => b - a)
      frontRow.sort((a,b) => b - a)
      
      while (count < backRow.length) {
          if (!(frontRow[count] < backRow[count]))
              return false
          count++;
      }
    return true;
  }