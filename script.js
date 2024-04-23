const url = "https://jsonplaceholder.typicode.com/users";

const div = document.querySelector("div");

console.log(div);

async function func() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const content = data.map((item) => {
      return `<div>
      <h1>${item.name}</h1>
      <h1>${item.website}</h1>
      <h1>${item.email}</h1>
      </div>
      `;
    });

    div.innerHTML = content;
  } catch (error) {
    console.log(error);
  }
}

func();

const password = "1234567";

if (password.length < 6) {
  throw new Error("password should not be less than 6");
} else {
  alert("welcome");
}
