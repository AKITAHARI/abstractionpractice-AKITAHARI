export function convertToClock(...nums) {
  if (nums.length !== 0) {
  let maxTime = -1; 
  let maxHour = -1;
  let maxMinute = -1;

  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          if (i === j) continue; 
          for (let k = 0; k < 4; k++) {
              if (k === i || k === j) continue;
              const l = 6 - i - j - k; 

              const hours = nums[i] * 10 + nums[j];
              const minutes = nums[k] * 10 + nums[l];

              if (hours < 24 && minutes < 60) {
                  const currentTime = hours * 60 + minutes;
                  if (currentTime > maxTime) {
                      maxTime = currentTime;
                      maxHour = hours;
                      maxMinute = minutes;
                  }
              }
          }
      }
  }
   const formattedHours = ('0' + maxHour).slice(-2);
   const formattedMinutes = ('0' + maxMinute).slice(-2);
   
   return formattedHours + ':' + formattedMinutes;
  }
  return;
}

export function countRocks(num) {
  const str = String(num);
  if (num) {
      switch (str.length) {
          case 1:
          return Number(str[0]) * 50;
  
          case 2:
          return ((Number(str[0]) * 11) * 50) + (Number(str[1]) * 100);
      }
  }
  return;
}

export function singSong(...input) {
  switch (input.join(' ')) {
      case 'pen':
      return 'I have a pen.';

      case 'apple':
      return 'I have an apple.';
      
      case 'apple pen':
      return 'Uhh! Apple-pen!';
  }
}

export function getLikers(array) {
  if (array) {
      if (array.length === 1) {
          return `${array[0]} likes this`;
      }
      if (array.length > 3) {
          return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`;
      }
      if (array.length === 3) {
          return `${array[0]}, ${array[1]} and ${array[2]} like this`;
      }
      if (array.length === 2) {
          return `${array[0]} and ${array[1]} like this`;
      }
      return 'no one likes this'
  }
  return;
}

export function sortString(sentence) {
  if (sentence) {
      const array = sentence.split(' ')
      const sorted = [];

      for (let i = 1; i <= array.length; i += 1) {
          array.forEach((e) => e.includes(String(i)) ? sorted.push(e) : e)
      }

  return sorted.join(' ');
  }
}