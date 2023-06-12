// const mas = document.querySelector(".row-work li:nth-of-type(2)")
// console.log('here');

// console.log("mas is heree", mas);

//.row-work INSTEAD OF OLD JOBS
//  CURRENT TARGET PROPERTY WILL ALWAYS BE THE LAST ITEM FROM THE SELECTION
const workItems = document.querySelectorAll(".old-jobs > li");

const curtain = (e) => {
  const workLi = e.currentTarget;

  const jobBtn = workLi.querySelector(".jobBtn");
  const jobDetail = workLi.querySelector(".job-details");

  jobBtn.classList.toggle("expanded");

  jobDetail.classList.toggle("expanded");

  // const masUl = document.querySelector("#mas")
  // if (masUl.style.display === "" || masUl.style.display === "block") {
  //   masUl.style.display = "none"
  // } else {
  //   masUl.style.display = "block"
  // }
};

const curtainDown = (e) => {
  const workLi = e.currentTarget;

  const jobDetail = workLi.querySelector(".job-details");

  jobDetail.classList.toggle("expandDown");
};

const workArr = Array.from(workItems);

const workUp = workArr.slice(0, 3);

workUp.forEach((item) => {
  console.log(item);

  item.addEventListener("click", curtain);
});


const workDown = workArr.slice(3)
workDown.forEach((item)=>{
  item.addEventListener("click", curtainDown)
})

const pseudoLine = document.querySelector(".pseudoLine");
console.log("lines line lines", pseudoLine);

window.addEventListener("scroll", (e) => {
  const scrTop = document.scrollingElement.scrollTop;
  const scrHeight = document.scrollingElement.scrollHeight;
  const clientHeight = document.scrollingElement.clientHeight;

  console.log("client", clientHeight, "scrollHeight", scrHeight);

  // const pagePercent= ((scrTop+window.innerHeight)/scrHeight);
  const pagePercent = scrTop / (scrHeight - clientHeight);

  pseudoLine.style.width = pagePercent * document.scrollingElement.scrollWidth;

  // console.log("top", scrTop, "hiet", scrHeight, "PERCETNAGE", Math.floor(pagePercent))

  // console.log("top plus window height",scrTop+window.innerHeight)

  // console.log("window height", window.innerHeight)
});

console.log("scroll doc", document.scrollingElement);
