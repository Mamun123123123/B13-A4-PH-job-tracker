let interview_top = document.querySelector("#interview_top");
let rejected_top = document.querySelector("#rejected_top");
let total_top = document.querySelector(".total");
let updated_jobs = document.querySelector(".updated");

let all_btn = document.querySelector(".all");
let only_interview_btn = document.querySelector(".only_interview");
let only_rejected_btn = document.querySelector(".only_rejected");

let cards = document.querySelectorAll(".card");
let no_jobs_msg = document.getElementById("no_jobs_message");

function updateTopCounts() {
    let interview = 0, rejected = 0;
    cards.forEach(card => {
        if (!card.parentNode) return;
        let status = card.querySelector(".interview_mid").textContent;
        if (status === "INTERVIEW") interview++;
        else if (status === "REJECTED") rejected++;
    });
    interview_top.textContent = interview;
    rejected_top.textContent = rejected;
    total_top.textContent = cards.length; 
}

function updatePageCounts() {
    let visible = 0;
    cards.forEach(card => {
        if (!card.parentNode) return;
        if (card.style.display !== "none") visible++;
    });
    updated_jobs.textContent = `${visible} jobs`;
    no_jobs_msg.classList.toggle("hidden", visible > 0);
}


updateTopCounts();
updatePageCounts();

cards.forEach((card) => {
    let interview_main = card.querySelector(".interview_main");
    let rejected_main = card.querySelector(".rejected_main");
    let interview_mid = card.querySelector(".interview_mid");
    let delete_btn = card.querySelector("button.absolute");

    let current_status = null;

    interview_main.addEventListener("click", function() {
        if (current_status === "interview") return;
        current_status = "interview";
        interview_mid.textContent = "INTERVIEW";
        updateTopCounts();
        updatePageCounts();
    });

    rejected_main.addEventListener("click", function() {
        if (current_status === "rejected") return;
        current_status = "rejected";
        interview_mid.textContent = "REJECTED";
        updateTopCounts();
        updatePageCounts();
    });

    delete_btn.addEventListener("click", function() {
       
        if (card.style.display !== "none") {
            card.style.display = "none"; 
            updatePageCounts();
        }
    });
});


all_btn.addEventListener("click", () => {
    cards.forEach(card => { if (card.parentNode) card.style.display = "block"; });
    updatePageCounts();
});

only_interview_btn.addEventListener("click", () => {
    cards.forEach(card => {
        if (!card.parentNode) return;
        let status = card.querySelector(".interview_mid").textContent;
        card.style.display = status === "INTERVIEW" ? "block" : "none";
    });
    updatePageCounts();
});

only_rejected_btn.addEventListener("click", () => {
    cards.forEach(card => {
        if (!card.parentNode) return;
        let status = card.querySelector(".interview_mid").textContent;
        card.style.display = status === "REJECTED" ? "block" : "none";
    });
    updatePageCounts();
});