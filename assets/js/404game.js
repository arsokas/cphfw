 document.addEventListener("DOMContentLoaded", () => {
            const gameArea = document.querySelector(".shoe-game");
            const scoreboard = document.querySelector(".scoreboard");
            let score = 0;

            function spawnShoe() {
                const shoe = document.createElement("img");
                shoe.src = "assets/img/red-heels.svg";
                shoe.alt = "Flying red heels";
                shoe.classList.add("flying-shoe");
                gameArea.appendChild(shoe);

                const shoeWidth = 100;
                const shoeHeight = 100;
                // start somewhere random
                let x = Math.random() * (window.innerWidth - shoeWidth);
                let y = Math.random() * (window.innerHeight - shoeHeight);
                let dx = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3);
                let dy = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3);

                function move() {
                    const vw = window.innerWidth;
                    const vh = window.innerHeight;
                    if (x <= 0) { x = 0; dx = Math.abs(dx); }
                    if (x + shoeWidth >= vw) { x = vw - shoeWidth; dx = -Math.abs(dx); }
                    if (y <= 0) { y = 0; dy = Math.abs(dy); }
                    if (y + shoeHeight >= vh) { y = vh - shoeHeight; dy = -Math.abs(dy); }
                    x += dx;
                    y += dy;
                    shoe.style.left = `${x}px`;
                    shoe.style.top = `${y}px`;
                    if (gameArea.contains(shoe)) requestAnimationFrame(move);
                }

                // use top/left instead of translat
                shoe.style.position = "absolute";
                shoe.style.left = `${x}px`;
                shoe.style.top = `${y}px`;

                requestAnimationFrame(move);

                shoe.addEventListener("click", () => {
                    score++;
                    scoreboard.textContent = `👠 ${score}`;
                    shoe.remove();
                });
            }

            // start with one shoe
            spawnShoe();

            // keep spawning new ones every second
            setInterval(spawnShoe, 1000);
        });