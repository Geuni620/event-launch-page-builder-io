import { useEffect, useState } from 'react';

import { TimeUnit } from '@/components/time-unit';
import { CalculateTimeToEvent } from '@/utils/countdown-utils';
import { type Framework } from '@/utils/framework-utils';

export const CountdownTimer = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  const [countdown, setCountdown] = useState(CalculateTimeToEvent());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(CalculateTimeToEvent());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-[10px] text-center">
      <TimeUnit
        label="DAYS"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="HOURS"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="MINUTES"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="SECONDS"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
  );
};
