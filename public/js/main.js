//Gallerie
  document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

//Gallerie Suchfilter
document.addEventListener('DOMContentLoaded', function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const searchInput = document.getElementById('searchInput');

    function filterItems() {
        const query = searchInput.value.toLowerCase();
        const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');

        document.querySelectorAll('.grid-item').forEach(item => {
            const matchesSearch = item.innerText.toLowerCase().includes(query) || item.querySelector('img').alt.toLowerCase().includes(query);
            const isInActiveTab = activeTab === 'all' || item.closest('.tab-content').id === activeTab;

            item.style.display = matchesSearch && isInActiveTab ? 'flex' : 'none';
        });
    }

    searchInput.addEventListener('input', filterItems);

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(content => {
                content.classList.toggle('active', tabId === 'all' || content.id === tabId);
            });

            filterItems();
        });
    });

    setTimeout(() => {
        document.querySelector('.tab-btn[data-tab="all"]').click();
    }, 100);
});

// Bottle Cap Challenge
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS funktioniert!");

    const challengeTextContainer = document.getElementById("challenge-text-container");
    const buttonContainer = document.getElementById("button-container");
    const challengeGif = document.getElementById("challenge-gif");

    const startChallengeBtn = document.getElementById("startChallengeBtn");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const backToTopGifBtn = document.getElementById("backToTopGifBtn");

    startChallengeBtn.addEventListener("click", function () {
        console.log("Button geklickt!");
        challengeTextContainer.classList.add("d-none");
        challengeGif.classList.remove("d-none");
        buttonContainer.classList.add("d-none");
    });

    // Back to Top Funktion
    function scrollToTop() {
        console.log("Zurück zum Anfang...");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    backToTopBtn.addEventListener("click", scrollToTop);
    backToTopGifBtn.addEventListener("click", scrollToTop);
});




  


  