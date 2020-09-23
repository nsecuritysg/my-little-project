import React from "react";

export function Timer() {
  const [timer, setTimer] = React.useState(() => ({ currentTime: 100 }));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer({
        ...timer,
        currentTime:
          timer.currentTime > 0 ? timer.currentTime - 1 : timer.currentTime,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimer]);

  return <div>{timer.currentTime}</div>;
}
