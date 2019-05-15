import React, { useMemo } from 'react';

type Props = {
  on: boolean,
  onClick: () => void,
}

export default function Block({ on, onClick }: Props) {
  const styles = useMemo(() => getStyles(on), [on]);
  return <div onClick={onClick} role="button" style={styles} />;
}

function getStyles(on: boolean) {
  return {
    backgroundColor: on ? 'whitesmoke' : 'black',
    border: '1px solid rebeccapurple',
  };
}
