      
      const snake = document.getElementById("snake");
      let x = 0;
      let y = 0;
      let direction = "right";

      setInterval(() => {
        const segment = document.createElement("div");
        segment.classList.add("snake-segment");
        segment.style.left = `${x}px`;
        segment.style.top = `${y}px`;
        snake.appendChild(segment);

        if (direction === "right") {
          x += 50;
        } else if (direction === "down") {
          y += 50;
        } else if (direction === "left") {
          x -= 50;
        } else if (direction === "up") {
          y -= 50;
        }

        if (x > 450) {
          direction = "down";
        } else if (y > 150) {
          direction = "left";
        } else if (x < 0) {
          direction = "up";
        } else if (y < 0) {
          direction = "right";
        }
      }, 500);
