module.exports = {
    convert_grade: (grade) => {
        if (!input) {
      throw new Error('no grade provided');
    }
    // let grade;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {

      if (inRange(input, 90, 100)) {
        grade = 'A';
      }
      if (inRange(input, 80, 89)) {
        grade = 'B';
      }
      if (inRange(input, 70, 79)) {
        grade = 'C';
      }
      if (inRange(input, 60, 69)) {
        grade = 'D';
      }
      if (inRange(input, 0, 59)) {
        grade = 'F';
      }
      return grade;
    }
    }
};