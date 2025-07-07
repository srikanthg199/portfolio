import { useCounterAnimation } from '@/hooks/useCounterAnimation';

interface AnimatedStatNumberProps {
	value: string;
	delay?: number;
}

export const AnimatedStatNumber = ({ value, delay = 0 }: AnimatedStatNumberProps) => {
	// Parse the numeric value and suffix from strings like "50K+", "99.99%", "40+"
	const parseValue = (str: string) => {
		const numericPart = str.match(/[\d.]+/)?.[0] || '0';
		const suffix = str.replace(/[\d.]+/, '');
		return {
			number: parseFloat(numericPart),
			suffix: suffix,
		};
	};

	const { number, suffix } = parseValue(value);
	const { count } = useCounterAnimation({
		end: number,
		duration: 2500,
		delay,
		startAnimation: true,
	});

	// Format the number based on the original format
	const formatNumber = (num: number, originalSuffix: string) => {
		if (originalSuffix.includes('.')) {
			// For decimal numbers like 99.99%
			return num.toFixed(2);
		}
		return Math.floor(num).toString();
	};

	return (
		<span className='stats-number text-4xl font-bold mb-2'>
			{formatNumber(count, suffix)}
			{suffix}
		</span>
	);
};
