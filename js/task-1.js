const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categorie: ${items.length}`);

items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elemCount = item.querySelectorAll("ul li").length;

    console.log(`Categories: ${title}`);
    console.log(`Elements: ${elemCount}`);
    
});



