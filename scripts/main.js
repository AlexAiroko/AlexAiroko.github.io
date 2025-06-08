const headerItems = [
    {
        name: "Home",
        link: "./",
    },
    {
        name: "Blog",
        link: "./blog.html",
    },
    {
        name: "Projects",
        link: "./projects.html",
    },
    {
        name: "Resume",
        link: "./resume.html",
    }
];


let path = window.location.pathname;
let currentPage = "./" + path.split("/").pop();

function createLink(item) {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.classList.add("nav-link", "px-2");
    link.setAttribute("href", item.link);
    if (item.link === currentPage) {
        link.classList.add("text-secondary");
    }
    else {
        link.classList.add("text-white");
    }
    link.textContent = item.name;
    li.append(link);

    return li;
}

function fillHeader(items) {
    let header = document.querySelector("header");
    header.classList.add("p-3", "bg-dark", "text-white", "mb-5");

    let container = document.createElement("div");
    container.classList.add("container");

    let innerContainer = document.createElement("div");
    innerContainer.classList.add("d-flex", "align-items-center", "justify-content-center")

    let ul = document.createElement("ul");
    ul.classList.add("nav", "mb-2", "justify-content-center", "mb-md-0");

    items.forEach(item => {
        ul.append(createLink(item));
    });
    header.append(ul);
}

fillHeader(headerItems);