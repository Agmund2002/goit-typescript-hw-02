/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// 1 варіант
enum Days {
  MON = 'пн',
  TUE = 'вт',
  WED = 'ср',
  THU = 'чт',
  FRI = 'пт',
  SAT = 'сб',
  SUN = 'нд'
}

const isWeekend = (day: Days): boolean => {
  if (day === Days.SAT || day === Days.SUN) {
    return true;
  }

  return false;
}

// 2 варіант
enum WorkingDays {
  MON = "пн",
  TUE = "вт",
  WED = "ср",
  THU = "чт",
  FRI = "пт",
}

enum Weekends {
  SAT = "сб",
  SUN = "нд",
}

const isWkd = (day: Weekends | WorkingDays): day is Weekends => true;