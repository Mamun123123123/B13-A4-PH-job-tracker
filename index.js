let interview_top = document.querySelector("#interview_top");
let rejected_top = document.querySelector("#rejected_top");

let all_btn = document.querySelector(".all");
let only_interview_btn = document.querySelector(".only_interview");
let only_rejected_btn = document.querySelector(".only_rejected");

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    let interview_main = card.querySelector(".interview_main");
    let rejected_main = card.querySelector(".rejected_main");
    let interview_mid = card.querySelector(".interview_mid");

    let current_status = null; 

    interview_main.addEventListener("click", function() {
        if (current_status === "interview") return;

        if (current_status === "rejected") {
            let rejected_Count = parseInt(rejected_top.textContent) || 0;
            rejected_top.textContent = rejected_Count - 1;
        }

        let interview_Count = parseInt(interview_top.textContent) || 0;
        interview_top.textContent = interview_Count + 1;

        interview_mid.textContent = "INTERVIEW";
        current_status = "interview";
    });

    rejected_main.addEventListener("click", function() {
        if (current_status === "rejected") return;

        if (current_status === "interview") {
            let interview_Count = parseInt(interview_top.textContent) || 0;
            interview_top.textContent = interview_Count - 1;
        }

        let rejected_Count = parseInt(rejected_top.textContent) || 0;
        rejected_top.textContent = rejected_Count + 1;

        interview_mid.textContent = "REJECTED";
        current_status = "rejected";
    });
});

all_btn.addEventListener("click", () => {
    cards.forEach(card => card.style.display = "block");
});

only_interview_btn.addEventListener("click", () => {
    cards.forEach(card => {
        let status = card.querySelector(".interview_mid").textContent;
        card.style.display = status === "INTERVIEW" ? "block" : "none";
    });
});

only_rejected_btn.addEventListener("click", () => {
    cards.forEach(card => {
        let status = card.querySelector(".interview_mid").textContent;
        card.style.display = status === "REJECTED" ? "block" : "none";
    });
});