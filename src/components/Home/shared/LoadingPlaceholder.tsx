import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { light } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useMemo, useState } from 'react';

import { LoadingPlaceholderViewType } from '../interface';
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
    viewType: LoadingPlaceholderViewType,
    state: Array<any> | undefined,
    maxRow: number = -1,
  ) =>
    (WrappedComponent: React.ComponentType<any>) => {
      const [showingOverflow, setShowingOverflow] = useState(false);
      const fixedData = useMemo(
        () =>
          maxRow > 0 ? state ? state.length >= maxRow ? state.slice(0, maxRow) : [] : undefined : undefined,
        [state],
      );
      const hiddenData = useMemo(
        () =>
          maxRow > 0 ? state ? state.length >= maxRow ? state.slice(maxRow) : [] : undefined : undefined,
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
          {state ? (
            viewType === LoadingPlaceholderViewType.Rows ? (
              <RenderRows />
            ) : (
              <WrappedComponent data={state} />
            )
          ) : (
            <LoadingScreen />
          )}
          {maxRow > 0 && state && state.length > maxRow && <ShowMoreView />}
        </SectionCardBody>
      </SectionCard>
      );

      View.displayName = title;
      return View;
    };

export default LoadingPlaceholder;
