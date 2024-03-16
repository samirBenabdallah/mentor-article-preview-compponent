document
  .querySelector("main section >div > img:last-of-type")
  .addEventListener("click", () => {
    const share = document.getElementsByClassName("share")[0];
    share.classList.toggle("click");
  });
