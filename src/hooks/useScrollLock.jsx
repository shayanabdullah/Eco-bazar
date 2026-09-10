import { useEffect } from "react";

let scrollLockCount = 0;
let originalOverflow = "";

const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return undefined;

    if (scrollLockCount === 0) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }

    scrollLockCount += 1;

    return () => {
      scrollLockCount = Math.max(0, scrollLockCount - 1);

      if (scrollLockCount === 0) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [isLocked]);
};

export default useScrollLock;