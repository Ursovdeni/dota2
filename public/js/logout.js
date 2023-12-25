const btn = document.querySelector("#logout");
const form = document.querySelector("form");

btn?.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/users/logout");
    if (response.status === 200) {
      window.location.href = "/";
    }
  } catch (error) {
    console.log(error);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userName = form.elements.userName.value;
  const password = form.elements.password.value;

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      window.location.href = "/";
    } else {
      const error = await response.text();
      console.log(error);
    }
  } catch (error) {
    console.error(error);
  }
});

