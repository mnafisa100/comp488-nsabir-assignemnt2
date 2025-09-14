 // JavaScript functionality
 document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const hiddenContent = document.getElementById('hiddenContent');
    
    toggleBtn.addEventListener('click', function() {
        if (hiddenContent.classList.contains('show')) {
            hiddenContent.classList.remove('show');
            toggleBtn.textContent = 'Show Hidden Content';
        } else {
            hiddenContent.classList.add('show');
            toggleBtn.textContent = 'Hide Content';
        }
    });
});