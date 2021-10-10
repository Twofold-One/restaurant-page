function createContacts() {
    const contacts = document.createElement('div');
    contacts.id = 'contacts';
    contacts.className = 'contacts';
    appendAllDiv();

    function createContactsPlace() {
        const contactsPlace = document.createElement('div');
        contactsPlace.id = 'contacts-place';
        contactsPlace.className = 'content-element';

        const contactsPlaceH1 = document.createElement('h1');
        contactsPlaceH1.textContent = 'Contacts';
        
        const contactsPlaceImg = document.createElement('img');
        contactsPlaceImg.className = 'globe-gif';
        contactsPlaceImg.src = '/src/images/globe.gif';
        contactsPlaceImg.alt = 'globe rotaition animation';

        const contactsPlaceP = document.createElement('p');
        contactsPlaceP.textContent = 'Address: Somewhere on the Earth...';
        const placeIcon = '<i class="fas fa-map-marker-alt">';
        contactsPlaceP.insertAdjacentHTML('afterbegin', placeIcon);

        contactsPlace.appendChild(contactsPlaceH1);
        contactsPlace.appendChild(contactsPlaceImg);
        contactsPlace.appendChild(contactsPlaceP);

        return contactsPlace;
    }

    function createContactsPhone() {
        const contactsPhone = document.createElement('div');
        contactsPhone.id = 'contacts-phone';
        contactsPhone.className = 'content-element';
        contactsPhone.classList.add('edited')
        const phoneIcon = '<i class="fas fa-phone">';
        const contactsPhoneP = document.createElement('p');
        contactsPhone.insertAdjacentHTML('afterbegin', phoneIcon);
        
        
        //function generates random phone number and dinamically appends it to the p element
        generatedPhoneNumber();
        

        function generatedPhoneNumber() {
            setInterval(() => {
                contactsPhoneP.textContent = `Phone: +${randomNumber()}`;;
            }, 200);

            function randomNumber() {
                return Math.floor(10000000000 + Math.random()*90000000000);
            }
        }

        contactsPhone.appendChild(contactsPhoneP);
        return contactsPhone;
    }

    function appendAllDiv() {
        contacts.appendChild(createContactsPlace());
        contacts.appendChild(createContactsPhone());
    }

    return contacts;
}

export default createContacts;