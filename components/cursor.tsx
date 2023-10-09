import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';

import { assets } from '@/utils/asset-utils';

const Cursor = ({ buttonRef }: { buttonRef: RefObject<HTMLButtonElement> }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    async function animateCursor() {
      if (!buttonRef.current) return;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const x = buttonRect.x + buttonRect.width / 2;
      const y = buttonRect.y + buttonRect.height / 2;

      setCursorPosition({ x, y });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newY = y + 150;
      setCursorPosition({ x, y: newY });

      buttonRef.current.style.transition = 'transform 700ms ease-in-out';
      buttonRef.current.style.transform = 'translateY(150px)';

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCursorPosition({ x: window.innerWidth - 100, y: -100 });
    }

    animateCursor();
  }, []);

  return (
    <Image
      style={{
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
      }}
      className="absolute z-50 transition-all duration-700 ease-in-out"
      alt="Cursor"
      src={assets.cursor}
      width={80}
      height={50}
    />
  );
};

export default Cursor;
