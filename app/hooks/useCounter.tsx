import { useState, useEffect } from "react";

// Kiểu dữ liệu cho hook
type UseCounterOnVisibleProps = {
  targetRef: React.RefObject<HTMLElement | null>; // Chấp nhận null
  startValue: number;
  endValue: number;
  duration: number;
};

const useCounterOnVisible = ({ targetRef, startValue, endValue, duration }: UseCounterOnVisibleProps): number => {
  const [count, setCount] = useState<number>(startValue);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Thực thi khi 50% phần tử vào viewport
    );

    const currentTarget = targetRef.current; // Store current target in a variable

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget); // Clean up using the local variable
      }
    };
  }, [targetRef]);

  useEffect(() => {
    if (isVisible) {
      let currentValue = startValue;
      const increment = (endValue - startValue) / (duration * 60); // Tính toán gia tăng mỗi frame

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
          currentValue = endValue;
          clearInterval(interval);
        }
        setCount(Math.floor(currentValue)); // Cập nhật giá trị đếm
      }, 1000 / 60); // 60 frame per second
    }
  }, [isVisible, startValue, endValue, duration]);

  return count;
};

export default useCounterOnVisible;
