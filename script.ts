const button = document.getElementById('clickButton') as HTMLButtonElement;
const message = document.getElementById('message') as HTMLParagraphElement;

let clickCount: number = 0;

button.addEventListener('click', (): void => {
    clickCount++;
    message.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
});
