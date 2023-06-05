const mas = document.querySelector(".row-work li:nth-of-type(2)")
console.log('here');

console.log(mas);



const curtain = (e) => {

  console.log('script here');

  const masUl = document.querySelector(".mas")
  if (masUl.style.display === "" || masUl.style.display === "block") {
    masUl.style.display = "none"
  } else {
    masUl.style.display = "block"
  }


}

mas.addEventListener('click', curtain)



const pseudoLine = document.querySelector(".pseudoLine")
console.log("lines line lines", pseudoLine)


window.addEventListener('scroll', (e)=>{ 

  const scrTop = document.scrollingElement.scrollTop
  const scrHeight = document.scrollingElement.scrollHeight
  const clientHeight = document.scrollingElement.clientHeight

  console.log("client", clientHeight, "scrollHeight", scrHeight)

  // const pagePercent= ((scrTop+window.innerHeight)/scrHeight);
  const pagePercent= (scrTop/(scrHeight-clientHeight));

  pseudoLine.style.width = pagePercent*document.scrollingElement.scrollWidth

  // console.log("top", scrTop, "hiet", scrHeight, "PERCETNAGE", Math.floor(pagePercent))

// console.log("top plus window height",scrTop+window.innerHeight)
  

  // console.log("window height", window.innerHeight)

})

console.log("scroll doc", document.scrollingElement)