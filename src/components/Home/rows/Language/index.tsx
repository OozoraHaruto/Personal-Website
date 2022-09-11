import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import { Sheet } from '@mui/joy';

import { Language } from '../../../../firebase/interfaces';
import LanguageRow from './LanguageRow';
import {
  LanguageTableRowCell,
  LanguageTableRows,
} from '../../../../style/Layout';

export const LanguageView = ({ data }: { data: Language[] }) => (
  <Sheet sx={{ p: 2 }}>
    <LanguageTableRows sx={{ fontWeight: 'bold' }}>
      <LanguageTableRowCell />
      <LanguageTableRowCell>
        {<FontAwesomeIcon icon={light('microphone-alt')} />}
        Listen
      </LanguageTableRowCell>
      <LanguageTableRowCell>
        {<FontAwesomeIcon icon={light('pencil-alt')} />}
        Speak
      </LanguageTableRowCell>
      <LanguageTableRowCell>
        {<FontAwesomeIcon icon={light('volume-up')} />}
        Write
      </LanguageTableRowCell>
    </LanguageTableRows>
    {data.map(skill => (
      <LanguageRow key={`skill-${skill.id}`} {...skill} />
    ))}
  </Sheet>
);

export default LanguageView;
