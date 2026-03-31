const link=document.querySelector("a");

    link.textContent="Mozilla Developer Network";

    link.href="https://developer.mozilla.org";

const sect=document.querySelector("section");

const img=document.querySelector("img");

const para = document.createElement("p");

    para.textContent = "We hope you enjoyed the ride.";

    para.classList.add("highlight");

sect.appendChild(para);

const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");

    linkPara.appendChild(text);

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";