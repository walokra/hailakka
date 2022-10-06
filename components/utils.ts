import { DateTime } from 'luxon';

export const getOrder = (datetime: string): number => {
  const startDate = DateTime.fromISO(datetime);
  const diff = DateTime.now().diff(startDate, ['years', 'months', 'days', 'hours', 'minutes']).toObject();
  const { days } = diff;
  const { hours } = diff;
  const { minutes } = diff;

  if (days === 0) {
    if (hours === 0) {
      if (minutes < 0) {
        return 0;
      }
      if (minutes < 5) {
        return 5;
      }
      if (minutes < 15) {
        return 15;
      }
      if (minutes < 30) {
        return 30;
      }
      if (minutes < 45) {
        return 45;
      }
      if (minutes < 60) {
        return 60;
      }
    } else {
      if (hours === 1) {
        return 60 * (hours + 1);
      }

      return 60 * hours;
    }
  } else {
    if (days === 1) {
      return 1440;
    }

    return 1440 * days;
  }

  return 99999;
};

/*
 * Calculates time difference to current time for given time.
 * "publishedDateJS": "2015-03-27T09:58:13.000Z",
 */
export const timeSince = (datetime: string): string => {
  const newsTime = DateTime.fromISO(datetime);
  const diff = newsTime.diffNow(['days', 'hours', 'minutes']).toObject(); // milliseconds

  const days = Math.abs(diff.days);
  const hours = Math.abs(diff.hours);
  const minutes = Math.abs(diff.minutes);

  if (days === 0) {
    if (hours === 0) {
      if (minutes < 0) return 'Just now';
      if (minutes < 5) return '< 5 minutes';
      if (minutes < 15) return '< 15 minutes';
      if (minutes < 30) return '< 30 minutes';
      if (minutes < 45) return '< 45 minutes';
      if (minutes < 60) return '< 60 minutes';
    } else {
      if (hours === 1) {
        return `< ${hours + 1} hours`;
      }

      return `< ${hours} hours`;
    }
  } else {
    if (days === 1) {
      return `Yesterday`;
    }

    return `${days} days`;
  }
};
