//  Convert a Date object to Ticks using JavaScript

function dateToTicks(date) {
  const epochOffset = 621355968000000000;
  const ticksPerMillisecond = 10000;

  const ticks =
    date.getTime() * ticksPerMillisecond + epochOffset;

  return ticks;
}

console.log(dateToTicks(new Date()));

console.log(dateToTicks(new Date('2023-01-20')));
