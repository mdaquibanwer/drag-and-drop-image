const boxes = document.querySelectorAll(".box"),
image = document.querySelector(".image");

// console.log(boxes, image);
boxes.forEach(box=>{
    box.addEventListener("dragover", e =>{    // when a draggable element dragged over a box element
        e.preventDefault();
        // console.log("dragging")
        box.classList.add("hovered");
    })
    box.addEventListener("dragleave", e=>{    // when a draggable element dragged leave box element
        e.preventDefault();
        box.classList.remove("hovered");
    })
    box.addEventListener("drop", ()=>{      // when a draggable element drop over a box element
        box.appendChild(image);
        box.classList.remove("hovered");
    })
})