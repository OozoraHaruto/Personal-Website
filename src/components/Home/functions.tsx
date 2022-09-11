import moment from 'moment';
import { Timestamp } from 'firebase/firestore/lite';

const dateFormat = 'MMMM YYYY';

export const renderDate = (timeFrom: Timestamp, timeTo: Timestamp) => {
  const strTimeTo = moment.unix(timeTo.seconds).format(dateFormat);
  return `${moment.unix(timeFrom.seconds).format(dateFormat)} - ${strTimeTo}`;
};
