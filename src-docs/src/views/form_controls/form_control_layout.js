import React, { Fragment } from 'react';

import {
  EuiFormControlLayout,
  EuiSpacer,
  EuiFormLabel,
  EuiButtonEmpty,
  EuiText,
} from '../../../../src/components';
import { useGeneratedHtmlId } from '../../../../src/services';

export default () => {
  const labelInputId = useGeneratedHtmlId({ prefix: 'labelInput' });
  const readOnlyInputId = useGeneratedHtmlId({ prefix: 'readOnlyInput' });

  return (
    <Fragment>
      <EuiFormControlLayout icon="search">
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout isLoading>
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout clear={{ onClick: () => {} }}>
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout isLoading clear={{ onClick: () => {} }}>
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout isLoading icon="search">
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        isLoading
        icon={{ type: 'arrowDown', side: 'right' }}
      >
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout clear={{ onClick: () => {} }} icon="search">
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        clear={{ onClick: () => {} }}
        icon={{ type: 'arrowDown', side: 'right' }}
      >
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        isLoading
        clear={{ onClick: () => {} }}
        icon="search"
      >
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        isLoading
        clear={{ onClick: () => {} }}
        icon={{ type: 'arrowDown', side: 'right' }}
      >
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        isLoading
        clear={{ onClick: () => {} }}
        icon="search"
      >
        <input
          type="text"
          className="euiFieldText"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        prepend={<EuiFormLabel htmlFor={labelInputId}>Label</EuiFormLabel>}
      >
        <input
          type="text"
          className="euiFieldText euiFieldText--inGroup"
          id={labelInputId}
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        readOnly
        prepend={
          <EuiFormLabel htmlFor={readOnlyInputId}>Read only</EuiFormLabel>
        }
        append={<EuiButtonEmpty size="xs">Button</EuiButtonEmpty>}
      >
        <input
          type="text"
          className="euiFieldText euiFieldText--inGroup"
          id={readOnlyInputId}
          readOnly
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        append={
          <EuiText size="xs">
            <strong>%</strong>
          </EuiText>
        }
      >
        <input
          type="number"
          className="euiFieldNumber euiFieldNumber--inGroup"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>

      <EuiSpacer size="m" />

      <EuiFormControlLayout
        isLoading
        clear={{ onClick: () => {} }}
        prepend={
          <EuiButtonEmpty size="xs" iconType="arrowDown" iconSide="right">
            Button
          </EuiButtonEmpty>
        }
      >
        <input
          type="text"
          className="euiFieldText euiFieldText--inGroup"
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormControlLayout>
    </Fragment>
  );
};
