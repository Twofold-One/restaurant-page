import _ from 'lodash';
import './style.css';
import createHome from './home-page';
import createMenu from './menu';
import createContacts from './contacts';

const content = document.getElementById('content');
content.appendChild(createContacts());

// const content = document.getElementById('content');
// content.appendChild(createMenu());

// const content = document.getElementById('content');
// content.appendChild(createHome());

// const homeBtn = document.getElementById('home');
// homeBtn.addEventListener('click', () => {
//     homeBtn.classList.add('active');
// });


// function checkConnection() {
//     console.log('check three times, ok!');
// }
// checkConnection();
