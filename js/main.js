"use strict";

{
  class Panel {
    constructor() {
      const section = document.createElement("section");
      section.classList.add("panel");

      //img要素とstopのdiv要素をこのクラスのプロパティーとする
      this.img = document.createElement("img");
      this.img.src = "img/seven.png";

      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop");
    }
  }
}
