let interview_main = document.querySelectorAll(".interview_main");
let interview_top = document.querySelector("#interview_top");

interview_main.forEach((item)=>{
    item.addEventListener("click", function(){
        let card = this.closest(".card");
        let interview_mid = card.querySelector(".interview_mid");

        interview_mid.textContent = "INTERVIEW";

        let count = parseInt(interview_top.textContent) || 0;
        interview_top.textContent = count + 1;
    }, { once: true }) 
})