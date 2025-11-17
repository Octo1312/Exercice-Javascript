function addAWeek (week, date = new Date()) {  
  date.setDate(date.getDate() + week * 7)

  return date
}

console.log(addAWeek(1, new Date('2024-10-10')))