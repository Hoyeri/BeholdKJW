const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "당신은 내 함정카드에 걸렸어.<br>나랑 평생 고피자 머거.";
  gif.src = "https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif?cid=ecf05e47fp2v5xvjnhrw8ausxchvsiy7jieyu3x4c40r8cis&ep=v1_gifs_search&rid=giphy.gif&ct=g";

  yesBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});