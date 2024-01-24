import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import styles from './index.module.scss';

const root = document.createElement('div');
root.classList.add(styles.root);
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
