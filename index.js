const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1RXQR_enIN981IN981&sxsrf=APq-WBtZr22xhIT7o2U75gBRbuLLO4Z6ZQ%3A1644857952056&ei=YIoKYoaFA8Car7wP_YexkAo&ved=0ahUKEwiGtcCv1f_1AhVAzYsBHf1DDKIQ4dUDCA8&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCgguELEDENQCEEMyBwgAELEDEEMyCgguEMcBENEDEEMyBAgAEEMyBAgAEEMyBAguEEMyBAguEEMyBwguENQCEEMyCAguEIAEENQCMggIABCABBCxAzoHCC4Q6gIQJzoHCCMQ6gIQJzoECCMQJzoFCAAQkQI6CAguELEDEIMBOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6EQguEIAEELEDEMcBEKMCENQCOgcILhCxAxBDOgoILhDHARCjAhBDOgsILhCABBCxAxDUAjoFCAAQgAQ6DQguELEDEIMBENQCEEM6CwguEIAEEMcBEKMCSgQIQRgASgQIRhgAUABY9wdg9QxoAXABeACAAYUCiAHDCJIBAzItNZgBAKABAbABCsABAQ&sclient=gws-wiz"
}