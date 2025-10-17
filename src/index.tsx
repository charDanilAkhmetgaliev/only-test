import ReactDOM, { Root } from 'react-dom/client';

import App from './App';
import './style.css';

const root: Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
