import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

export const AnimatedNumber = ({ targetNumber, sx }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1900;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * targetNumber);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [targetNumber]);

  return (
    <Typography sx={sx}>
      +{count.toLocaleString()}k
    </Typography>
  );
};