window.addEventListener("DOMContentLoaded", (event) => {
  // Your JavaScript goes here...
  // console.log("Hello World");



  document.cookie = "favorite_cookie=snickerdoodle";

  document.cookie = "monster_name=cookie";

  // window.alert("Hello World");

  // window.prompt("Hello World");

  function setCookie(name, value){
    document.cookie = `${name}=${value}`;
  }
  setCookie("Monster", 200);

  function getCookies() {
    let cookieArray = document.cookie.split("; ");
    return cookieArray;
  }
  //"favorite_cookie=snickerdoodle; monster_name=cookie, ...""
  console.log(getCookies());
  //["favorite_cookie=snickerdoodle", "monster_name=cookie", "Monster=200"]


  function getCookieValue(name) {
    let cookieArray = getCookies();

    for (let i = 0; i < cookieArray.length; i++) {
      let ele = cookieArray[i];

      let keyValueArray = ele.split("="); //makes an array

      let key = keyValueArray[0];
      let value = keyValueArray[1];
      if (key === name) {
        return value;
      }
    }
    return null;

  }

  function deleteCookie(name){
    let cookieArray = getCookies();

    for (let i = 0; i < cookieArray.length; i++) {
      let ele = cookieArray[i];

      let keyValueArray = ele.split("="); //makes an array

      let key = keyValueArray[0];
      let value = keyValueArray[1];
      if (key === name) {
        document.cookie = `${name}=; expires = Thu, 01 Jan 1970 00:00:00GMT`;
        return;
      }
    }
    return "cookie wasn't found";
  }

  setCookie("random", Math.floor(Math.random() * (1000 - 500 + 1) + 500))

  const newWindow = window.open("https://www.google.com", "Google", "width=100, height=100")
  // // resize the new window
  newWindow.resizeTo(getCookieValue("random"), getCookieValue("random"));
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
