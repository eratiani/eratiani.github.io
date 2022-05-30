// let card1 = document.querySelector(".card1");
// let card2 = document.querySelector(".card2");
// let card3 = document.querySelector(".card3");
// let cardBtn1 = document.querySelector(".sec_3cardsbtn1");
// let cardBtn2 = document.querySelector(".sec_3cardsbtn2");
// let cardBtn3 = document.querySelector(".sec_3cardsbtn3");
// card1.addEventListener("mouseover", bgChanger1);
// card1.addEventListener("mouseout", bgChanger11);
// card2.addEventListener("mouseover", bgChanger2);
// card2.addEventListener("mouseout", bgChanger22);
// card3.addEventListener("mouseover", bgChanger3);
// card3.addEventListener("mouseout", bgChanger33);
// function bgChanger1() {
//     cardBtn1.style.backgroundColor = "#ffd7bb";
    
// }
// function bgChanger11() {
//     cardBtn1.style.backgroundColor = "#FAFAFA";
// } 
// function bgChanger2() {
//     cardBtn2.style.backgroundColor = "#ffd7bb";
    
// }
// function bgChanger22() {
//     cardBtn2.style.backgroundColor = "#FAFAFA";
// }
// function bgChanger3() {
//     cardBtn3.style.backgroundColor = "#ffd7bb";
    
// }
// function bgChanger33() {
//     cardBtn3.style.backgroundColor = "#FAFAFA";
    
// }
var obj = document.querySelectorAll(".sec_3cards")

    var current_page = 1;
    let obj_per_page = 8;
    
    window.addEventListener('resize', resizer)
   
    function resizer() {
        let width = document.body.clientWidth
        if(width <376) {
            
            obj_per_page = 3;
            
        } else if (width <769) {
            obj_per_page = 6;
            
        } else if (width >768) {
            obj_per_page = 8;
            
        }
        change(1);
    }
    function totNumPages()
    {
        return Math.ceil(obj.length / obj_per_page);
    }
    
    function prevPage()
    {
        if (current_page > 1) {
            current_page--;
            change(current_page);
        }
    }
    function firstPage()
    {
        if (current_page > 1) {
            current_page = 1;
            change(current_page);
        }
    }
    function nextPage()
    {
        if (current_page < totNumPages()) {
            current_page++;
            change(current_page);
        }
    }
    function lastPage()
    {
        if (current_page < totNumPages()) {
            current_page=totNumPages();
            change(current_page);
        }
    }
    
    function change(page)
    {
        let btn_next = document.querySelector(".btnNext");
        let firstP = document.querySelector(".btnfirst");
        let lastP = document.querySelector(".btnLast");
        let btn_prev = document.querySelector(".btnPrev");
        let listing_table = document.querySelector(".sec_1petsWrapperRow");
        var page_span = document.querySelector(".curPage");
        btn_next.addEventListener("click", nextPage);
        btn_prev.addEventListener("click", prevPage);
        lastP.addEventListener("click", lastPage);
        firstP.addEventListener("click", firstPage);
        if (page < 1) page = 1;
        if (page > totNumPages()) page = totNumPages();
        listing_table.innerHTML = "";
      
        for (var i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
            
             

                if(obj[i]!== undefined){
                    listing_table.append(obj[i]) + "<br>";
                }
          
           
        }
        // obj = Array.from(obj)
        // obj.forEach((e, index)=>{
        //     count++
            
        //     if (count <=obj_per_page && count>=index ) {
        //         console.log(index);

        //         listing_table.append(e) + "<br>";
                
        //     }
        // })
        page_span.innerHTML = page;
        if (page == 1) {
            btn_prev.setAttribute("disabled", true) ;
            btn_prev.classList.add("disabled") ;
            firstP.classList.add("disabled") ;
            firstP.setAttribute("disabled", true);
        } else {
            btn_prev.setAttribute("disabled", false) ;
            btn_prev.classList.remove("disabled") ;
            firstP.classList.remove("disabled") ;
            firstP.setAttribute("disabled", false);
        }
        if (page == totNumPages() ) {
            lastP.setAttribute("disabled", true) ;
            lastP.classList.add("disabled") ;
            btn_next.classList.add("disabled") ;
            btn_next.setAttribute("disabled", true);
        } else {
            lastP.setAttribute("disabled", false) ;
            lastP.classList.remove("disabled") ;
            btn_next.classList.remove("disabled") ;
            btn_next.setAttribute("disabled", false);
        }
    }
    window.onload = function() {
        resizer();
        change(1);
       
       
        ////////////////////burger
        $('.burger').click(function(){
            $(this).toggleClass('open');
            $(".navBurger").toggleClass("closed")
            
          });
        $(".navBurger").click(()=>{
            if ($('.navBurger').classList = "open" ) {
        
                $(".burger").toggleClass('open');
                $(".navBurger").toggleClass("closed")
            }
            
           
        });
    };
