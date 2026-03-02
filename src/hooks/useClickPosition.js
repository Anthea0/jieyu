import { useEffect } from 'react';

function useClickPosition(logName, elementRef) {
  useEffect(() => {
    const handleClick = (event) => {
      console.log(`📍 [${logName}] 被点击了! 坐标 -> X: ${event.clientX}, Y: ${event.clientY}`);
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener('click', handleClick);
    }

    // 清理函数，防止内存泄漏
    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  }, [logName, elementRef]);
}

export default useClickPosition;