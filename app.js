<body>
  <h1>Basic Rock Paper Scissors game with JavaScript</h1>
  <button class="options">Rock</button>
  <button class="options">Paper</button>
  <button class="options">Scissors</button>
  <script>
    const options = document.querySelectorAll(".options");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareInputs(pInput, cInput);
      });
    });
    function compareInputs(pInput, cInput) {
      const currentMatch = `${pInput} vs ${cInput}`;

      // Tie check
      if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
      }

      // Rock
      if (pInput === "Rock") {
        else if (cInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }
      // Paper
      else if (pInput === "Paper") {
        if (cInput === "Rock") {
          alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }
      // Scissors
      else if (pInput === "Scissors") {
        if (cInput === "Paper") {
          alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }
    }
  </script>
</body>