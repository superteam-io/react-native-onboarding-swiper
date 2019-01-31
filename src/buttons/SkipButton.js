import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util';

const SkipButton = ({ skipLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginRight: MARGIN_RIGHT }}
    textStyle={getDefaultStyle(isLight)}
    {...rest}
  >
    {skipLabel}
  </TextButton>
);

export default SkipButton;
