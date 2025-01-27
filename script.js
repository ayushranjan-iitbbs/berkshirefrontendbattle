document.addEventListener('DOMContentLoaded', function() {
    const secText = document.querySelector('.sec-text');
    
    secText.addEventListener('animationend', function(e) {
        if (e.animationName === 'typing') {
            secText.classList.add('typing-done');
        }
    });
});
