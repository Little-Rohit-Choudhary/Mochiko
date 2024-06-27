function responsive_tab(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const describe = document.querySelector('.description');
    const ingredient = document.querySelector('.ingredient');
    const recipe_image = document.querySelector('.res-img');
    const dup_rec_img = document.querySelector('.res-imge');
    const ingred_img = document.querySelector('.ingredient-img');
    const dup_ing_img = document.querySelector('.dup-ingredient-img');
    const steps = document.querySelectorAll('.sub-step');
    if(width <= height ){
        if((height/width)<=1.3){
            console.log("internal if");
            describe.style.height = `${height + 300}px`;
        }
        else{
            console.log("internal else");
            describe.style.height = `${height}px`;
        }
        console.log("if section");
        describe.classList.add('extra');
        ingredient.classList.add('extra');
        steps.forEach(steps => {
            steps.classList.add('extra');
        });
        recipe_image.style.display = 'none';
        dup_rec_img.style.display = 'flex';
        ingred_img.style.display = 'none'
        dup_ing_img.style.display = 'block';
    }
    else{
        describe.style.height = `${height}px`;
        console.log("else section");
        describe.classList.remove('extra');
        ingredient.classList.remove('extra');
        steps.forEach(steps => {
            steps.classList.remove('extra');
        });
        recipe_image.style.display = 'flex';
        dup_rec_img.style.display = 'none';
        ingred_img.style.display = 'block';
        dup_ing_img.style.display = 'none';
        if((width/height) < 1.6){
            console.log('else if');
            ingredient.classList.add('extra');
            ingred_img.style.display = 'none'
            dup_ing_img.style.display = 'block';
        }
        else{
            console.log('else else');
            ingredient.classList.remove('extra');
            ingred_img.style.display = 'block';
            dup_ing_img.style.display = 'none';
        }
    }
}

window.addEventListener('resize',responsive_tab);
window.addEventListener('load',responsive_tab);

function responsive_mob(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const about_recipe = document.querySelector('.des');
    const recipe_name = document.querySelector('#res-name');
    if(height/width >= 1.5){
        about_recipe.classList.add("extra");
        if(height/width>=1.9){
            recipe_name.style.fontSize = '14vmin';
        }
        else{
            recipe_name.style.fontSize = '13.5vmin';
        }
        console.log('mob if');
    }
    else{
        if(width>height){
            recipe_name.style.fontSize = '13vmin';
        }
        else{
            recipe_name.style.fontSize = '12vmin';
        }
        about_recipe.classList.remove("extra");
        console.log("mob else");
    }
}
window.addEventListener('load',responsive_mob);
window.addEventListener('resize',responsive_mob);
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

    const descriptionSection = document.querySelector('.description');
    const ingredientSection = document.querySelector('.ingredient');
    const recipeSection = document.querySelector('.recipe');
    const variationsSection = document.querySelector('.variations');
    observer.observe(descriptionSection);
    observer.observe(ingredientSection);
    observer.observe(recipeSection);
    observer.observe(variationsSection);
  });
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.steps');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else{
                entry.target.classList.remove('visible');
            }
        });
    });
    steps.forEach(step => {
        observer.observe(step);
    });
});
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