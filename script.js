
// {
//     const body = document.body;

//     body.append("blah blah blah");

//     // body.appendChild("Hello World"); // error
//     body.appendChild(document.createElement("h1"));
// }

// innerText vs textContent
// {
//     const div = document.querySelector("div");
//     // only the visibile information from the page...
//     // so if a text is displayed in the page, it will not be there...
//     console.log(div.innerText);
//     // shows all the visible and invisible information from the page...
//     console.log(div.textContent);
// }


//https://www.youtube.com/watch?v=ns1LX6mEvyM
// a safter way of adding new elements to existing html
// {
//     const body = document.body;
//     const div = document.createElement("div");

//     const inputFromUser = `
//         <script>
//             alert("Hello~~~");
//         </script>
//     `;

//     // Option #1
//     // div.innerHTML = inputFromUser;

//     // Option #2 - more readable and safe way of editing the html thru JS
//     const strong = document.createElement("strong");
//     strong.innerText = inputFromUser; // provided by the user
//     div.appendChild(strong);

//     body.appendChild(div);
// }


//https://www.youtube.com/watch?v=y17RuWkWdn8
{

}