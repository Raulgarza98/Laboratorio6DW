var addItem = document.getElementById("agregar");


addItem.addEventListener("click",addShopping);


 
function addShopping(e) {
    e.preventDefault();
    var item = document.getElementById("newText").value;
    //alert(item);

    var newItem = $("<li>");
    newItem.addClass("lis");
    newItem.attr("id", item);

    var check = $("<button>");
    check.text("Check");
    check.addClass("checar");
    check.attr("data-type", "string");

    var del = $("<button>");
    del.text("Delete");
    del.addClass("del");
    del.attr("data-type", "string");

    var label = $("<p>");
    label.text(item);
    label.addClass("itemShop");
    label.attr("data-type", item);

    newItem.append(label);
    newItem.append(check);
    newItem.append(del);
    $("ul").append(newItem);

      
    //alert(label);
}

$(".checar").on("click", () => {
    //alert("checar")
    $(this).parent().toggleClass("chec");
})

$(".del").on("click", () => {
    //alert("del");
    $(this).parent().remove();
})