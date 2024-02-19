var menuBtn = document.getElementById("menuBtn")
    var menu_bar = document.getElementById("menu_bar")
    var menu = document.getElementById("menu")

    menu_bar.style.right = "-250px";

    menuBtn.onclick = function(){
        if(menu_bar.style.right == "-250px"){
            menu_bar.style.right = "0";
        }
        else{
            menu_bar.style.right = "-250px"
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });