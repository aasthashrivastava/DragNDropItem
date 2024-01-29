// create on program related to drag and drop feature from js
let boxs = document.getElementsByClassName('box');
let left = document.getElementById('left');
let right = document.getElementById('right')

let selected
for (let box of boxs) {
  box.addEventListener('dragstart', function (e) {
     selected=e.target
  })
}  
    right.addEventListener('dragover', function (e) {
        e.preventDefault();
    })

    right.addEventListener('drop', function (e) {
    //  console.log(selected.id)

      if(selected){
      let nodeCopy=selected.cloneNode(true);
      nodeCopy.id='newId';

       let closeItem=document.createElement('span');
       closeItem.className='closeItem';
       closeItem.innerHTML='<i class="ri-close-line"></i>'
       nodeCopy.appendChild(closeItem)

       closeItem.addEventListener('click',function(e){
        nodeCopy.remove()
       })

       right.appendChild(nodeCopy)
      }
    
        selected = null
    })
 



