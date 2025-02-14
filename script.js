//your JS code here. If required.
//add event listener to input
//then find the selected option using selectedIndex 
//remove it 
let colorSelect = document.getElementById("colorSelect");
      let removeBtn = document.getElementById("removeBtn");

     removeBtn.addEventListener("click", () => {
  let selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex !== -1) { 
    colorSelect.remove(selectedIndex);
  }
});
