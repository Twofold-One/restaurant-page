import _ from 'lodash';
import './style.css';
import createHome from './home-page';
import createMenu from './menu';
import createContacts from './contacts';

// Module for DOM elements
//There is no need for module pattern here, because
// the app is not gonna scale, made it just for fun, some SOLID.
const DOM = (() => {
    const content = document.getElementById('content');
    const allTabs = document.querySelectorAll('.tab')
    const homeTab = document.getElementById('home');
    const menuTab = document.getElementById('menu');
    const contactsTab = document.getElementById('contacts');

    return {content, allTabs, homeTab, menuTab, contactsTab}
})();

//Pages invocations
loadHomeDefault();
pageInvocationOnTabClick();

//All supportive functions
function pageInvocationOnTabClick() {
    DOM.allTabs.forEach((tab) => {
        tab.addEventListener('click', invokePage);
    });

    function invokePage(e) {
        const tab = e.target.id;
        DOM.content.innerHTML = '';
        deactivateAllTabs();
        
        switch (tab) {
            case 'home':
                activateTab(DOM.homeTab);
                DOM.content.appendChild(createHome());
                addFadeInEffect();
                break;
            case 'menu':
                activateTab(DOM.menuTab);
                DOM.content.appendChild(createMenu());
                addFadeInEffect();
                break;
            case 'contacts':
                activateTab(DOM.contactsTab);
                DOM.content.appendChild(createContacts());
                addFadeInEffect();
                break;                
        }

    }
}

function loadHomeDefault() {
    activateTab(DOM.homeTab);
    DOM.content.appendChild(createHome());
}

function activateTab(currentTab) {
    currentTab.classList.add('active');
}

function deactivateAllTabs() {
    DOM.allTabs.forEach((tab) => {
        tab.classList.remove('active');
    });
}

function addFadeInEffect() {
    DOM.content.firstChild.classList.add('fade-in-effect');
}
