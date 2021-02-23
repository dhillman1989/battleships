const Popup = (message, activeGameboard, enemyGameboard, renderBoards) => {
  const app = document.querySelector(".app");

  const showPassScreen = (activeboard, opponentboard) => {
    const passScreen = document.createElement("div");
    passScreen.classList.add("pass-screen");
    passScreen.innerHTML = `<button id="passgameConfirm">PASS TO OPPONENT</button>`;
    app.appendChild(passScreen);

    document.querySelector("#passgameConfirm").addEventListener("click", () => {
      renderBoards(enemyGameboard, activeGameboard);
      app.removeChild(popup);
      app.removeChild(passScreen);
    });
  };

  const popup = document.createElement("div");
  popup.classList.add("popup");

  popup.innerHTML = `
      <h1>${message}</h1>
      <button id="passgame">PASS GAME</button>
`;

  app.appendChild(popup);
  document.querySelector("#passgame").addEventListener("click", () => {
    showPassScreen(activeGameboard, enemyGameboard);
  });
};

export default Popup;
