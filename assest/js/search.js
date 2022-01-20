function myFunction() {
    // Declare variables
    var input, filter, div, p, span, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    div = document.getElementById("product");
    p = div.getElementsByTagName('p');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < p.length; i++) {
        span = p[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "none";
        }
    }
}
/****************************************** */
let coun = 0;
document.getElementById('add-to-cart').addEventListener('click', () => {
    coun = coun + 1;
    sessionStorage.setItem('cart-count', coun);
    document.getElementById('cart-coun').innerHTML = coun;

});


console.log(coun);