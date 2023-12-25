window.$ = (el) => {
  if (document.querySelector(el) !== null) return document.querySelector(el);
  // else console.warn(`${el} не найдем в дом дереве`);
};

window.$$ = (el) => {
  if (document.querySelectorAll(el) !== null)
    return document.querySelectorAll(el);
};

window.soundPush = (url) => {
  let audio = new Audio();
  audio.src = url;
  audio.autoplay = true; 
  audio.volume = 0.7;
  $("body").appendChild(audio);

  audio.addEventListener("ended", (e) => {
    stopAudio();
    audio.remove();
  });

  return url;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let timeNow = new Date().toLocaleTimeString();

const token = `6732291851:AAHAYoK8T63G1mJUjvMy33oTLsG6lpiv8FA`;

const chatId = `5614938714`;

let startChat = false;

let lastMessId, FirstMessId, newMessId, checkReply, Timer, count;

const idStart = getRandomInt(999);

const managers = "Габен";

let tpl = `<div class="chat__wrap">
  <div class="chat__title">Онлайн-чат
  <div class="btm__close chat__close">&times;</div>
  </div>
  <div class="chat__body">
  <div class="chat__body__item chat__body__item__manager">
  <span class="chat__body__item__user">ГАБЕН на связи 🤙</span>
  <span class="chat__body__item__text">Буду очень благодарен за любую обратную связь по моему проекту. Также, если вы хотите связаться со мной, пожалуйста, заполните эту форму и не забудьте оставить свои контактные данные.</span>
  <i class="chat__body__item__time">${timeNow}</i>
  </div>
  </div>
  <div class="chat__input">
      <div class="chat__input__message">
          <textarea rows="1" wrap="on" type="text" class="chat__main__input" aria-label="Напишите сообщение" placeholder="Напишите сообщение" required ></textarea>
      </div>
      <img class="chat__input__submit" src="https://raw.githubusercontent.com/themaltsev/telegram-chat-js/935ee870601099cf1895e8108f8fe48678eff4c1/telegram-chat/angle-up.svg" alt="Отправить" />
  </div>
  
  </div>`;

class TelegaChat {
  open() {
    if (window.innerWidth < 768) $("body").classList.add("overflow__hidden");

    if (!$(".chat__wrap")) $("body").insertAdjacentHTML("afterbegin", tpl);

    let store = localStorage.getItem("historyMessages");

    if (store !== null) {
      $(".chat__body").innerHTML = store;
    }

    $(".chat__main__input").onkeypress = (e) => {
      if (e.key === `Enter`) this.submit();
      if (e.target.value !== "")
        $(".chat__main__input").classList.remove("validate__error");
    };

    $(".chat__input__submit").onclick = () => this.submit();

    $(".chat__close").onclick = () => this.close();

    $(".chat__body").scrollTop = 100000;

    $(".chat__wrap").classList.add("open");

    setTimeout(() => {
      $(".chat__main__input").focus();
    }, 1000);

    axios
      .get(`https://api.telegram.org/bot${token}/getupdates`)

      .then((r) => {
        lastMessId = r.data.result[r.data.result.length - 1].message.message_id;
        FirstMessId = lastMessId;
      })
      .catch((r) => {
        return ``;
      });

    this.deleteItem();
  }

  close() {
    clearInterval(Timer);
    $(".chat__wrap").classList.remove("open");
    if (window.innerWidth < 768) $("body").classList.remove("overflow__hidden");
  }

  deleteItem() {
    $$(".chat__body__item").forEach((el) => {
      if (el.querySelector(".chat__body__item__delete"))
        el.querySelector(".chat__body__item__delete").onclick = () => {
          el.remove();
          localStorage.setItem("historyMessages", $(".chat__body").innerHTML);
        };
    });
  }

  submit() {
    let val = $(".chat__main__input").value;
    if (val !== ``) {
      $(".chat__main__input").classList.remove("validate__error");
      let tplItemClient = `<div class="chat__body__item chat__body__item__client">
        <div class="btm__close chat__body__item__delete cards__theme">×</div>
      <span class="chat__body__item__user">Вы</span>
      <span class="chat__body__item__text">${val}</span>
      <i class="chat__body__item__time">${timeNow}</i></div>`;

      $(".chat__body").innerHTML += tplItemClient;

      $(".chat__body").scrollTop = 100000;

      axios.get(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Юзер:${idStart}
          ${val}`
      );

      soundPush("/sound/set-whatsapp.mp3");

      localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

      setTimeout(() => {
        $(".chat__main__input").value = ``.trim();
      }, 0);
    } else {
      alert(`Введите текст`);

    }
    this.deleteItem();

    Timer = setInterval(() => this.checkResponse(), 3000);

    if (typeof ym === "function" && startChat === false) {
      ym(49104928, "reachGoal", "start__chat");
      startChat = true;
    }

    $(".chat__main__input").value = ``;
  }

  checkResponse() {
    count++;

    if (count > 120 && lastMessId === FirstMessId) clearInterval(Timer);

    axios
      .get(`https://api.telegram.org/bot${token}/getupdates`)
      .then((r) => {
        let resLastMess = r.data.result[r.data.result.length - 1].message;
        if (resLastMess.reply_to_message !== undefined)
          checkReply = resLastMess.reply_to_message.text.includes(idStart);
        else checkReply = false;

        newMessId = resLastMess.message_id;

        // console.log(FirstMessId, lastMessId , newMessId, checkReply);

        if (newMessId > lastMessId && checkReply) {
          let Text = r.data.result[r.data.result.length - 1].message.text;

          let tplItemMenager = `<div class="chat__body__item chat__body__item__manager">
            <div class="btm__close chat__body__item__delete cards__theme">×</div>
            <span class="chat__body__item__user">${managers}</span>
              <span class="chat__body__item__text">${Text}</span>
              <i class="chat__body__item__time">${timeNow}</i></div>`;

          $(".chat__body").innerHTML += tplItemMenager;

          this.deleteItem();

          soundPush("/sound/get-whatsapp.mp3");

          localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

          $(".chat__body").scrollTop = 100000;

          lastMessId = newMessId;
        }
      })
      .catch((r) => {
        return ``;
      });
  }
}
