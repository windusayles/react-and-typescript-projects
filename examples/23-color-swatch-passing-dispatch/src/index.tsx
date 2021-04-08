import { render } from 'react-dom';
import { ThemeProvider } from './theme-context';
import Application from './Application';
import './style.scss';

const rootElement = document.getElementById('root');
render(<ThemeProvider>
  
  <Application />
    </ThemeProvider>, rootElement);
