window.addEventListener("DOMContentLoaded", (event) => {
  // Your JavaScript goes here...
  console.log("Hello World");
});


// window.onload(
  //   console.log("Hello World");
  // )


  // window.addEventListener("DOMContentLoaded", (event) => {
    //   // Your JavaScript goes here...
    //   console.log("Hello World");
    // });

    // // window.onload(
      //   // console.log("Hello World")
      // // );

      // document.cookie = "monster_name=cookie";

      document.cookie = "favorite_cookie=snickerdoodle";

      document.cookie = "monster_name=cookie";

      // window.alert("Hello World");

      // window.prompt("Hello World");

      function setCookie(name, value){
        document.cookie = `${name}=${value}`;
      }
      setCookie("Monster", 200);
