import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
	end: number;
	duration?: number;
	delay?: number;
	startAnimation?: boolean;
}

export const useCounterAnimation = ({ end, duration = 2000, delay = 0, startAnimation = true }: UseCounterAnimationProps) => {
	const [count, setCount] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const requestRef = useRef<number>();
	const startTimeRef = useRef<number>();

	useEffect(() => {
		if (!startAnimation) return;

		const timeoutId = setTimeout(() => {
			setIsAnimating(true);
			startTimeRef.current = undefined;

			const animate = (timestamp: number) => {
				if (!startTimeRef.current) startTimeRef.current = timestamp;

				const elapsed = timestamp - startTimeRef.current;
				const progress = Math.min(elapsed / duration, 1);

				// Easing function for smooth animation
				const easeOutCubic = 1 - Math.pow(1 - progress, 3);

				setCount(Math.floor(end * easeOutCubic));

				if (progress < 1) {
					requestRef.current = requestAnimationFrame(animate);
				} else {
					setIsAnimating(false);
				}
			};

			requestRef.current = requestAnimationFrame(animate);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [end, duration, delay, startAnimation]);

	return { count, isAnimating };
};
