import React from 'react';

import { Language } from '../../../../firebase/interfaces';
import {
  LanguageTableRowCell,
  LanguageTableRows,
} from '../../../../style/Layout';

export const LanguageRow = ({ name, listen, speak, write }: Language) => (
  <LanguageTableRows>
    <LanguageTableRowCell sx={{ textAlign: 'left' }}>
      {name}
    </LanguageTableRowCell>
    <LanguageTableRowCell>{listen}</LanguageTableRowCell>
    <LanguageTableRowCell>{speak}</LanguageTableRowCell>
    <LanguageTableRowCell>{write}</LanguageTableRowCell>
  </LanguageTableRows>
);

export default LanguageRow;
