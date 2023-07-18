$(document).ready(function () {
    $("#wizard_example").stepFormWizard({
        theme: 'circle',
        height:'auto',
        rtl: true,
        nextBtn: $('<a class="next-btn sf-left sf-btn" href="#">گام بعدي</a>'),
        prevBtn: $('<a class="prev-btn sf-right sf-btn" href="#">گام قبلي</a>'),
        finishBtn: $('<input class="finish-btn sf-left sf-btn" type="submit" value="پايان"/>')
    });

})
$(window).load(function () {
    /* only if you want use mcustom scrollbar */
    $(".sf-step").mCustomScrollbar({
        theme: "dark-3",
        scrollButtons: {
            enable: true
        }
    });
});


const checkBoxs = document.querySelectorAll('.btn-check');
  
checkBoxs.forEach(checkbox => {
  checkbox.addEventListener('change', function handleChange(event) {
    let lbl = "#LblSubSys-" + (checkbox.id).split("-")[1];
    console.log(lbl);

    let checkbox_curr = document.querySelector(lbl);

        // If the checkbox is checked, display the output text
        if (checkbox.checked == true){
            checkbox_curr.classList.add("Active");
            checkbox_curr.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
          } else {
            checkbox_curr.classList.remove("Active");
            checkbox_curr.innerHTML="";
          }
  });
});

const boxes = document.querySelectorAll('.card-item');


let card_curr = document.querySelector('#card-0');
show_info(card_curr.id);

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    clrCard();
    let lastChild = box.lastElementChild;
    let btn_selected = lastChild.firstElementChild;
    btn_selected.innerHTML="امکانات";
    //console.log(btn_selected.innerHTML);
    box.classList.add("Active");
    show_info(box.id);
    // box.setAttribute('style', 'background-color: yellow;');
  });
});


function clrCard(){
    let boxes = document.querySelectorAll('.card-item');

    boxes.forEach(box => {
        box.classList = "card-item";
        let lastChild = box.lastElementChild;
        let btn_selected = lastChild.firstElementChild;
        btn_selected.innerHTML="انتخاب";
        btn_selected.href="#info_product";
    });   
}



function show_info(id){
    let i = id.split("-")[1];
    //console.log(i);
    let infoList = ["it is text 1" ,
                    "it is text 2" ,
                    " it is text 3",
                    " it is text 4",
                    " it is text 5",
                    " it is text 6"
                    ];
    
    document.querySelector("#info_product").innerHTML = infoList[i];
    // console.log(e);
}


function payment() {

      alert("به درگاه پرداخت منتقل می شوید")

  }

