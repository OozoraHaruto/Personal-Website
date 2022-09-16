import { Box } from '@mui/joy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';
import { Timestamp } from 'firebase/firestore/lite';
import { duotone, light } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  faAndroid,
  faAppStoreIos,
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faSquareJs,
  faSwift,
} from '@fortawesome/free-brands-svg-icons';

const dateFormat = 'MMMM YYYY';

export const renderDate = (
  timeFrom: Timestamp,
  timeTo: Timestamp | undefined,
) => {
  const strTimeTo = timeTo ? moment.unix(timeTo.seconds).format(dateFormat) : 'current';
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
    case 'CSS':
      return <FontAwesomeIcon icon={faCss3} />;
    case 'HTML':
      return <FontAwesomeIcon icon={faHtml5} />;
    case 'Java':
      return <FontAwesomeIcon icon={faJava} />;
    case 'Javascript':
      return <FontAwesomeIcon icon={faSquareJs} />;
    case 'Kotlin':
      return <FontAwesomeIcon icon={faAndroid} />;
    case 'Microsoft Excel':
      return <FontAwesomeIcon icon={duotone('file-excel')} />;
    case 'Microsoft Powerpoint':
      return <FontAwesomeIcon icon={duotone('file-powerpoint')} />;
    case 'Microsoft Word':
      return <FontAwesomeIcon icon={duotone('file-word')} />;
    case 'MySQL':
      return <FontAwesomeIcon icon={duotone('database')} />;
    case 'Node.js':
      return <FontAwesomeIcon icon={faNodeJs} />;
    case 'PHP':
      return <FontAwesomeIcon icon={faPhp} />;
    case 'Python':
      return <FontAwesomeIcon icon={faPython} />;
    case 'React.js':
      return <FontAwesomeIcon icon={faReact} />;
    case 'Swift':
    case 'SwiftUI':
      return <FontAwesomeIcon icon={faSwift} />;
  }
};

export const getPillColor = (proficiency: number) => {
  if (proficiency >= 8 && proficiency <= 10) {
    return 'success'; // Proficient
  } else if (proficiency >= 5) {
    return 'warning'; // Still ok
  } else {
    return 'danger'; // Basics
  }
};

export const getCircleNumberIcon = (
  number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
) => {
  switch (number) {
    case 0:
      return light('circle-0');
    case 1:
      return light('circle-1');
    case 2:
      return light('circle-2');
    case 3:
      return light('circle-3');
    case 4:
      return light('circle-4');
    case 5:
      return light('circle-5');
    case 6:
      return light('circle-6');
    case 7:
      return light('circle-7');
    case 8:
      return light('circle-8');
    case 9:
      return light('circle-9');
  }
};
