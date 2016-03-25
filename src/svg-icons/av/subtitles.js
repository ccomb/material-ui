import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let AvSubtitles = (props) => (
  <SvgIcon {...props}>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/>
  </SvgIcon>
);
AvSubtitles = pure(AvSubtitles);
AvSubtitles.displayName = 'AvSubtitles';

export default AvSubtitles;
