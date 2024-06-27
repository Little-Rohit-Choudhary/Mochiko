document.addEventListener("click", function(event){
    var inputElement = document.getElementById("input");
    var searchIcons = document.querySelectorAll("i.fa.fa-search"); // Select all search icons
    if (!inputElement.contains(event.target) && !searchIcons[0].contains(event.target) && !searchIcons[1].contains(event.target)) {
        inputElement.classList.remove("input-visible");
        inputElement.querySelector("input").value = ""; 
    }
});

function toggleSearch() {
    console.log("toggleSearch called");
    var inputElement = document.getElementById("input");
    if (inputElement.classList.contains("input-visible")) {
        inputElement.classList.remove("input-visible");
        inputElement.querySelector("input").value="";
    } else {
        inputElement.classList.add("input-visible");
        inputElement.querySelector("input").focus();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const barsButton = document.getElementById('bars');
    const closeButton = document.getElementById('close');
    var menu = document.querySelector('header ul');

    barsButton.addEventListener('click', function() {
        menu.classList.add("ul-visible");
        barsButton.style.display = 'none';
        closeButton.style.display = 'inline-block';
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove("ul-visible");
        barsButton.style.display = 'inline-block';
        closeButton.style.display = 'none';
    });
});
function responsive_plate(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const front_page = document.querySelector(".front");
    if(height >= 1.7*width){
        front_page.classList.add('res-plate');
    }
    else{
        front_page.classList.remove('res-plate');
    }
}
window.addEventListener('resize', responsive_plate);
window.addEventListener('load', responsive_plate);

function responsive_butt(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const in_plate_butt = document.querySelector(".dat-button");
    const out_plate_butt = document.querySelector(".dat-but");
    const plate = document.querySelector('.plate');
    const data = document.querySelector('.dat');
    if(height >= 1.6*width){
        in_plate_butt.style.display='none';
        out_plate_butt.style.display='inline-block';
        plate.classList.add('outer');
        data.classList.add('add');
    }
    else{
        in_plate_butt.style.display='flex';
        out_plate_butt.style.display='none';
        plate.classList.remove('outer');
        data.classList.remove('add');
    }
}
window.addEventListener('resize',responsive_butt);
window.addEventListener('load',responsive_butt);

function responsive_contact(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const contact = document.querySelector(".contact");
    const add_recipe = document.querySelector(".add-re");
    if(height/width >= 1.5){
        contact.classList.add('extra');
        add_recipe.classList.add('extra');
    }
    else{
        if(height/width >=1){
            contact.classList.add('tab');
            add_recipe.classList.add('tab');
        }
        else{
            contact.classList.remove('tab');
            add_recipe.classList.remove('tab');
        }
        contact.classList.remove('extra');
        add_recipe.classList.remove('extra');
    }
}
function responsive_about(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const about = document.querySelector(".aboutus");
    const feed = document.querySelector('#feedback-form');
    if(height/width >= 1){
        about.classList.add("extra");
        feed.classList.add('extra');
    }
    else{
        feed.classList.remove('extra');
        about.classList.remove('extra');
    }
}
function responsive_me(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const me = document.querySelector('.contactus');
    if(width/height<=1.3){
        me.classList.add('me');
    }
    else{
        me.classList.remove('me');
    }
}
window.addEventListener('load', responsive_me);
window.addEventListener('resize',responsive_me);

window.addEventListener('load',responsive_contact);
window.addEventListener('resize', responsive_contact);

window.addEventListener('load',responsive_about);
window.addEventListener('resize', responsive_about);

const send_button = document.querySelector("#send");
send_button.addEventListener('click',()=>{
    send_button.classList.add('extra');
    setTimeout(() => {
        send_button.classList.remove('extra');
      }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        else{
            entry.target.classList.remove('visible');
        }
      });
    });

    const contactUsSection = document.querySelector('.contactus');
    const aboutUsSection = document.querySelector('.aboutus');
    const ourRecipesSection = document.querySelector('.ourrecipes');
    const recipesSection = document.querySelector('.recipes');
    const feedback = document.querySelector('#feedback-form');
    const addRecipe = document.querySelector('.add-re');
    observer.observe(contactUsSection);
    observer.observe(aboutUsSection);
    observer.observe(ourRecipesSection);
    observer.observe(recipesSection);
    observer.observe(feedback);
    observer.observe(addRecipe);
  });

document.addEventListener('DOMContentLoaded', function() {
const buttons = document.querySelectorAll('.button');
const recipes = document.querySelectorAll('.r');
function setActiveButton(button) {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    recipes.forEach(recipe =>{
        recipe.classList.add('fade');
        recipe.addEventListener('animationend',()=>{
            setTimeout(()=>{
                recipe.classList.remove('fade');
            },100);
        })
    });
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
    setActiveButton(button);
    });
});
setActiveButton(document.getElementById('button1'));
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const recipes = document.querySelectorAll('.r');

    // Function to show recipes based on category
    function showRecipes(category) {
        // Hide all recipes
        recipes.forEach(recipe => {
            recipe.style.display = 'none';
        });

        // Show recipes based on the category
        switch (category) {
            case 'all':
                recipes.forEach(recipe => {
                    recipe.style.display = 'flex';
                });
                break;
            case 'indian':
                recipes.forEach(recipe => {
                    if (recipe.classList.contains('ind')) {
                        recipe.style.display = 'flex';
                    }
                });
                break;
            
            case 'japanese':
                recipes.forEach(recipe => {
                    if (recipe.classList.contains('jap')) {
                        recipe.style.display = 'flex';
                    }
                });
                break;
            
            case 'western':
                recipes.forEach(recipe => {
                    if (recipe.classList.contains('west')) {
                        recipe.style.display = 'flex';
                    }
                });
                break;
            case 'korean':
                recipes.forEach(recipe => {
                    if (recipe.classList.contains('kor')) {
                        recipe.style.display = 'flex';
                    }
                });
                break;
            
            case 'sweets':
                recipes.forEach(recipe => {
                    if (recipe.classList.contains('sweet')) {
                        recipe.style.display = 'flex';
                    }
                });
                break;

            case 'drinks':
                recipes.forEach(recipe => {
                    if (recipe.classList.contains('drink')) {
                        recipe.style.display = 'flex';
                    }
                });
                break;
            default:
                break;
        }
    }

    // Add event listener to all buttons to handle category selection
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the category from the clicked button
            const category = button.innerHTML.toLowerCase();

            // Show recipes based on the selected category
            showRecipes(category);
        });
    });

    // If there is an active button, show recipes for its category on page load
    const active_button = document.querySelector('.button.active');
    if (active_button) {
        const category = active_button.innerHTML.toLowerCase();
        showRecipes(category);
    } else {
        // Default to showing all recipes if no button is active
        showRecipes('all');
    }
});

