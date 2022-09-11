import React from 'react';
import { Box, Card, List, ListItem } from '@mui/joy';

import { SchoolCCA } from '../../../../firebase/interfaces';

const SchoolCCAsView = ({ id, ccas }: { id: string; ccas: SchoolCCA[] }) => {
  return (
    <Box sx={{ p: 2, width: '100%' }}>
      <Card variant="outlined" sx={{ p: 0, width: '100%' }}>
        <List variant="plain">
          {ccas.map(cca => (
            <ListItem key={`${id}_${cca.id}`}>
              {cca.status} of {cca.club}
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default SchoolCCAsView;
