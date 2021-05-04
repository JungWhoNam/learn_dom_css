// // append vs appendChild
// {
//     const body = document.body;

//     // html tag가 아니라 string 값으로 들어감 
//     body.append("<br />blah blah blah");

//     // body.appendChild("Hello World"); // error
//     body.appendChild(document.createElement("h1"));
// }


// // innerText vs textContent
// {
//     const div = document.querySelector("div");
//     // only the visibile information from the page...
//     // so if a text is displayed in the page, it will not be there...
//     console.log(div.innerText);
//     // shows all the visible and invisible information from the page...
//     console.log(div.textContent);
// }


// a safter way of adding new elements to existing html
// avoiding javascript injection
// make sure whatever input from the users is put with "innerHTML"...
// or put it as a string
// https://www.youtube.com/watch?v=ns1LX6mEvyM
// {
//     const body = document.body;
//     const div = document.createElement("div");

//     // script 태그는 작동이 안 됨 (브라우져에서 막음) 
//     // img 태그의 error callback 사용해서 injection을 할 수 있음
//     //const inputFromUser = '<script>alert("hello");<script>';
//     const inputFromUser = '<img src onerror="alert(\'hi\')">';

//     // Option #1 (not safe from a javascript injection)
//     // div.innerHTML = `<strong>${inputFromUser}</strong>`;

//     // Option #2 (to guard)
//     // div.innerText = `<strong>${inputFromUser}</strong>`;

//     // Option #3 - (to guard)
//     const strong = document.createElement("strong");
//     strong.innerText = inputFromUser; // provided by the user
//     div.appendChild(strong);

//     body.appendChild(div);
// }

{
    const world = document.querySelector(".world");
    console.log(world.getAttribute("class"));
    // access the custom data attribute by "dataset"
    console.log(world.dataset.test);
    // data-longer-name은 camel case로 바뀜
    console.log(world.dataset.longerName);
    // access the class attributes
    console.log(world.classList);
    // add/remove class
    world.classList.toggle("toggle", false);
    // access CSS property
    world.style.display = "block";
    // background-color이 camel case로 바뀜
    world.style.backgroundColor = "red";
}