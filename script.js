document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");

  // Function to add a new list item
  function addListItem() {
    const listItem = document.createElement("li");
    listItem.textContent = "List item";
    infiList.appendChild(listItem);
  }

  // Add about 10 list items to the list by default
  for (let i = 0; i < 10; i++) {
    addListItem();
  }

  // Function to handle scrolling and add more list items at the end
  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = infiList;

    if (scrollTop + clientHeight >= scrollHeight) {
      // User has reached the end of the list, add 2 more list items
      for (let i = 0; i < 2; i++) {
        addListItem();
      }
    }
  }

  // Add event listener to the list to trigger infinite scrolling
  infiList.addEventListener("scroll", handleScroll);
});



