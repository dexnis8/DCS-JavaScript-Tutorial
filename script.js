// const header = document.querySelector("h1");
// const btn = document.getElementsByTagName("button")[0];

// console.log(header);
// // console.log(header.innerHTML);
// // console.log(header.innerText);
// console.log(btn);
// // console.log(btn.innerHTML);
// // console.log(btn.innerText);

// // // btn.innerHTML = "Isaac";
// // // btn.innerText = "<div>My name is Isaac</div>";
// // btn.innerHTML = "<div>My name is Isaac</div>";

// const changeHeader = () => {
//   header.innerText = "Welcome to Javascript Tutorial";
//   btn.style.backgroundColor = "red";
// };
// // add eventlistener
// btn.addEventListener("click", changeHeader);

//

const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);

// cardContainer.innerHTML = `<div class="card">
//         <div class="card-img">
//           <img src="img1.jpg" alt="" />
//         </div>
//         <div class="card-back">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//             quaerat quo, quibusdam quasi, quia quod, quas quia.
//           </p>
//         </div>
// </div>

// `;

const data = [
  {
    imgUrl: "./img1.jpg",
    text: "This is the first image",
  },
  {
    imgUrl: "./img2.jpg",
    text: "This is the second image",
  },
  {
    imgUrl: "./img3.jpg",
    text: "This is the third image",
  },
  {
    imgUrl: "./img4.webp",
    text: "This is the fourth image",
  },
];

cardContainer.innerHTML = ``;
// for (let i = 1; i <= 3; i++) {
//   console.log(i);

//   cardContainer.innerHTML += `<div class="card">
//         <div class="card-img">
//           <img src="./img${i}.jpg" alt="" />
//         </div>
//         <div class="card-back">
//           <p>
//            ${data[i].text}
//           </p>
//         </div>
// </div>`;
// }

for (let i = 0; i < 4; i++) {
  console.log(i);
  cardContainer.innerHTML += `<div class="card">
        <div class="card-img">
          <img src=${data[i].imgUrl} alt="" />
        </div>
        <div class="card-back">
          <p>
           ${data[i].text}
          </p>
        </div>
</div>`;
}
