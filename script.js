document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const celebration = document.getElementById('celebration');
    const buttonGroup = document.getElementById('button-group');
    const heartContainer = document.querySelector('.background-hearts');

    // 1. Background floating hearts generator
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-bg');
        // Random position, size, and speed to make it organic
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 10 + 's'; // 10-15s
        const scale = Math.random() * 0.5 + 0.5; // 0.5 - 1.0
        heart.style.transform = `scale(${scale})`;
        // We set background color slightly different for variety? No, CSS class handles shape.

        heartContainer.appendChild(heart);

        // Cleanup
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }
    // Create initial batch
    for (let i = 0; i < 5; i++) createHeart();
    // Continuous generation
    setInterval(createHeart, 2000);

    // 2. Button Avoidance Logic

    // Helper: Move button to random position
    function moveButton() {
        // Calculate safe area (card dimensions minus button size)
        const padding = 20;
        const card = document.querySelector('.card');
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Ensure card dictates the boundaries
        const maxWidth = card.clientWidth - btnWidth - padding;
        const maxHeight = card.clientHeight - btnHeight - padding;

        const randomX = Math.max(padding, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxHeight));

        // Apply absolute positioning relative to the card
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.2s ease'; // Fast movement

        // Add a fun rotation
        const randomRot = Math.random() * 20 - 10;
        noBtn.style.transform = `rotate(${randomRot}deg)`;
    }

    // Interaction handlers

    // Desktop: Mouseover behavior
    noBtn.addEventListener('mouseover', moveButton);

    // Mobile: Touchstart behavior (triggers before click)
    // We add {passive: false} to allow preventing default if needed, though mostly we just want the move.
    noBtn.addEventListener('touchstart', (e) => {
        // Prevent the actual tap/click if possible, so it feels like it jumps away under the finger
        e.preventDefault();
        moveButton();
    }, { passive: false });

    // Click fallback (just in case)
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
    });

    // 3. Acceptance Logic
    yesBtn.addEventListener('click', () => {
        // Hide initial UI
        document.querySelector('header').style.display = 'none';
        document.querySelector('.image-container').style.display = 'none'; // Maybe keep image? Let's keep it clean
        // Actually, user might want to see the cute bear still.
        // Let's just hide the question and buttons.
        question.style.display = 'none';
        buttonGroup.style.display = 'none';

        // Or better, let's replace the content area 
        const card = document.querySelector('.card');

        // Show celebration
        celebration.classList.remove('hidden');

        // Trigger effects
        triggerConfettiPop();
        startContinuousConfetti();
    });

    // Confetti Effects
    function triggerConfettiPop() {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            zIndex: 9999
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }

    function startContinuousConfetti() {
        const duration = 15 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            // launch a few confetti from the left edge
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
            });
            // and launch a few from the right edge
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
});
