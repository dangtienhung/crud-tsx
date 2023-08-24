import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// Import all of Bootstrap's CSS
ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
