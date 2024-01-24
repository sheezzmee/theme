import { useEffect, useState } from 'react';
import styles from './App.module.scss';

export default () => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleKeyPress = ({ code }) => {
			if (['Insert', 'Digit0'].includes(code)) {
				setVisible(!visible);
			}
		};

		addEventListener('keydown', handleKeyPress);

		return () => {
			removeEventListener('keydown', handleKeyPress);
		};
	}, [visible]);

	return (
		<div
			className={styles.root}
			style={{
				display: !visible ? 'none' : ''
			}}
		>
			<span>Menu</span>
		</div>
	);
};
