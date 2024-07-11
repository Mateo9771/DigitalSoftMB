document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('support');

    function checkVisibility() {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            element.classList.add('animate__lightSpeedInLeft');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('support1');

    function checkVisibility() {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            element.classList.add('animate__lightSpeedInRight');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('support2');

    function checkVisibility() {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            element.classList.add('animate__lightSpeedInLeft');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});