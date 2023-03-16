/*=========================================================================================================================
* Routes
=========================================================================================================================*/
const routes = {
    types: ["normal", "tunnel", { ferry: 0 }, "double"],
    lengths: [1, 2, 3, 4, 6, 8],
    AB: {
      color: "orange",
      length: 3,
      type: "normal",
      owner: "",
    },
    BC: {
      color: "any",
      length: 2,
      type: { ferry: 1 },
      owner: "",
    },
    AD: {
      color: "green",
      length: 4,
      type: "normal",
      owner: "",
    },
    DC: {
      color: "any",
      length: 2,
      type: "normal",
      owner: "",
    },
    CE: {
      color: "blue",
      length: 3,
      type: "tunnel",
      owner: "",
    },
    BE: {
      color: ["red", "white"],
      length: 2,
      type: "double",
      owner: ["", ""],
    },
  };