import Image from 'next/image';

import { assets } from '@/utils/asset-utils';
import { type Framework, frameworks } from '@/utils/framework-utils';
import { cn } from '@/utils/tailwind-utils';

export const FrameworkRotation = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  return (
    <div className="relative mx-2 -mt-2 inline-flex h-[80px] w-[80px] align-middle">
      {frameworks.map((name, index) => {
        return (
          <Image
            key={name}
            src={assets[name]}
            alt="framework logo"
            width={80}
            height={80}
            className={cn(
              'absolute left-0 top-0 h-full w-full object-contain object-center transition-all duration-300',
              currentFramework === name
                ? 'transform-none opacity-100'
                : index > frameworks.indexOf(currentFramework)
                ? '-translate-y-2 opacity-0'
                : 'translate-y-2 opacity-0',
            )}
          />
        );
      })}
    </div>
  );
};
