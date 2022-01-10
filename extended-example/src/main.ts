import m from 'mithril';
import App from './components/app.component';
import { diSetup } from './di/di-setup'
import './style.css'

diSetup('https://jsonplaceholder.typicode.com');

m.mount(document.body, App);
