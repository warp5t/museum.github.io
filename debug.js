const deguBtn = document.getElementById('debug');
const logBtn = document.getElementById('log');

deguBtn.addEventListener('click', () => {
    console.log('DEBUG')    
    var selectedValue = document.querySelector('input[name="type-ticket"]:checked').value;

console.log(selectedValue);
})

logBtn.addEventListener('click', () => {
    console.log('log')

})