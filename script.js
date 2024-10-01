document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    if (this.checkValidity()) {
       
        window.location.href = 'produtos.html';
    } else {
        
        this.reportValidity();
    }
});