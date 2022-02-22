// Assigning the JSON file to a variable

let jsonFile = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'projects.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
  })(); 

  
// Reading the JSON data and appending it to the projects grid

jsonFile.forEach(item => {

    // Selecting the title language
    let language = document.getElementsByTagName("select");
    let title = ``;
    (language[0].value == "projects_en.html") ? title=item.title_en : title=item.title_pt;

    //Adding the tools used for each project
    let toolsUsed = ``
    item.tools.forEach(tool => {
        toolsUsed+=`<div class="projects_tool">${tool}</div>`
    })

    // Writing the project_item HTML element
    $(".projects_grid").append(

    `<div class="projects_item">     
        <div class="projects_image" style="background-image: url('${item.background}');">
            <div class="projects_buttons">
            
                <a href="${item.liveSite}" target="_blank" class="projects_button">
                    <i class="fas fa-eye fa-2x"></i>
                </a> 
                <a href="${item.repository}" target="_blank" class="projects_button">
                    <i class="fab fa-github fa-2x"></i>
                </a>

            </div>
        </div>

        <div class="projects_title">${title}</div>
        <div class="projects_tools">
            ${toolsUsed}
    </div>`  
)
})


// Mobile navbar button

const navbarVisible = document.querySelector(".navbar");
const hamburger = document.querySelector(".navbar-mobile_hamburger");
const body = document.querySelector("#body");

hamburger.addEventListener("click", function(){
    if (navbarVisible.classList.contains("mobile")){
        navbarVisible.classList.remove("mobile");
        body.classList.remove("mobile");
    }
    else{
        navbarVisible.classList.add("mobile");
        body.classList.add("mobile");
    }
})

///////////////////////

// Projects hover links

const project = document.querySelectorAll(".projects_image");

project.forEach(item => item.addEventListener("click", function(){
    if(item.classList.contains("active")){
        item.classList.remove("active");
    }
    else{
        item.classList.add("active");
    }
}))

