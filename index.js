let interview_top = document.querySelector("#interview_top");
let rejected_top = document.querySelector("#rejected_top");

let all_btn = document.querySelector(".all");
let only_interview_btn = document.querySelector(".only_interview");
let only_rejected_btn = document.querySelector(".only_rejected");

let cards = document.querySelectorAll(".card");
<<<<<<< HEAD
let no_jobs_msg = document.getElementById("no_jobs_message");
=======
>>>>>>> b0d38612bc363cd8698baada5a77c9d832221889

cards.forEach((card) => {
    let interview_main = card.querySelector(".interview_main");
    let rejected_main = card.querySelector(".rejected_main");
    let interview_mid = card.querySelector(".interview_mid");
<<<<<<< HEAD
    let delete_btn = card.querySelector("button.absolute"); 

    let current_status = null;
=======

    let current_status = null; 
>>>>>>> b0d38612bc363cd8698baada5a77c9d832221889

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
<<<<<<< HEAD
=======

>>>>>>> b0d38612bc363cd8698baada5a77c9d832221889
        let rejected_Count = parseInt(rejected_top.textContent) || 0;
        rejected_top.textContent = rejected_Count + 1;

        interview_mid.textContent = "REJECTED";
        current_status = "rejected";
    });
<<<<<<< HEAD

    delete_btn.addEventListener("click", function() {
        if (current_status === "interview") {
            let interview_Count = parseInt(interview_top.textContent) || 0;
            interview_top.textContent = interview_Count - 1;
        } else if (current_status === "rejected") {
            let rejected_Count = parseInt(rejected_top.textContent) || 0;
            rejected_top.textContent = rejected_Count - 1;
        }

        let total_count = parseInt(document.querySelector(".total").textContent) || 0;
        document.querySelector(".total").textContent = total_count - 1;

        card.remove();
        checkNoJobs(); 
    });
});

all_btn.addEventListener("click", () => {
    let visible = 0;
    cards.forEach(card => {
        if (card.parentNode) { 
            card.style.display = "block";
            visible++;
        }
    });
    no_jobs_msg.classList.toggle("hidden", visible > 0);
});

only_interview_btn.addEventListener("click", () => {
    let visible = 0;
    cards.forEach(card => {
        if (card.parentNode) {
            let status = card.querySelector(".interview_mid").textContent;
            if (status === "INTERVIEW") {
                card.style.display = "block"
                visible++;
            } else {
                card.style.display = "none";
            }
        }
    });
    no_jobs_msg.classList.toggle("hidden", visible > 0);
});

only_rejected_btn.addEventListener("click", () => {
    let visible = 0;
    cards.forEach(card => {
        if (card.parentNode) {
            let status = card.querySelector(".interview_mid").textContent;
            if (status === "REJECTED") {
                card.style.display = "block";
                visible++;
            } else {
                card.style.display = "none";
            }
        }
    });
    no_jobs_msg.classList.toggle("hidden", visible > 0);
});

function checkNoJobs() {
    let visible = 0;
    cards.forEach(card => {
        if (card.parentNode) visible++;
    });
    no_jobs_msg.classList.toggle("hidden", visible > 0);
}
=======
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
>>>>>>> b0d38612bc363cd8698baada5a77c9d832221889
