import React from 'react';
import { List, ListItem, Typography } from '@mui/joy';

import { Certificate } from '../../firebase/interfaces';
import { renderDateSingle } from './functions';

export const Certification = ({ data }: { data: Certificate[] }) => (
  <List variant="outlined" sx={{ gap: 0.5 }}>
    {data.map(cert => (
      <ListItem
        key={`cert-${cert.name}`}
        sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <Typography component="p">{cert.name}</Typography>
        <Typography component="p" level="body2">
          {renderDateSingle(cert.date)}
        </Typography>
      </ListItem>
    ))}
  </List>
);

export default Certification;
