document.querySelector("#chat").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("триггер");
    new TelegaChat().open();
  });
