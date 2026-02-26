
function copyLink(){
  const code=document.getElementById("refLink").innerText;
  navigator.clipboard.writeText(code);
  const toast=document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1200);
}
