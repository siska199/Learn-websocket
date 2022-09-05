const socket = io.connect("http://localhost:5000/");
const containerMessages = document.querySelector(".container-messages");

function handleOnSubmit(e) {
  e.preventDefault();
  const form = {
    sender: e.target[0].value,
    message: e.target[1].value,
  };
  socket.emit("chat message", form);
}

socket.on("get new chat", function (form) {
  console.log("form: ", form);
  console.log("container messages: ", containerMessages);
  containerMessages.innerHTML += `
        <section>
            <div>${form.sender}</div>
            <div>${form.message}</div>
        </section>
    `;
});
