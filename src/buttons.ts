function setBodyMargin(marginLeft: number, marginTop: number) {
  document.body.style.marginTop = `${marginLeft}px`;
  document.body.style.marginLeft = `${marginTop}px`;
}

setBodyMargin(0, 0);

const setMarginButton = document.querySelector(
  "#set-button"
) as HTMLButtonElement;
setMarginButton.addEventListener("click", () => {
  const marginLeft = (
    document.querySelector(`input[name='marginLeft']`) as HTMLInputElement
  ).value;
  const marginTop = (
    document.querySelector(`input[name='marginTop']`) as HTMLInputElement
  ).value;
  setBodyMargin(Number(marginLeft), Number(marginTop));
});
document.body.appendChild(setMarginButton);

const removeMarginButton = document.querySelector(
  "#remove-button"
) as HTMLButtonElement;
removeMarginButton.addEventListener("click", () => setBodyMargin(0, 0));
document.body.appendChild(removeMarginButton);

export {};
