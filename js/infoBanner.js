AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      avengers: {
        title: "The Avengers",
        released_year: "1963",
        description:
          "Written by Stan Lee (also creator of fictional character of Spider-Man) with illustrations by Jack Kirby, TheAvengers#1 was first released 1st September 1963.",
      },
      spiderman: {
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
      },
      drstrange: {
        title: "Dr.Strange",
        released_year: "1942",
        description:
          "Co-created by Stan Lee and steve Dikto, Dr.Strange, the 'master of dark magic' was first seen hitting comic book shelves in 1963, around the same time Spider-Man was created.",
      },
      thor: {
        title: "Thor",
        released_year: "1952",
        description:
          "The God of Thunder, Lightning and... agriculture? Not sure about that one, but Thor is one of Marvel's fiercest and funniest hereos yet!",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    //entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 })

    const item = postersInfo[itemId];


    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);


    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
