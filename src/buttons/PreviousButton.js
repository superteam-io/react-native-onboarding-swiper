import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_LEFT, getDefaultStyle } from './util';

const PreviousButton = ({ previousLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginLeft: MARGIN_LEFT, backgroundColor: 'red' }}
    textStyle={getDefaultStyle(isLight)}
    {...rest}
  >
    {previousLabel}
  </TextButton>
);

export default PreviousButton;
