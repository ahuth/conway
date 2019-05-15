import React, { useMemo } from 'react';

type Props = {
  on: boolean,
}

export default function Block({ on }: Props) {
  const styles = useMemo(() => getStyles(on), [on]);
  return <div style={styles} />;
}

function getStyles(on: boolean) {
  return {
    backgroundColor: on ? 'whitesmoke' : 'black',
    border: '1px solid rebeccapurple',
  };
}
