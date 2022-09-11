import { Box } from '@mui/joy';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';
import { Timestamp } from 'firebase/firestore/lite';
import {
  faAndroid,
  faAppStoreIos,
  faCss3,
  faGithub,
  faHtml5,
  faSquareJs,
  faSwift,
} from '@fortawesome/free-brands-svg-icons';

const dateFormat = 'MMMM YYYY';

export const renderDate = (timeFrom: Timestamp, timeTo: Timestamp) => {
  const strTimeTo = moment.unix(timeTo.seconds).format(dateFormat);
  return `${moment.unix(timeFrom.seconds).format(dateFormat)} - ${strTimeTo}`;
};

export const renderDateSingle = (date: Timestamp) => {
  return moment.unix(date.seconds).format(dateFormat);
};

export const getURLIcon = (urlName: string) => {
  switch (urlName) {
    case 'GitHub (iOS)':
      return (
        <Box className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faGithub} transform="shrink-1 left-2 up-2" />
          <FontAwesomeIcon
            icon={faAppStoreIos}
            transform="shrink-6 right-4 down-4"
          />
        </Box>
      );
    case 'GitHub (Android)':
      return (
        <Box className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faGithub} transform="shrink-1 left-2 up-2" />
          <FontAwesomeIcon
            icon={faAndroid}
            transform="shrink-6 right-4 down-4"
          />
        </Box>
      );
    case 'GitHub (Web)':
      return (
        <Box className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faGithub} transform="shrink-1 left-2 up-2" />
          <FontAwesomeIcon
            icon={duotone('browser')}
            transform="shrink-6 right-4 down-4"
          />
        </Box>
      );
    case 'iOS':
      return <FontAwesomeIcon icon={faAppStoreIos} />;
    case 'Android':
      return <FontAwesomeIcon icon={faAndroid} />;
    case 'Web':
      return <FontAwesomeIcon icon={duotone('browser')} />;
    case 'Contact Me':
      return <FontAwesomeIcon icon={duotone('envelope')} />;
    case 'Bug Report':
      return <FontAwesomeIcon icon={duotone('bug')} />;
    default:
      return <FontAwesomeIcon icon={duotone('link')} />;
  }
};

export const getProgrammingLanguageIcon = (name: string) => {
  switch (name) {
    case 'Swift':
    case 'SwiftUI':
      return <FontAwesomeIcon icon={faSwift} />;
    case 'CSS':
      return <FontAwesomeIcon icon={faCss3} />;
    case 'HTML':
      return <FontAwesomeIcon icon={faHtml5} />;
    case 'Javascript':
      return <FontAwesomeIcon icon={faSquareJs} />;
    case 'Kotlin':
      return <FontAwesomeIcon icon={faAndroid} />;
  }
};
