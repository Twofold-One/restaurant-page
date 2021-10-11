// Function which generates home page
function createHome() {
    const home = document.createElement('div');
    home.id = 'home';
    home.className = 'home';
    appendAllDiv();

    function createHomeHeading() {
        const homeHeading = document.createElement('div');
        homeHeading.id = 'heading';
        homeHeading.className = 'content-element';

        const homeHeadingH1 = document.createElement('h1');
        homeHeadingH1.textContent = 'Random PUB';

        const homeHeadingH2 = document.createElement('h2');
        homeHeadingH2.textContent = 'For random folks';

        const homeHeadingImg = document.createElement('img');
        homeHeadingImg.src = 'images/PUB.jpeg';
        homeHeadingImg.alt = 'PUB image';

        homeHeading.appendChild(homeHeadingH1);
        homeHeading.appendChild(homeHeadingH2);
        homeHeading.appendChild(homeHeadingImg);
        
        return homeHeading;
    }

    function createHomeReview() {
        const homeReview = document.createElement('div');
        homeReview.id = 'review';
        homeReview.className = 'content-element';

        const homeReviewH2 = document.createElement('h2');
        homeReviewH2.textContent = 'Welcome';
        
        const homeReviewPara = document.createElement('p');
        homeReviewPara.textContent = 'to the "Random PUB for random folks", where you could eat & drink some random stuff, also deal with some random activity';

        homeReview.appendChild(homeReviewH2);
        homeReview.appendChild(homeReviewPara);

        return homeReview;
    }

    function createHomeWorkingTime() {
        const homeWorkingTime = document.createElement('div');
        homeWorkingTime.id = 'working-time';
        homeWorkingTime.className = 'content-element';

        const homeWorkingTimeH2 = document.createElement('h2');
        homeWorkingTimeH2.textContent = 'Bizarre working hours';
        homeWorkingTime.appendChild(homeWorkingTimeH2);
        
        const homeWorkingTimeList = document.createElement('ul');
        homeWorkingTimeList.className ='working-time-list';
        homeWorkingTime.appendChild(homeWorkingTimeList);

        createListElement('Monday: random time between 8am - 8pm');
        createListElement('Tuesday: random time between 8am - 8pm');
        createListElement('Wednesday: random time between 8am - 8pm');
        createListElement('Thursday: random time between 8am - 8pm');
        createListElement('Friday: random time between 8am - 8pm');
        createListElement('Saturday: random time between 6am - 10pm');
        createListElement('Sunday: random time between 6am - 10pm');

        function createListElement(text) {
            const listElement = document.createElement('li');
            listElement.textContent = text;
            homeWorkingTimeList.appendChild(listElement);
        }

        return homeWorkingTime;

    }

    function appendAllDiv() {
        home.appendChild(createHomeHeading());
        home.appendChild(createHomeReview());
        home.appendChild(createHomeWorkingTime());
    }

    return home;
}

export default createHome;