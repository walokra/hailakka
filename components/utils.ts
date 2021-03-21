import { DateTime } from 'luxon';

export const getOrder = (datetime: string): number => {
  const startDate = DateTime.fromISO(datetime);
  const diff = DateTime.now()
    .diff(startDate, ['years', 'months', 'days', 'hours', 'minutes'])
    .toObject();
  const days = diff.days;
  const hours = diff.hours;
  const minutes = diff.minutes;

  if (days == 0) {
    if (hours == 0) {
      if (minutes < 0) {
        return 0;
      } else if (minutes < 5) {
        return 5;
      } else if (minutes < 15) {
        return 15;
      } else if (minutes < 30) {
        return 30;
      } else if (minutes < 45) {
        return 45;
      } else if (minutes < 60) {
        return 60;
      }
    } else {
      if (hours == 1) {
        return 60 * (hours + 1);
      } else {
        return 60 * hours;
      }
    }
  } else {
    if (days == 1) {
      return 1440;
    } else {
      return 1440 * days;
    }
  }

  return 99999;
};

/*
 * Calculates time difference to current time for given time.
 * "publishedDateJS": "2015-03-27T09:58:13.000Z",
 */
export const timeSince = (datetime: string): string => {
  const newsTime = DateTime.fromISO(datetime);
  let diff = newsTime.diffNow(['days', 'hours', 'minutes']).toObject(); // milliseconds

  const days = Math.abs(diff.days);
  const hours = Math.abs(diff.hours);
  const minutes = Math.abs(diff.minutes);

  if (days == 0) {
    if (hours == 0) {
      if (minutes < 0) return 'Just now';
      else if (minutes < 5) return '< 5 minutes';
      else if (minutes < 15) return '< 15 minutes';
      else if (minutes < 30) return '< 30 minutes';
      else if (minutes < 45) return '< 45 minutes';
      else if (minutes < 60) return '< 60 minutes';
    } else {
      if (hours == 1) {
        return `< ${hours + 1} hours`;
      } else {
        return `< ${hours} hours`;
      }
    }
  } else {
    if (days === 1) {
      return `Yesterday`;
    } else {
      return `${days} days`;
    }
  }
};
