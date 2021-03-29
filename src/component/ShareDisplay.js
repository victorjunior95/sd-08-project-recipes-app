import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const LINK_COPIED_TIMEOUT = 2000;

export default function ShareDisplay() {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  return (
    <>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => {
          navigator.clipboard.writeText(window.location.href);
          setIsLinkCopied(true);
          setTimeout(() => setIsLinkCopied(false), LINK_COPIED_TIMEOUT);
        } }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <span style={ { display: isLinkCopied ? 'block' : 'none' } }>Link copiado!</span>
    </>
  );
}
