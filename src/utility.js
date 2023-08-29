
export const activeSkillProgress = () => {
    const progress_inner = document.querySelectorAll(".skill-lt"),
      triggerBottom = (window.innerHeight / 5) * 5;
    progress_inner.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top,
        boxElement = box.getElementsByClassName("skill-bar"),
        boxItem = boxElement[0],
        pWidth = box.getAttribute("data-value");
      if (boxTop < triggerBottom) {
        boxItem.classList.add("open");
        boxItem.getElementsByClassName("skill-bar-in")[0].style.width = `${pWidth}%`;
      } else {
        boxItem.classList.remove("open");
      }
    });
  };

 export const scroll_ = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".main-menu li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("active");
    }
  });
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("body");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("fixed-header");
      } else {
        sticky.classList.remove("fixed-header");
      }
    }
  });
};