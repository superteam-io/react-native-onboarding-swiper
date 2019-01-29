import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Dots from './Dots';

const Pagination = ({
  numPages,
  currentPage,
  isLight,
  bottomBarHeight,
  controlStatusBar,
  showPrevious,
  showNext,
  showDone,
  onPrevious,
  onNext,
  onDone,
  previousLabel,
  nextLabel,
  allowFontScaling,
  PreviousButtonComponent,
  NextButtonComponent,
  DoneButtonComponent,
  DotComponent,
}) => {
  const isLastPage = currentPage + 1 === numPages;

  const PreviousButtonFinal = showPrevious && (
      <PreviousButtonComponent
        previousLabel={previousLabel}
		allowFontScaling={allowFontScaling}
        isLight={isLight}
        onPress={onPrevious}
      />
    );

  const NextButtonFinal = showNext &&
    !isLastPage && (
      <NextButtonComponent
        nextLabel={nextLabel}
		allowFontScaling={allowFontScaling}
        isLight={isLight}
        onPress={onNext}
      />
    );

  const DoneButtonFinal = showDone &&
    isLastPage && (
      <DoneButtonComponent
        isLight={isLight}
		allowFontScaling={allowFontScaling}
        onPress={() => {
          if (typeof onDone === 'function') {
            if (controlStatusBar) {
              StatusBar.setBarStyle('default', true);
            }
            onDone();
          }
        }}
      />
    );

  return (
    <View
      style={{
        height: bottomBarHeight,
        ...styles.container,
      }}
    >
      <View style={styles.buttonLeft}>{PreviousButtonFinal}</View>
      <Dots
        isLight={isLight}
        numPages={numPages}
        currentPage={currentPage}
        Dot={DotComponent}
        style={styles.dots}
      />
      <View style={styles.buttonRight}>
        {NextButtonFinal}
        {DoneButtonFinal}
      </View>
    </View>
  );
};

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isLight: PropTypes.bool.isRequired,
  bottomBarHeight: PropTypes.number.isRequired,
  showPrevious: PropTypes.bool.isRequired,
  showNext: PropTypes.bool.isRequired,
  showDone: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onDone: PropTypes.func,
  allowFontScaling: PropTypes.bool,
  nextLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  DoneButtonComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  NextButtonComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  DotComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

const styles = {
  container: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonLeft: {
    width: 200,
    flexShrink: 1,
    alignItems: 'flex-start',
  },
  buttonRight: {
    width: 200,
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  dots: {
    flexShrink: 0,
  },
};

export default Pagination;
