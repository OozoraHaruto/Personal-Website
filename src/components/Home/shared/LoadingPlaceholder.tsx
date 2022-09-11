import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useMemo, useState } from 'react';

import LoadingScreen from '../../Others/LoadingScreen';
import {
  SectionCard,
  SectionCardBody,
  SectionCardHeader,
  SectionCardHeaderTitle,
  SectionCardShowMore,
  SectionCardShowMoreTitle,
} from '../../../style/Layout';

export const LoadingPlaceholder =
  (
    icon: IconDefinition,
    title: string,
    state: Array<any> | undefined,
    maxRow: number,
  ) =>
    (WrappedComponent: React.ComponentType<any>) => {
      const [showingOverflow, setShowingOverflow] = useState(false);
      const fixedData = useMemo(
        () =>
          state ? state.length >= maxRow ? state.slice(0, maxRow) : undefined : undefined,
        [state],
      );
      const hiddenData = useMemo(
        () =>
          state ? state.length >= maxRow ? state.slice(maxRow) : undefined : undefined,
        [state],
      );

      const ShowMoreView = () => (
      <SectionCardShowMore>
        <SectionCardShowMoreTitle
          onClick={() => setShowingOverflow(!showingOverflow)}
        >
          <FontAwesomeIcon
            icon={showingOverflow ? light('chevron-up') : light('chevron-down')}
          />
          {showingOverflow ? 'Hide' : 'Show more'}
        </SectionCardShowMoreTitle>
      </SectionCardShowMore>
      );

      const RenderWrappedRows = ({ data }: { data: any[] }) => (
      <>
        {data.map((rowData, i) => (
          <WrappedComponent key={`${title}-${i}`} {...rowData} />
        ))}
      </>
      );

      const RenderRows = () => {
        if (!state || !fixedData || !hiddenData) {
          return <></>;
        }

        return (
        <>
          <RenderWrappedRows data={fixedData} />
          {showingOverflow && <RenderWrappedRows data={hiddenData} />}
        </>
        );
      };

      const View = () => (
      <SectionCard>
        <SectionCardHeader>
          <SectionCardHeaderTitle>
            <FontAwesomeIcon icon={icon} />
            {title}
          </SectionCardHeaderTitle>
        </SectionCardHeader>
        <SectionCardBody>
          {state ? <RenderRows /> : <LoadingScreen />}
          {state && state.length > maxRow && <ShowMoreView />}
        </SectionCardBody>
      </SectionCard>
      );

      View.displayName = title;
      return View;
    };

export default LoadingPlaceholder;
