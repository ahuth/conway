import React, { useMemo } from 'react';

type Props = {
  on: boolean,
  onClick: () => void,
  showGridLines: boolean,
}

export default function Block({ on, onClick, showGridLines }: Props) {
  const styles = useMemo(() => getStyles(on, showGridLines), [on, showGridLines]);
  return <div onClick={onClick} role="button" style={styles} />;
}

function getStyles(on: boolean, showGridLines: boolean) {
  return {
    backgroundColor: on ? 'whitesmoke' : 'black',
    border: showGridLines ? '1px solid rebeccapurple' : undefined,
  };
}
