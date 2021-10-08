import _ from 'lodash';
import './style.css';
import createHome from './home-page';

const content = document.getElementById('content');
content.appendChild(createHome());

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    homeBtn.classList.add('active');
});


// function checkConnection() {
//     console.log('check three times, ok!');
// }
// checkConnection();
