import React from 'react';
import { View, Text } from 'react-native';

const PageCheckmark = ({ style }) => (
  <Text style={{ ...styles.element, ...styles.elementCheck, ...style }}>✓</Text>
);

const PageDot = ({ selected }) => (
  <View
    style={{ ...styles.element, ...styles.elementDot, backgroundColor: selected ? '#fff' : 'rgba(255, 255, 255, 0.5)' }}
  />
);

const PageDots = ({ pages, currentPage }) => (
  <View style={styles.container}>
    <PageCheckmark style={{ color: 'rgba(255, 255, 255, 0)' }} />
    {Array.from(new Array(pages), (x, i) => i).map(page => (
      <PageDot key={page} selected={page === currentPage} />
    ))}
    <PageCheckmark style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
  </View>
);

const styles = {
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  element: {
    marginHorizontal: 3,
  },
  elementCheck:  {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '900',
  },
  elementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
};

export default PageDots;
