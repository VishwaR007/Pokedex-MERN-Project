// JSON FILE IMPORT :
let pockedexJSONCopy = JSON.parse(JSON.stringify(pockedexJSON));
// pockedexJSON --- First Main Arr
// pockedexJSONCopy --- Second MAin Arr
// pockedexJSONArray --- Third Main Arr
let pockedexJSONArray = [];
let maxVal = 16;
let statusOfGame = "General";
let sortStatus = "General";
let searchStatus = "General";
let advanceSearchActivation = "deactive";
let likedPoksArr = [];
let presentUserName = "";
let presentUserEmail = "";

// No home page without Authentication :
if (localStorage.getItem("Access") == "Not Given") {
  window.location.href = "/logIn";
}

// Fetch user details from login and signup
fetch(`/user`)
  .then((response) => response.json())
  .then((message) => {
    presentUserName = message.fnameGlobal;
    presentUserEmail = message.emailGlobal;
    likedPoksArr = message.likedPoksArrGlobal;

    lodaingMianBloksOfHTML();
    bodyContents();
    footerContents();
    navBarContents();
  });

// IMPORTED FROM HTML :
const mainContainer = document.querySelector(".mainContainer");

// // MAIN DOM VARAIABLES DECLARED :
const root = {
  navBar: {
    navBar: document.createElement("div"),
    childElms: {
      navBarContainer: {
        navBarContainer: document.createElement("div"),
        childElms: {
          navBarHeading: document.createElement("img"),
          // navBarLogo: document.createElement("img"),
          navBarLogo: document.createElement("div"),
        },
      },
      searchBarMainContainer: {
        searchBarMainContainer: document.createElement("div"),
        childElms: {
          searchBarFirstBox: {
            searchBarFirstBox: document.createElement("div"),
            childElms: {
              searchBarFirstInfo: document.createElement("h2"),
              searchBarFirstBoxForm: {
                searchBarFirstBoxForm: document.createElement("form"),
                childElms: {
                  searchBarFirstBoxFormInput: document.createElement("input"),
                  searchBarFirstBoxFormSmtBtn: document.createElement("button"),
                },
              },
            },
          },
          surpriseAndSortThirdBox: {
            surpriseAndSortThirdBox: document.createElement("div"),
            childElms: {
              surpriseMainBox: {
                surpriseMainBox: document.createElement("div"),
                childElms: {
                  surpriseBtn: document.createElement("button"),
                },
              },
              sortMainBox: {
                sortMainBox: document.createElement("div"),
                childElms: {
                  sortDropDownLabel: document.createElement("label"),
                  sortDropDown: {
                    sortDropDown: document.createElement("select"),
                    childElms: {
                      // sortDropDownOptions: document.createElement("option"),
                      // Created Inside a for loop
                    },
                  },
                },
              },
            },
          },
        },
      },
      advanceSearchMainContainer: {
        advanceSearchMainContainer: document.createElement("div"),
        childElms: {
          advanceSearchInfo: document.createElement("button"), // This should be appended at the last.

          advanceSearchContentBox: {
            advanceSearchContentBox: document.createElement("div"),
            childElms: {
              advanceSearchContentBoxTop: {
                advanceSearchContentBoxTop: document.createElement("div"),
                childElms: {
                  advanceSearchTopLeftBox: {
                    advanceSearchTopLeftBox: document.createElement("div"),
                    childElms: {
                      advanceSearchTandWBox: {
                        advanceSearchTandWBox: document.createElement("div"),
                        childElms: {
                          advanceSearchTandWHeading:
                            document.createElement("h1"),
                          advanceSearchTandWContent: {
                            advanceSearchTandWContent:
                              document.createElement("div"),
                            childElms: {
                              // here in for loop create a div which can hold One big btn and 2 small round-round btn
                            },
                          },
                        },
                      },
                    },
                  },
                  advanceSearchTopRightBox: {
                    advanceSearchTopRightBox: document.createElement("div"),
                    childElms: {
                      advanceSearchAbilityBox: {
                        advanceSearchAbilityBox: document.createElement("div"),
                        childElms: {
                          advanceSearchAbilityHeading:
                            document.createElement("h1"),
                          advanceSearchAbilityContent: {
                            advanceSearchAbilityContent:
                              document.createElement("select"),
                            childElms: {
                              // In loop create a option tag here.
                            },
                          },
                        },
                      },
                      advanceSearchHeightBox: {
                        advanceSearchHeightBox: document.createElement("div"),
                        childElms: {
                          advanceSearchHeightHeading:
                            document.createElement("h1"),
                          advanceSearchHeightContent: {
                            advanceSearchHeightContent:
                              document.createElement("div"),
                            childElms: {
                              // Here do looping 3 times and create a div and inside div append an image atg = total 3 div and 3 img tags - each img inside each div.
                            },
                          },
                        },
                      },
                      advanceSearchWeightBox: {
                        advanceSearchWeightBox: document.createElement("div"),
                        childElms: {
                          advanceSearchWeightHeading:
                            document.createElement("h1"),
                          advanceSearchWeightContent: {
                            advanceSearchWeightContent:
                              document.createElement("div"),
                            childElms: {
                              // Here do looping 3 times and create a div and inside div append an image atg = total 3 div and 3 img tags - each img inside each div.
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              advanceSearchContentBoxBottom: {
                advanceSearchContentBoxBottom: document.createElement("div"),
                childElms: {
                  advanceSearchBottomNumberRange: {
                    // Number Range :
                    advanceSearchBottomNumberRange:
                      document.createElement("div"),
                    childElms: {
                      advanceSearchNumberRangeHeading:
                        document.createElement("h1"),
                      advanceSearchNumberRangeContent: {
                        advanceSearchNumberRangeContent:
                          document.createElement("div"),
                        childElms: {
                          advanceSearchNumberRangeInputFrom:
                            document.createElement("input"),
                          advanceSearchNumberRangeFToT:
                            document.createElement("p"),
                          advanceSearchNumberRangeInputTo:
                            document.createElement("input"),
                        },
                      },
                    },
                  },
                  advanceSearchBottomResetAndSearch: {
                    // Reset And Search :
                    advanceSearchBottomResetAndSearch:
                      document.createElement("div"),
                    childElms: {
                      advanceSearchResetBtn: document.createElement("button"),
                      advanceSearchSearchBtn: document.createElement("button"),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  body: {
    body: document.createElement("div"),
    childElms: {
      pokemonBoxesContaienr: {
        pokemonBoxesContaienr: document.createElement("div"),
        childElms: {},
      },
    },
  },
  footer: {
    footer: document.createElement("div"),
    childElms: {
      showMoreAndLessContainer: {
        showMoreAndLessContainer: document.createElement("div"),
        childElms: {
          showMoreBtn: document.createElement("button"),
          showLessBtn: document.createElement("button"),
        },
      },
    },
  },
};

// GLOBAL DECLARATION :
const { pokemonBoxesContaienr } = root.body.childElms.pokemonBoxesContaienr;

// CLEANING JSON :
let newArrToCleanJSON = [];
for (let i = 0; i < pockedexJSONCopy.length; i++) {
  if (newArrToCleanJSON.length < 1) {
    newArrToCleanJSON.push(pockedexJSONCopy[i].id);
  } else if (pockedexJSONCopy[i - 1].id !== pockedexJSONCopy[i].id) {
    newArrToCleanJSON.push(pockedexJSONCopy[i].id);
  } else {
    pockedexJSONCopy[i - 1].type = Array.from(
      new Set([...pockedexJSONCopy[i - 1].type, ...pockedexJSONCopy[i].type])
    );
    pockedexJSONCopy[i - 1].weakness = Array.from(
      new Set([
        ...pockedexJSONCopy[i - 1].weakness,
        ...pockedexJSONCopy[i].weakness,
      ])
    );
    pockedexJSONCopy[i - 1].height >= pockedexJSONCopy[i].height
      ? (pockedexJSONCopy[i - 1].height = pockedexJSONCopy[i - 1].height)
      : (pockedexJSONCopy[i - 1].height = pockedexJSONCopy[i].height);
    pockedexJSONCopy[i - 1].weight >= pockedexJSONCopy[i].weight
      ? (pockedexJSONCopy[i - 1].weight = pockedexJSONCopy[i - 1].weight)
      : (pockedexJSONCopy[i - 1].weight = pockedexJSONCopy[i].weight);
    pockedexJSONCopy.splice(i, 1);
    i = i - 1;
  }
}

// Loading Main Block for HTML:
function lodaingMianBloksOfHTML() {
  root.navBar.navBar.classList.add("navBar");
  mainContainer.appendChild(root.navBar.navBar);

  root.body.body.classList.add("body");
  mainContainer.appendChild(root.body.body);

  root.footer.footer.classList.add("footer");
  mainContainer.appendChild(root.footer.footer);
}

// BODY :
function bodyContents() {
  root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.classList.add(
    "pokemonBoxesContaienr"
  );
  root.body.body.appendChild(
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr
  );
  for (let i = 0; i < 16; i++) {
    pockedexJSONArray.push(pockedexJSONCopy[i]);
  }
  pockedexJSONArray.forEach((pokObj) => {
    displayPokemonBoxes(pokObj, pokemonBoxesContaienr);
  });
}

let startValForShowMore = 16;
let endValForShowMore = 16;
let numbersToAddToEndVal = 0;

// FOOTER :
function footerContents() {
  const { showMoreAndLessContainer } =
    root.footer.childElms.showMoreAndLessContainer;
  const { showMoreBtn, showLessBtn } =
    root.footer.childElms.showMoreAndLessContainer.childElms;

  showMoreAndLessContainer.classList.add("showMoreAndLessContainer");
  root.footer.footer.appendChild(showMoreAndLessContainer);

  showMoreBtn.classList.add("showMoreBtn");
  showMoreBtn.innerText = "Show More";
  showMoreAndLessContainer.appendChild(showMoreBtn);

  showLessBtn.classList.add("showLessBtn");
  showLessBtn.innerText = "Show Less";
  showMoreAndLessContainer.appendChild(showLessBtn);

  startValForShowMore = 16;
  endValForShowMore = 32;
  numbersToAddToEndVal = 0;

  let showLessArrayJSON = [];
  let showMoreArrayJSON = [];

  // ===================================================================================
  showMoreBtn.addEventListener("click", () => {
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "";
    showMoreArrayJSON = [];
    numbersToAddToEndVal = 0;

    if (statusOfGame == "General") {
      for (let i = startValForShowMore; i < endValForShowMore; i++) {
        if (pockedexJSONCopy[i]) {
          showMoreArrayJSON.push(pockedexJSONCopy[i]);
          numbersToAddToEndVal += 1;
          showMoreBtn.style.display = "block";
        } else {
          showMoreBtn.style.display = "none";
        }
      }
      startValForShowMore += numbersToAddToEndVal;
      endValForShowMore += numbersToAddToEndVal;
    }

    if (statusOfGame == "SurpriseMe") {
      if (showLessArrayJSON.length > 0) {
        for (let i = startValForShowMore; i < endValForShowMore; i++) {
          if (showLessArrayJSON.includes(surpriseMeArrayJSON[i])) {
            let indexForArrSurpriseShowMore = Math.floor(Math.random() * 1010);
            if (
              !pockedexJSONArray.includes(
                surpriseMeArrayJSON[indexForArrSurpriseShowMore]
              )
            ) {
              showMoreArrayJSON.push(
                surpriseMeArrayJSON[indexForArrSurpriseShowMore]
              );
            } else {
              endValForShowMore += 1;
              startValForShowMore += 1;
            }
          } else {
            if (!pockedexJSONArray.includes(surpriseMeArrayJSON[i])) {
              showMoreArrayJSON.push(surpriseMeArrayJSON[i]);
            } else {
              endValForShowMore += 1;
              startValForShowMore += 1;
            }
          }
        }
      } else {
        let i = startValForShowMore;
        for (i = startValForShowMore; i < endValForShowMore; i++) {
          if (
            !pockedexJSONArray.includes(surpriseMeArrayJSON[i]) &&
            !showMoreArrayJSON.includes(surpriseMeArrayJSON[i])
          ) {
            showMoreArrayJSON.push(surpriseMeArrayJSON[i]);
          } else {
            endValForShowMore += 1;
            startValForShowMore += 1;
          }
        }
      }
      numbersToAddToEndVal += 16;
    }

    if (statusOfGame == "NormalSort") {
      for (let i = startValForShowMore; i < endValForShowMore; i++) {
        if (normalSortArrayJSON[i]) {
          showMoreArrayJSON.push(normalSortArrayJSON[i]);
          showMoreBtn.style.display = "block";
          numbersToAddToEndVal += 1;
        } else {
          showMoreBtn.style.display = "none";
        }
      }
      startValForShowMore += numbersToAddToEndVal;
      endValForShowMore += numbersToAddToEndVal;
    }

    if (statusOfGame == "FinalAdvaceSearch") {
      for (let i = startValForShowMore; i < endValForShowMore; i++) {
        if (finalResultObject[i]) {
          showMoreArrayJSON.push(finalResultObject[i]);
          showMoreBtn.style.display = "block";
          numbersToAddToEndVal += 1;
        } else {
          showMoreBtn.style.display = "none";
        }
      }
      startValForShowMore += numbersToAddToEndVal;
      endValForShowMore = endValForShowMore + numbersToAddToEndVal;
    }

    showLessArrayJSON = [];

    showMoreArrayJSON.forEach((showMorePokObj) => {
      pockedexJSONArray.push(showMorePokObj);
    });
    pockedexJSONArray.forEach((pokObj) => {
      displayPokemonBoxes(pokObj, pokemonBoxesContaienr);
    });
  });

  showLessBtn.addEventListener("click", () => {
    endValForShowMore = endValForShowMore - numbersToAddToEndVal;
    startValForShowMore = startValForShowMore - numbersToAddToEndVal;

    pockedexJSONArray.length < 33
      ? (showLessBtn.style.display = "none")
      : (showLessBtn.style.display = "block");

    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "";
    showLessArrayJSON = [];

    for (let i = 0; i < numbersToAddToEndVal; i++) {
      showLessArrayJSON.push(pockedexJSONArray.pop());
      showMoreBtn.style.display = "block";
    }
    pockedexJSONArray.forEach((pokObj) => {
      displayPokemonBoxes(pokObj, pokemonBoxesContaienr);
    });
  });
}

// POKEMON DISPLAY :
function displayPokemonBoxes(pokObj, parentContainer) {
  const pokemonMainBox = document.createElement("div");
  pokemonMainBox.classList.add("pokemonMainBox");
  pokemonMainBox.setAttribute("id", pokObj.id);
  pokemonMainBox.addEventListener("click", (e) => {
    singleClickHandlerOnPok(e);
  });

  if (parentContainer == pokemonBoxesContaienr) {
    pokemonMainBox.addEventListener("dblclick", (e) => {
      doubleClickHandlerOnPok(e);
    });
  }
  parentContainer.appendChild(pokemonMainBox);

  const pokemonImageConatiner = document.createElement("div");
  pokemonImageConatiner.classList.add("pokemonImageConatiner");
  const pokemonImage = document.createElement("img");
  pokemonImage.classList.add("pokemonImage");
  pokemonImage.src = pokObj.ThumbnailImage;
  pokemonImageConatiner.appendChild(pokemonImage);

  const pokemonNameAndNumberContainer = document.createElement("div");
  pokemonNameAndNumberContainer.classList.add("pokemonNameAndNumberContainer");

  pokemonMainBox.appendChild(pokemonImageConatiner);
  pokemonMainBox.appendChild(pokemonNameAndNumberContainer);

  const pokNumAndHeartBox = document.createElement("div");
  pokNumAndHeartBox.classList.add("pokNumAndHeartBox");

  const pokemonNumber = document.createElement("p");
  pokemonNumber.classList.add("pokemonNumber");
  pokemonNumber.innerText = `#${pokObj.number}`;
  const pokemonHeart = document.createElement("h2");
  pokemonHeart.classList.add("pokemonHeart", `pokemonHeart-${pokObj.id}`);
  pokemonHeart.innerHTML = "&hearts;";
  pokemonHeart.setAttribute("id", pokObj.id);
  if (likedPoksArr.includes(String(pokObj.id))) {
    pokemonHeart.style.color = "red";
  } else {
    pokemonHeart.style.color = "white";
  }
  pokemonHeart.addEventListener("click", (e) => {
    onClickOfHeart(e);
  });

  pokNumAndHeartBox.appendChild(pokemonNumber);
  pokNumAndHeartBox.appendChild(pokemonHeart);

  const pokemonHeightWeight = document.createElement("p");
  pokemonHeightWeight.classList.add("pokemonHeightWeight");
  pokemonHeightWeight.innerText = `[H : ${pokObj.height}, W : ${pokObj.weight}]`;
  const pokemonName = document.createElement("p");
  pokemonName.classList.add("pokemonName");
  pokemonName.innerText = pokObj.name;

  pokemonNameAndNumberContainer.appendChild(pokNumAndHeartBox);
  pokemonNameAndNumberContainer.appendChild(pokemonName);
  pokemonNameAndNumberContainer.appendChild(pokemonHeightWeight);

  const pokemonTypeContainer = document.createElement("div");
  pokemonTypeContainer.classList.add("pokemonTypeContainer");
  pokemonMainBox.appendChild(pokemonTypeContainer);

  pokObj.type.forEach((pokType) => {
    const pokemonTypeBtn = document.createElement("button");
    pokemonTypeBtn.classList.add("pokemonTypeBtn");
    pokemonTypeBtn.innerText = pokType;
    if (pokedexPokemonTypeColor[pokType].backGroundClr.length == 1) {
      pokemonTypeBtn.style.background =
        pokedexPokemonTypeColor[pokType].backGroundClr[0];
    } else {
      pokemonTypeBtn.style.background = `linear-gradient(${pokedexPokemonTypeColor[pokType].backGroundClr[0]} 50%, ${pokedexPokemonTypeColor[pokType].backGroundClr[1]} 50%)`;
    }
    pokemonTypeContainer.appendChild(pokemonTypeBtn);
  });

  if (
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr
      .childElementCount < 17
  ) {
    root.footer.childElms.showMoreAndLessContainer.childElms.showLessBtn.style.display =
      "none";
  } else {
    root.footer.childElms.showMoreAndLessContainer.childElms.showLessBtn.style.display =
      "block";
  }

  if (
    parentContainer.classList.value == "pokCompareLeftBox" ||
    parentContainer.classList.value == "pokCompareRightBox"
  ) {
    pokemonMainBox.style.backgroundColor = "black";
  }
}

// NAVBAR :
function navBarContents() {
  root.navBar.childElms.navBarContainer.navBarContainer.classList.add(
    "navBarContainer"
  );
  root.navBar.navBar.appendChild(
    root.navBar.childElms.navBarContainer.navBarContainer
  );

  root.navBar.childElms.navBarContainer.childElms.navBarHeading.classList.add(
    "navBarHeading"
  );
  root.navBar.childElms.navBarContainer.childElms.navBarHeading.src =
    "./imgs/logo/logo4.png";
  root.navBar.childElms.navBarContainer.navBarContainer.appendChild(
    root.navBar.childElms.navBarContainer.childElms.navBarHeading
  );

  // offCanvas :
  offCanvasDisplay();

  // Search Bar :
  searchBarContainerDisplayFunction();

  //   Advance Search Bar :
  advanceSearchDisplay();

  // Surprise and Sort :
  root.navBar.childElms.searchBarMainContainer.searchBarMainContainer.appendChild(
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.surpriseAndSortThirdBox
  );
  root.navBar.childElms.searchBarMainContainer.childElms.surpriseAndSortThirdBox.surpriseAndSortThirdBox.classList.add(
    "surpriseAndSortThirdBox"
  );
  // Surprise :
  surpriseBtnDisplayFunc();
  // Sort :
  sortDropDownDisplayFunc();
}
// navBarContents();

// offCanvas Display :
function offCanvasDisplay() {
  root.navBar.childElms.navBarContainer.childElms.navBarLogo.classList.add(
    "navBarLogo"
  );

  root.navBar.childElms.navBarContainer.childElms.navBarLogo.innerHTML = ` <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
    >
    ${presentUserName}
    </button>

    <div
      class="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
      style="width: 350px"
    >
      <div class="offcanvas-header offcanvasHeader">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          POCKEDEX
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body offcanvasBody">
        <div class="offcanvasLogoBox">
          <h1 class="offcanvasLogo">${presentUserName[0]}</h1>
          <h2 class="offcanvasUserName">${presentUserName}</h2>
        </div>
        <div class="offcanvasContentsBox">
          <div class="offcanvasContentsBoxBody">
            <h4 class="offcanvasGames" onClick="gamesHomePageDisplay()">Games</h4>
            <h4 class="offcanvasLiked" onClick="likedPokPageDisplay()">Liked</h4>
            <h4 class="offcanvasChats" onClick="chatPage()">Chats</h4>
          </div>
          <h4 class="offcanvasLogOut" onClick="logOutPageDisplay()">LOG OUT</h4>
        </div>
      </div>
    </div>`;

  root.navBar.childElms.navBarContainer.navBarContainer.appendChild(
    root.navBar.childElms.navBarContainer.childElms.navBarLogo
  );
}

let searchSubmitBtnArrayJSON = [];
// SEARCH BAR DISPLAY :
function searchBarContainerDisplayFunction() {
  const { searchBarMainContainer } =
    root.navBar.childElms.searchBarMainContainer;
  const { searchBarFirstBox } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox;
  const { searchBarFirstInfo } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox
      .childElms;
  const { searchBarFirstBoxForm } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox
      .childElms.searchBarFirstBoxForm;
  const { searchBarFirstBoxFormInput, searchBarFirstBoxFormSmtBtn } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox
      .childElms.searchBarFirstBoxForm.childElms;

  searchBarMainContainer.classList.add("searchBarMainContainer");
  root.navBar.navBar.appendChild(searchBarMainContainer);

  searchBarFirstBox.classList.add("searchBarFirstBox");
  searchBarMainContainer.appendChild(searchBarFirstBox);

  searchBarFirstInfo.classList.add("searchBarFirstInfo");
  searchBarFirstInfo.innerText =
    "Search for a Pokemon by name or using its National Pokedex number.";
  searchBarFirstBox.appendChild(searchBarFirstInfo);

  searchBarFirstBoxForm.classList.add("searchBarFirstBoxForm");
  searchBarFirstBox.appendChild(searchBarFirstBoxForm);

  searchBarFirstBoxFormInput.classList.add("searchBarFirstBoxFormInput");
  searchBarFirstBoxFormInput.maxLength = "15";
  searchBarFirstBoxForm.appendChild(searchBarFirstBoxFormInput);

  searchBarFirstBoxFormSmtBtn.classList.add("searchBarFirstBoxFormSmtBtn");
  searchBarFirstBoxFormSmtBtn.innerText = "Submit";
  searchBarFirstBoxForm.appendChild(searchBarFirstBoxFormSmtBtn);

  searchBarFirstBoxFormSmtBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchSubmitBtnArrayJSON = [];
    for (let i = 0; i < pockedexJSONCopy.length; i++) {
      if (
        pockedexJSONCopy[i].name.toLowerCase() ==
          searchBarFirstBoxFormInput.value.toLowerCase() ||
        pockedexJSONCopy[i].number == searchBarFirstBoxFormInput.value
      ) {
        searchSubmitBtnArrayJSON.push(pockedexJSONCopy[i]);
        root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
          "";
      } else {
      }
    }

    if (searchSubmitBtnArrayJSON.length > 0) {
      searchSubmitBtnArrayJSON.forEach((searchSubmitBtnPokObj) => {
        displayPokemonBoxes(searchSubmitBtnPokObj, pokemonBoxesContaienr);
      });
    } else {
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML = `No Element with the name "${searchBarFirstBoxFormInput.value}".`;
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.marginTop =
        "50px";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.justifyContent =
        "center";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.fontSize =
        "40px";
    }
  });
  searchBarFirstBoxFormInput.addEventListener("input", searchBarLogicFunction);
}

// Search bar Logic :
function searchBarLogicFunction() {
  searchStatus = "Searched";
  statusOfGame = "NormalSort";

  const { searchBarFirstBoxFormInput } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox
      .childElms.searchBarFirstBoxForm.childElms;

  searchSubmitBtnArrayJSON = [];

  if (searchBarFirstBoxFormInput.value.length > 0) {
    if (Number(searchBarFirstBoxFormInput.value)) {
      searchBarCheckForNumber();
    } else {
      searchBarCheckForName();
    }
  } else {
    root.footer.footer.style.display = "block";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "";
    searchStatus = "General";

    startValForShowMore = 16;
    endValForShowMore = 32;
    checkForSortBeforeDisplay();
  }
}

// Function to Check the value of sort before displaying it on the screen :
function checkForSortBeforeDisplay() {
  const dropDownListArr = [
    "Lowest Number (First)",
    "Highest Number (First)",
    "A-Z",
    "Z-A",
  ];

  startValForShowMore = 16;
  endValForShowMore = 32;

  if (
    !root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown
      .sortDropDown.value
  ) {
    root.navBar.childElms.searchBarMainContainer.childElms.surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown.sortDropDown.value =
      dropDownListArr[0];
  }

  if (
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown
      .sortDropDown.value == dropDownListArr[0]
  ) {
    sortFromLowestNumberToHighest();
  } else if (
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown
      .sortDropDown.value == dropDownListArr[1]
  ) {
    sortFromHighestNumberToLowest();
  } else if (
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown
      .sortDropDown.value == dropDownListArr[2]
  ) {
    sortFromAToZ();
  } else if (
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown
      .sortDropDown.value == dropDownListArr[3]
  ) {
    sortFromZToA();
  }
}

// Search Bar Logic for Name  :
function searchBarCheckForName() {
  const { searchBarFirstBoxFormInput } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox
      .childElms.searchBarFirstBoxForm.childElms;

  if (advanceSearchActivation == "deactive") {
    for (let i = 0; i < pockedexJSONCopy.length; i++) {
      if (
        pockedexJSONCopy[i].name
          .toLowerCase()
          .startsWith(searchBarFirstBoxFormInput.value.toLowerCase())
      ) {
        searchSubmitBtnArrayJSON.push(pockedexJSONCopy[i]);
        maxVal = 16;
      } else {
      }
    }
  }
  if (advanceSearchActivation == "active") {
    for (let i = 0; i < finalResultObject.length; i++) {
      if (
        finalResultObject[i].name
          .toLowerCase()
          .startsWith(searchBarFirstBoxFormInput.value.toLowerCase())
      ) {
        searchSubmitBtnArrayJSON.push(finalResultObject[i]);
        maxVal = 16;
      } else {
      }
    }
  }

  if (searchSubmitBtnArrayJSON.length <= 0) {
    root.footer.footer.style.display = "none";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.color =
      "white";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML = `No Element starts with the name "${searchBarFirstBoxFormInput.value}".`;
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.marginTop =
      "50px";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.justifyContent =
      "center";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.fontSize =
      "40px";
  } else {
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "";

    startValForShowMore = 16;
    endValForShowMore = 32;
    checkForSortBeforeDisplay();
  }
}

// Search Bar Logic for Number Search :
function searchBarCheckForNumber() {
  const { searchBarFirstBoxFormInput } =
    root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox
      .childElms.searchBarFirstBoxForm.childElms;

  if (advanceSearchActivation == "deactive") {
    if (pockedexJSONCopy[Number(searchBarFirstBoxFormInput.value) - 1]) {
      searchSubmitBtnArrayJSON.push(
        pockedexJSONCopy[Number(searchBarFirstBoxFormInput.value) - 1]
      );
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
        "";

      startValForShowMore = 16;
      endValForShowMore = 32;
      checkForSortBeforeDisplay();
    } else {
      root.footer.footer.style.display = "none";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.color =
        "white";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML = `No Element with the mumber "${searchBarFirstBoxFormInput.value}".`;
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.marginTop =
        "50px";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.justifyContent =
        "center";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.fontSize =
        "40px";
    }
  }
  if (advanceSearchActivation == "active") {
    if (finalResultObject[Number(searchBarFirstBoxFormInput.value) - 1]) {
      searchSubmitBtnArrayJSON.push(
        finalResultObject[Number(searchBarFirstBoxFormInput.value) - 1]
      );
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
        "";

      startValForShowMore = 16;
      endValForShowMore = 32;
      checkForSortBeforeDisplay();
    } else {
      root.footer.footer.style.display = "none";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.color =
        "white";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML = `No Element with the mumber "${searchBarFirstBoxFormInput.value}".`;
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.marginTop =
        "50px";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.justifyContent =
        "center";
      root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.fontSize =
        "40px";
    }
  }
}

// Display of Surprise Me Btn :
function surpriseBtnDisplayFunc() {
  const { surpriseAndSortThirdBox } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox;
  const { surpriseMainBox } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.surpriseMainBox;
  const { surpriseBtn } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.surpriseMainBox.childElms;

  surpriseMainBox.classList.add("surpriseMainBox");
  surpriseAndSortThirdBox.appendChild(surpriseMainBox);
  surpriseBtn.classList.add("surpriseBtn");
  surpriseBtn.innerText = "Surprise Me!";
  surpriseMainBox.appendChild(surpriseBtn);

  surpriseBtn.addEventListener("click", surpriseBtnLogicFunc);
}

// On Click of Surprise me Btn : - Logic Part of Surprise Me Btn
let surpriseMeArrayJSON = [];
function surpriseBtnLogicFunc() {
  onClickOfAdvanceSearchReset();

  pockedexJSONArray = [];
  surpriseMeArrayJSON = [];
  statusOfGame = "SurpriseMe";

  root.navBar.childElms.searchBarMainContainer.childElms.surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown.sortDropDown.value =
    "Random";

  let randOneArr = [];
  for (let i = 0; i < pockedexJSONCopy.length; i++) {
    let randOne = Math.floor(Math.random() * pockedexJSONCopy.length);
    randOneArr.push(randOne);
    if (!randOneArr.includes(pockedexJSONCopy[randOne].id)) {
      surpriseMeArrayJSON.push(pockedexJSONCopy[randOne]);
    } else {
      i -= 1;
    }
  }

  root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
    "";

  for (let i = 0; i < 16; i++) {
    pockedexJSONArray.push(surpriseMeArrayJSON[i]);
    displayPokemonBoxes(surpriseMeArrayJSON[i], pokemonBoxesContaienr);
  }
}

// Normal Sort :
let compareKeyArr = [];
let normalSortArrayJSON = [];
function sortDropDownDisplayFunc() {
  const { surpriseAndSortThirdBox } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox;
  const { sortMainBox } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox;
  sortMainBox.classList.add("sortMainBox");
  const { sortDropDownLabel } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms;
  sortDropDownLabel.classList.add("sortDropDownLabel");
  const { sortDropDown } =
    root.navBar.childElms.searchBarMainContainer.childElms
      .surpriseAndSortThirdBox.childElms.sortMainBox.childElms.sortDropDown;
  sortDropDown.classList.add("sortDropDown");

  surpriseAndSortThirdBox.appendChild(sortMainBox);
  sortDropDownLabel.innerText = "Sort By : ";
  sortMainBox.appendChild(sortDropDownLabel);
  sortMainBox.appendChild(sortDropDown);

  // Inside loop :
  const dropDownListArr = [
    "Lowest Number (First)",
    "Highest Number (First)",
    "A-Z",
    "Z-A",
  ];

  dropDownListArr.forEach((dropDownListArrItems) => {
    const sortDropDownOptions = document.createElement("option");
    sortDropDownOptions.value = dropDownListArrItems;
    sortDropDownOptions.innerText = dropDownListArrItems;
    sortDropDownOptions.classList.add("sortDropDownOptions");
    sortDropDown.appendChild(sortDropDownOptions);
  });

  sortDropDown.addEventListener("change", () => {
    pockedexJSONArray = [];
    normalSortArrayJSON = [];
    compareKeyArr = [];

    startValForShowMore = 16;
    endValForShowMore = 32;

    root.footer.childElms.showMoreAndLessContainer.childElms.showLessBtn.style.display =
      "none";

    statusOfGame = "NormalSort";
    switch (sortDropDown.value) {
      case dropDownListArr[0]:
        sortFromLowestNumberToHighest();
        break;

      case dropDownListArr[1]:
        sortFromHighestNumberToLowest();
        break;

      case dropDownListArr[2]:
        sortFromAToZ();
        break;

      case dropDownListArr[3]:
        sortFromZToA();
        break;

      default:
        break;
    }
  });
}

function sortFromLowestNumberToHighest() {
  if (searchStatus == "General") {
    compareKeyArr = pockedexJSONCopy.map((pokObj) => {
      return pokObj.id;
    });
    compareKeyArr.sort(function (a, b) {
      return a - b;
    });
  }

  if (searchStatus == "Searched") {
    compareKeyArr = searchSubmitBtnArrayJSON.map((pokObj) => {
      return pokObj.id;
    });
    compareKeyArr.sort(function (a, b) {
      return a - b;
    });
  }

  if (searchStatus == "AdvanceSearch") {
    compareKeyArr = finalResultObject.map((pokObj) => {
      return pokObj.id;
    });
    compareKeyArr.sort(function (a, b) {
      return a - b;
    });
  }

  normalSortSubFunction("number");
}

function sortFromHighestNumberToLowest() {
  if (searchStatus == "General") {
    compareKeyArr = pockedexJSONCopy.map((pokObj) => {
      return pokObj.id;
    });
    compareKeyArr.sort(function (a, b) {
      return b - a;
    });
  }

  if (searchStatus == "Searched") {
    compareKeyArr = searchSubmitBtnArrayJSON.map((pokObj) => {
      return pokObj.id;
    });
    compareKeyArr.sort(function (a, b) {
      return b - a;
    });
  }

  if (searchStatus == "AdvanceSearch") {
    compareKeyArr = finalResultObject.map((pokObj) => {
      return pokObj.id;
    });
    compareKeyArr.sort(function (a, b) {
      return b - a;
    });
  }

  normalSortSubFunction("number");
}

function sortFromAToZ() {
  if (searchStatus == "General") {
    compareKeyArr = pockedexJSONCopy.map((pokObj) => {
      return pokObj.name;
    });
    compareKeyArr.sort();
  }

  if (searchStatus == "Searched") {
    compareKeyArr = searchSubmitBtnArrayJSON.map((pokObj) => {
      return pokObj.name;
    });
    compareKeyArr.sort();
  }

  if (searchStatus == "AdvanceSearch") {
    compareKeyArr = finalResultObject.map((pokObj) => {
      return pokObj.name;
    });
    compareKeyArr.sort();
  }

  normalSortSubFunction("name");
}

function sortFromZToA() {
  if (searchStatus == "General") {
    compareKeyArr = pockedexJSONCopy.map((pokObj) => {
      return pokObj.name;
    });
    compareKeyArr.sort();
    compareKeyArr.reverse();
  }
  if (searchStatus == "Searched") {
    compareKeyArr = searchSubmitBtnArrayJSON.map((pokObj) => {
      return pokObj.name;
    });
    compareKeyArr.sort();
    compareKeyArr.reverse();
  }
  if (searchStatus == "AdvanceSearch") {
    compareKeyArr = finalResultObject.map((pokObj) => {
      return pokObj.name;
    });
    compareKeyArr.sort();
    compareKeyArr.reverse();
  }

  normalSortSubFunction("name");
}

function normalSortSubFunction(whatToSort) {
  if (whatToSort == "name") {
    normalSortArrayJSON = compareKeyArr.map((elm) => {
      for (let i = 0; i < pockedexJSONCopy.length; i++) {
        if (elm == pockedexJSONCopy[i].name) {
          return pockedexJSONCopy[i];
        }
      }
    });
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "";
    pockedexJSONArray = [];
    for (let i = 0; i < 16; i++) {
      pockedexJSONArray.push(normalSortArrayJSON[i]);
      displayPokemonBoxes(pockedexJSONArray[i], pokemonBoxesContaienr);
    }
  } else if (whatToSort == "number") {
    normalSortArrayJSON = compareKeyArr.map((elm) => {
      for (let i = 0; i < pockedexJSONCopy.length; i++) {
        if (elm == pockedexJSONCopy[i].id) {
          return pockedexJSONCopy[i];
        }
      }
    });
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "";
    pockedexJSONArray = [];
    for (let i = 0; i < 16; i++) {
      if (normalSortArrayJSON[i]) {
        pockedexJSONArray.push(normalSortArrayJSON[i]);
        displayPokemonBoxes(pockedexJSONArray[i], pokemonBoxesContaienr);
      }
    }
  }
  const { showMoreBtn } =
    root.footer.childElms.showMoreAndLessContainer.childElms;

  if (
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr
      .childElementCount < 16
  ) {
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.style.display = "block";
  }
}

// Final Object :
let finalObject = {
  type: null,
  weakness: null,
  ability: null,
  height: null,
  weight: null,
};

// Advance Search :
function advanceSearchDisplay() {
  const { advanceSearchMainContainer } =
    root.navBar.childElms.advanceSearchMainContainer;
  advanceSearchMainContainer.classList.add("advanceSearchMainContainer");
  root.navBar.navBar.appendChild(advanceSearchMainContainer);

  // aSMC : advanceSearchMainContainer
  const { advanceSearchContentBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox;
  advanceSearchContentBox.classList.add("advanceSearchContentBox");
  advanceSearchMainContainer.appendChild(advanceSearchContentBox);

  const { advanceSearchInfo } =
    root.navBar.childElms.advanceSearchMainContainer.childElms;
  advanceSearchInfo.classList.add("advanceSearchInfo");
  advanceSearchInfo.innerText = "Show Advance Search";

  advanceSearchInfo.addEventListener("click", () => {
    advanceSearchContentBox.style.display == "block"
      ? (advanceSearchContentBox.style.display = "none")
      : (advanceSearchContentBox.style.display = "block");

    advanceSearchInfo.innerText == "Show Advance Search"
      ? (advanceSearchInfo.innerText = "Close Advance Search")
      : (advanceSearchInfo.innerText = "Show Advance Search");
  });
  advanceSearchMainContainer.appendChild(advanceSearchInfo);

  // aSCB : advanceSearchContentBox
  const { advanceSearchContentBoxTop } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop;
  advanceSearchContentBoxTop.classList.add("advanceSearchContentBoxTop");
  advanceSearchContentBox.appendChild(advanceSearchContentBoxTop);

  const { advanceSearchContentBoxBottom } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxBottom;
  advanceSearchContentBoxBottom.classList.add("advanceSearchContentBoxBottom");
  advanceSearchContentBox.appendChild(advanceSearchContentBoxBottom);

  // ----------------- Top Started ----------------
  // advanceSearchContentBoxTop
  const { advanceSearchTopLeftBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopLeftBox;
  advanceSearchTopLeftBox.classList.add("advanceSearchTopLeftBox");
  advanceSearchContentBoxTop.appendChild(advanceSearchTopLeftBox);
  const { advanceSearchTopRightBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox;
  advanceSearchTopRightBox.classList.add("advanceSearchTopRightBox");
  advanceSearchContentBoxTop.appendChild(advanceSearchTopRightBox);

  // ----------------- Top Left Started ----------------
  // advanceSearchTopLeftBox
  const { advanceSearchTandWBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopLeftBox.childElms.advanceSearchTandWBox;
  advanceSearchTandWBox.classList.add("advanceSearchTandWBox");
  advanceSearchTopLeftBox.appendChild(advanceSearchTandWBox);

  // advanceSearchTandWBox
  const { advanceSearchTandWHeading } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopLeftBox.childElms.advanceSearchTandWBox.childElms;
  advanceSearchTandWHeading.classList.add("advanceSearchTandWHeading");
  advanceSearchTandWHeading.innerText = "Type & Weakness";
  advanceSearchTandWBox.appendChild(advanceSearchTandWHeading);
  const { advanceSearchTandWContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopLeftBox.childElms.advanceSearchTandWBox.childElms
      .advanceSearchTandWContent;
  advanceSearchTandWContent.classList.add("advanceSearchTandWContent");
  advanceSearchTandWBox.appendChild(advanceSearchTandWContent);

  // advanceSearchTandWContent : Inside for loop create 3 btns
  let newTypeArr = [];
  pockedexJSONCopy.forEach((pokObj) => {
    pokObj.type.forEach((pokObjType) => {
      if (!newTypeArr.includes(pokObjType)) {
        newTypeArr.push(pokObjType);

        const advanceSearchTandWContentMainBox = document.createElement("div");
        advanceSearchTandWContentMainBox.classList.add(
          "advanceSearchTandWContentMainBox"
        );
        advanceSearchTandWContent.appendChild(advanceSearchTandWContentMainBox);
        const advanceSearchTandWContentBoxBtn1 =
          document.createElement("button");
        advanceSearchTandWContentBoxBtn1.innerText = pokObjType;
        advanceSearchTandWContentBoxBtn1.classList.add(pokObjType);
        if (pokedexPokemonTypeColor[pokObjType].backGroundClr.length == 1) {
          advanceSearchTandWContentBoxBtn1.style.background =
            pokedexPokemonTypeColor[pokObjType].backGroundClr[0];
        } else {
          advanceSearchTandWContentBoxBtn1.style.background = `linear-gradient(${pokedexPokemonTypeColor[pokObjType].backGroundClr[0]} 50%, ${pokedexPokemonTypeColor[pokObjType].backGroundClr[1]} 50%)`;
        }

        advanceSearchTandWContentBoxBtn1.classList.add(
          "advanceSearchTandWContentBoxBtn1"
        );
        advanceSearchTandWContentMainBox.appendChild(
          advanceSearchTandWContentBoxBtn1
        );
        const advanceSearchTandWContentBoxBtn2 =
          document.createElement("button");
        advanceSearchTandWContentBoxBtn2.innerText = "T";
        advanceSearchTandWContentBoxBtn2.classList.add(
          "advanceSearchTandWContentBoxBtn2"
        );
        advanceSearchTandWContentBoxBtn2.setAttribute("name", pokObjType);
        advanceSearchTandWContentBoxBtn2.addEventListener("click", (e) => {
          onClickOfAdvanceSearchType(e);
        });
        advanceSearchTandWContentMainBox.appendChild(
          advanceSearchTandWContentBoxBtn2
        );
        const advanceSearchTandWContentBoxBtn3 =
          document.createElement("button");
        advanceSearchTandWContentBoxBtn3.innerText = "W";
        advanceSearchTandWContentBoxBtn3.classList.add(
          "advanceSearchTandWContentBoxBtn3"
        );
        advanceSearchTandWContentBoxBtn3.setAttribute("name", pokObjType);
        advanceSearchTandWContentBoxBtn3.addEventListener("click", (e) => {
          onClickOfAdvanceSearchWeaknees(e);
        });
        advanceSearchTandWContentMainBox.appendChild(
          advanceSearchTandWContentBoxBtn3
        );
      }
    });
  });

  // ----------------- Top Left Ended ----------------

  // ----------------- Top Right Started ----------------
  // advanceSearchTopRightBox
  const { advanceSearchAbilityBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchAbilityBox;
  advanceSearchAbilityBox.classList.add("advanceSearchAbilityBox");
  advanceSearchTopRightBox.appendChild(advanceSearchAbilityBox);
  const { advanceSearchHeightBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchHeightBox;
  advanceSearchHeightBox.classList.add("advanceSearchHeightBox");
  advanceSearchTopRightBox.appendChild(advanceSearchHeightBox);
  const { advanceSearchWeightBox } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchWeightBox;
  advanceSearchWeightBox.classList.add("advanceSearchWeightBox");
  advanceSearchTopRightBox.appendChild(advanceSearchWeightBox);

  // advanceSearchAbilityBox
  const { advanceSearchAbilityHeading } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchAbilityBox.childElms;
  advanceSearchAbilityHeading.classList.add("advanceSearchAbilityHeading");
  advanceSearchAbilityHeading.innerText = "Ability";
  advanceSearchAbilityBox.appendChild(advanceSearchAbilityHeading);
  const { advanceSearchAbilityContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchAbilityBox.childElms
      .advanceSearchAbilityContent;
  advanceSearchAbilityContent.classList.add("advanceSearchAbilityContent");
  advanceSearchAbilityContent.addEventListener("change", (e) => {
    onChangeOfAdvanceSearchAbility(e);
  });
  advanceSearchAbilityBox.appendChild(advanceSearchAbilityContent);

  // advanceSearchAbilityContent : Inside for loop create a list of options for the above select tag.
  let newAbilitiesArr = [];
  pockedexJSONCopy.forEach((pokObj) => {
    pokObj.abilities.forEach((pokAbility) => {
      if (!newAbilitiesArr.includes(pokAbility)) {
        newAbilitiesArr.push(pokAbility);
      }
    });
  });
  newAbilitiesArr.sort().unshift("All");

  newAbilitiesArr.forEach((ability) => {
    const advanceSearchAbilityContentOptions = document.createElement("option");
    advanceSearchAbilityContentOptions.classList.add(
      "advanceSearchAbilityContentOptions"
    );
    advanceSearchAbilityContentOptions.value = ability;
    advanceSearchAbilityContentOptions.innerText = ability;
    advanceSearchAbilityContent.appendChild(advanceSearchAbilityContentOptions);
  });

  // advanceSearchHeightBox
  const { advanceSearchHeightHeading } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchHeightBox.childElms;
  advanceSearchHeightHeading.classList.add("advanceSearchHeightHeading");
  advanceSearchHeightHeading.innerText = "Height";
  advanceSearchHeightBox.appendChild(advanceSearchHeightHeading);
  const { advanceSearchHeightContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchHeightBox.childElms
      .advanceSearchHeightContent;
  advanceSearchHeightContent.classList.add("advanceSearchHeightContent");
  advanceSearchHeightBox.appendChild(advanceSearchHeightContent);

  // advanceSearchHeightContent : Inside for loop create 3 divs.
  let animalsArrForHeight = ["mouse.png", "dog.png", "giraffe.png"];
  for (let i = 0; i < animalsArrForHeight.length; i++) {
    const advanceSearchHeightContentImg = document.createElement("img");
    advanceSearchHeightContentImg.classList.add(
      "advanceSearchHeightContentImg"
    );
    advanceSearchHeightContentImg.alt = animalsArrForHeight[i];
    advanceSearchHeightContentImg.src = `icons/${animalsArrForHeight[i]}`;
    advanceSearchHeightContentImg.addEventListener("click", (e) => {
      onClickOfAdvanceSearchHeight(e);
    });
    advanceSearchHeightContent.appendChild(advanceSearchHeightContentImg);
  }

  // advanceSearchWeightBox
  const { advanceSearchWeightHeading } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchWeightBox.childElms;
  advanceSearchWeightHeading.classList.add("advanceSearchWeightHeading");
  advanceSearchWeightHeading.innerText = "Weight";
  advanceSearchWeightBox.appendChild(advanceSearchWeightHeading);
  const { advanceSearchWeightContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchWeightBox.childElms
      .advanceSearchWeightContent;
  advanceSearchWeightContent.classList.add("advanceSearchWeightContent");
  advanceSearchWeightBox.appendChild(advanceSearchWeightContent);

  // advanceSearchWeightContent : Inside for loop create 3 divs.
  let animalsArrForWeight = ["rabbit.png", "gorilla.png", "elephant.png"];
  for (let i = 0; i < animalsArrForWeight.length; i++) {
    const advanceSearchWeightContentImg = document.createElement("img");
    advanceSearchWeightContentImg.classList.add(
      "advanceSearchWeightContentImg"
    );
    advanceSearchWeightContentImg.alt = animalsArrForWeight[i];
    advanceSearchWeightContentImg.src = `icons/${animalsArrForWeight[i]}`;
    advanceSearchWeightContentImg.addEventListener("click", (e) => {
      onClickOfAdvanceSearchWeight(e);
    });
    advanceSearchWeightContent.appendChild(advanceSearchWeightContentImg);
  }

  // ----------------- Top Right Ended ----------------
  // ----------------- Top Ended ----------------

  // ----------------- Bottom Started ----------------
  // ----------------- Bottom NumberRange Started ----------------
  // advanceSearchContentBoxBottom
  const { advanceSearchBottomNumberRange } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxBottom.childElms
      .advanceSearchBottomNumberRange;
  advanceSearchBottomNumberRange.classList.add(
    "advanceSearchBottomNumberRange"
  );
  advanceSearchContentBoxBottom.appendChild(advanceSearchBottomNumberRange);
  const { advanceSearchBottomResetAndSearch } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxBottom.childElms
      .advanceSearchBottomResetAndSearch;
  advanceSearchBottomResetAndSearch.classList.add(
    "advanceSearchBottomResetAndSearch"
  );
  advanceSearchContentBoxBottom.appendChild(advanceSearchBottomResetAndSearch);

  // ----------------- Bottom NumberRange Started ----------------

  // ----------------- Bottom ResetAndSearch Started ----------------
  // advanceSearchBottomResetAndSearch
  const { advanceSearchResetBtn } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxBottom.childElms
      .advanceSearchBottomResetAndSearch.childElms;
  advanceSearchResetBtn.classList.add("advanceSearchResetBtn");
  advanceSearchResetBtn.innerText = "Reset";
  advanceSearchResetBtn.addEventListener("click", onClickOfAdvanceSearchReset);
  advanceSearchBottomResetAndSearch.appendChild(advanceSearchResetBtn);
}

// Event Listeners for Advance Search :
// Type :
let advanceSearchTypeArr = [];
let advanceSearchTypeObjSubArr = [];
let advanceSearchTypeObjArr = [];

function onClickOfAdvanceSearchType(e) {
  statusOfGame = "AdvanceSeachType";
  advanceSearchTypeArr = [];
  advanceSearchTypeObjSubArr = [];
  advanceSearchTypeObjArr = [];

  e.target.style.backgroundColor == "red"
    ? (e.target.style.backgroundColor = "white")
    : (e.target.style.backgroundColor = "red");

  const { advanceSearchTandWContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopLeftBox.childElms.advanceSearchTandWBox.childElms
      .advanceSearchTandWContent;

  advanceSearchTandWContent.childNodes.forEach((mainBox) => {
    mainBox.childNodes.forEach((btns) => {
      if (btns.innerText == "T") {
        if (btns.style.backgroundColor == "red") {
          advanceSearchTypeArr.push(btns.name);
        } else {
        }
      }
    });
  });

  pockedexJSONCopy.forEach((jsonCopyPokObj) => {
    jsonCopyPokObj.type.forEach((jsonCopyPokObjType) => {
      if (advanceSearchTypeArr.includes(jsonCopyPokObjType)) {
        advanceSearchTypeObjSubArr.push(jsonCopyPokObj);
      }
    });

    if (advanceSearchTypeArr.length > 0) {
      if (advanceSearchTypeObjSubArr.length == advanceSearchTypeArr.length) {
        advanceSearchTypeObjArr.push(advanceSearchTypeObjSubArr[0]);
      }
    }
    advanceSearchTypeObjSubArr = [];
  });

  finalObject.type = advanceSearchTypeObjArr;

  // ==============================================
  addItemToFinalSelectedItemsInAdvanceSearch(
    advanceSearchTypeArr.length,
    "type"
  );
  // ==============================================
}

// Weaknees :
let advanceSearchWeaknessArr = [];
let advanceSearchWeaknessObjSubArr = [];
let advanceSearchWeaknessObjArr = [];

function onClickOfAdvanceSearchWeaknees(e) {
  statusOfGame == "AdvanceSeachWeakness";
  advanceSearchWeaknessArr = [];
  advanceSearchWeaknessObjSubArr = [];
  advanceSearchWeaknessObjArr = [];

  e.target.style.backgroundColor == "red"
    ? (e.target.style.backgroundColor = "white")
    : (e.target.style.backgroundColor = "red");

  const { advanceSearchTandWContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopLeftBox.childElms.advanceSearchTandWBox.childElms
      .advanceSearchTandWContent;

  advanceSearchTandWContent.childNodes.forEach((mainBox) => {
    mainBox.childNodes.forEach((btns) => {
      if (btns.innerText == "W") {
        if (btns.style.backgroundColor == "red") {
          advanceSearchWeaknessArr.push(btns.name);
        } else {
        }
      }
    });
  });

  pockedexJSONCopy.forEach((jsonCopyPokObj) => {
    jsonCopyPokObj.weakness.forEach((jsonCopyPokObjWeakness) => {
      if (
        advanceSearchWeaknessArr.includes(jsonCopyPokObjWeakness.toLowerCase())
      ) {
        advanceSearchWeaknessObjSubArr.push(jsonCopyPokObj);
      }
    });

    if (advanceSearchWeaknessArr.length > 0) {
      if (
        advanceSearchWeaknessObjSubArr.length == advanceSearchWeaknessArr.length
      ) {
        advanceSearchWeaknessObjArr.push(advanceSearchWeaknessObjSubArr[0]);
      }
    }

    advanceSearchWeaknessObjSubArr = [];
  });

  finalObject.weakness = advanceSearchWeaknessObjArr;
  // ==============================================
  addItemToFinalSelectedItemsInAdvanceSearch(
    advanceSearchWeaknessArr.length,
    "weakness"
  );
  // ==============================================
}
// Reset :
function onClickOfAdvanceSearchReset() {
  document
    .querySelector(".advanceSearchTandWContent")
    .childNodes.forEach((elm) => {
      elm.childNodes.forEach((elmTwo) => {
        if (elmTwo.style.backgroundColor == "red") {
          elmTwo.style.backgroundColor = "white";
        }
      });
    });

  document.querySelector(".advanceSearchAbilityContent").value = "All";

  document
    .querySelector(".advanceSearchHeightContent")
    .childNodes.forEach((elmOne) => {
      if (elmOne.style.backgroundColor == "red") {
        elmOne.style.background = "transparent";
      }
    });

  document
    .querySelector(".advanceSearchWeightContent")
    .childNodes.forEach((elmOne) => {
      if (elmOne.style.backgroundColor == "red") {
        elmOne.style.background = "transparent";
      }
    });

  finalObject.type = null;
  finalObject.weakness = null;
  finalObject.ability = null;
  finalObject.height = null;
  finalObject.weight = null;

  startValForShowMore = 16;
  endValForShowMore = 32;

  statusOfGame = "General";
  searchStatus = "General";
  advanceSearchActivation = "deactive";

  finalResultObject = [];
  finalSubResultObject = [];
  finalSelectedItemsInAdvanceSearch = [];

  root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
    "";

  checkForSortBeforeDisplay();
}
function onClickOfAdvanceSearchSearch() {}

// Ability :
let advanceSearchAbilityObjArr = [];
function onChangeOfAdvanceSearchAbility(e) {
  statusOfGame == "AdvanceSeachAbility";
  advanceSearchAbilityObjArr = [];
  pockedexJSONCopy.forEach((jsonCopyPokObj) => {
    if (jsonCopyPokObj.abilities.includes(e.target.value)) {
      advanceSearchAbilityObjArr.push(jsonCopyPokObj);
    }
  });

  finalObject.ability = advanceSearchAbilityObjArr;
  // ==============================================
  if (e.target.value == "All") {
    addItemToFinalSelectedItemsInAdvanceSearch(0, "ability");
  } else {
    addItemToFinalSelectedItemsInAdvanceSearch(1, "ability");
  }
  // ==============================================
}

// Height :
let advanceSearchHeightArr = [];
let advanceSearchHeightObjArr = [];
function onClickOfAdvanceSearchHeight(e) {
  statusOfGame == "AdvanceSeachHeight";
  advanceSearchHeightObjArr = [];
  advanceSearchHeightArr = [];

  e.target.style.backgroundColor == "red"
    ? (e.target.style.backgroundColor = "transparent")
    : (e.target.style.backgroundColor = "red");

  let animalsArrForHeight = ["mouse.png", "dog.png", "giraffe.png"];
  const { advanceSearchHeightContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchHeightBox.childElms
      .advanceSearchHeightContent;

  advanceSearchHeightContent.childNodes.forEach((mainBox) => {
    if (mainBox.style.backgroundColor == "red") {
      if (mainBox.alt == animalsArrForHeight[0]) {
        advanceSearchHeightArr.push(animalsArrForHeight[0]);
        mouseHeight();
      } else if (mainBox.alt == animalsArrForHeight[1]) {
        advanceSearchHeightArr.push(animalsArrForHeight[1]);
        dogHeight();
      } else if (mainBox.alt == animalsArrForHeight[2]) {
        advanceSearchHeightArr.push(animalsArrForHeight[2]);
        giraffeHeight();
      }
    }
  });

  function mouseHeight() {
    pockedexJSONCopy.forEach((jsonCopyPokObj) => {
      if (jsonCopyPokObj.height < 50) {
        advanceSearchHeightObjArr.push(jsonCopyPokObj);
      }
    });
  }
  function dogHeight() {
    pockedexJSONCopy.forEach((jsonCopyPokObj) => {
      if (jsonCopyPokObj.height > 50 && jsonCopyPokObj.height < 500) {
        advanceSearchHeightObjArr.push(jsonCopyPokObj);
      }
    });
  }
  function giraffeHeight() {
    pockedexJSONCopy.forEach((jsonCopyPokObj) => {
      if (jsonCopyPokObj.height > 500) {
        advanceSearchHeightObjArr.push(jsonCopyPokObj);
      }
    });
  }

  finalObject.height = advanceSearchHeightObjArr;
  // ==============================================
  addItemToFinalSelectedItemsInAdvanceSearch(
    advanceSearchHeightArr.length,
    "height"
  );
  // ==============================================
}
// Weight :
let advanceSearchWeightArr = [];
let advanceSearchWeightObjArr = [];
function onClickOfAdvanceSearchWeight(e) {
  statusOfGame == "AdvanceSeachWeight";
  advanceSearchWeightObjArr = [];
  advanceSearchWeightArr = [];

  e.target.style.backgroundColor == "red"
    ? (e.target.style.backgroundColor = "transparent")
    : (e.target.style.backgroundColor = "red");

  let animalsArrForWeight = ["rabbit.png", "gorilla.png", "elephant.png"];

  const { advanceSearchWeightContent } =
    root.navBar.childElms.advanceSearchMainContainer.childElms
      .advanceSearchContentBox.childElms.advanceSearchContentBoxTop.childElms
      .advanceSearchTopRightBox.childElms.advanceSearchWeightBox.childElms
      .advanceSearchWeightContent;

  advanceSearchWeightContent.childNodes.forEach((mainBox) => {
    if (mainBox.style.backgroundColor == "red") {
      if (mainBox.alt == animalsArrForWeight[0]) {
        advanceSearchWeightArr.push(animalsArrForWeight[0]);
        mouseHeight();
      } else if (mainBox.alt == animalsArrForWeight[1]) {
        advanceSearchWeightArr.push(animalsArrForWeight[1]);
        dogHeight();
      } else if (mainBox.alt == animalsArrForWeight[2]) {
        advanceSearchWeightArr.push(animalsArrForWeight[2]);
        giraffeHeight();
      }
    }
  });

  function mouseHeight() {
    pockedexJSONCopy.forEach((jsonCopyPokObj) => {
      if (jsonCopyPokObj.weight < 50) {
        advanceSearchWeightObjArr.push(jsonCopyPokObj);
      }
    });
  }
  function dogHeight() {
    pockedexJSONCopy.forEach((jsonCopyPokObj) => {
      if (jsonCopyPokObj.weight > 50 && jsonCopyPokObj.weight < 100) {
        advanceSearchWeightObjArr.push(jsonCopyPokObj);
      }
    });
  }
  function giraffeHeight() {
    pockedexJSONCopy.forEach((jsonCopyPokObj) => {
      if (jsonCopyPokObj.weight > 100) {
        advanceSearchWeightObjArr.push(jsonCopyPokObj);
      }
    });
  }

  finalObject.weight = advanceSearchWeightObjArr;
  // ==============================================
  addItemToFinalSelectedItemsInAdvanceSearch(
    advanceSearchWeightArr.length,
    "weight"
  );
  // ==============================================
}

let finalSelectedItemsInAdvanceSearch = [];
// Function to add items to an array of filters added in advance search :
function addItemToFinalSelectedItemsInAdvanceSearch(
  receivedArrLenFromFuncCall,
  funcCallerName
) {
  if (receivedArrLenFromFuncCall > 0) {
    if (!finalSelectedItemsInAdvanceSearch.includes(funcCallerName)) {
      finalSelectedItemsInAdvanceSearch.push(funcCallerName);
    }
  } else {
    if (finalSelectedItemsInAdvanceSearch.includes(funcCallerName)) {
      finalSelectedItemsInAdvanceSearch.splice(
        finalSelectedItemsInAdvanceSearch.indexOf(funcCallerName),
        1
      );
    }
  }
  finalFuncForAdvanceSearch();
}

let finalResultObject = [];
let finalSubResultObject = [];
function finalFuncForAdvanceSearch() {
  statusOfGame = "FinalAdvaceSearch";
  advanceSearchActivation = "active";
  finalResultObject = [];
  finalSubResultObject = [];
  root.navBar.childElms.searchBarMainContainer.childElms.searchBarFirstBox.childElms.searchBarFirstBoxForm.childElms.searchBarFirstBoxFormInput.value =
    "";

  let bluePrintOfFilters = ["type", "weakness", "ability", "height", "weight"];
  bluePrintOfFilters.forEach((bpItems) => {
    if (finalObject[bpItems]) {
      finalObject[bpItems].forEach((itemsOfFinalObject) => {
        finalSubResultObject.push(itemsOfFinalObject);
      });
    }
  });

  function findElementsRepeated(arr) {
    const frequency = {};
    const repeatedTwice = [];
    arr.forEach((item) => {
      if (!frequency[item.id]) {
        frequency[item.id] = 1;
      } else {
        frequency[item.id]++;

        if (frequency[item.id] === finalSelectedItemsInAdvanceSearch.length) {
          repeatedTwice.push(item);
        }
      }
    });
    return repeatedTwice;
  }

  const repeatedTwiceArray = findElementsRepeated(finalSubResultObject);

  if (finalSelectedItemsInAdvanceSearch.length == 1) {
    finalResultObject = finalSubResultObject;
  }
  if (finalSelectedItemsInAdvanceSearch.length > 1) {
    finalResultObject = repeatedTwiceArray;
  }
  if (finalSelectedItemsInAdvanceSearch.length == 0) {
    finalResultObject = pockedexJSONCopy;
    advanceSearchActivation = "deactive";
    statusOfGame = "General";
    searchStatus = "Genaral";
  }

  root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
    "";
  pockedexJSONArray = [];
  if (finalResultObject.length > 0) {
    searchStatus = "AdvanceSearch";
    startValForShowMore = 16;
    endValForShowMore = 32;
    checkForSortBeforeDisplay();
  } else {
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.innerHTML =
      "No Elements Found";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.color =
      "white";
    root.body.childElms.pokemonBoxesContaienr.pokemonBoxesContaienr.style.fontSize =
      "40px";
  }
}

// Double Click Handler On Pok Object :
function doubleClickHandlerOnPok(e) {
  root.navBar.navBar.style.display = "none";
  root.body.body.style.display = "none";
  root.footer.footer.style.display = "none";

  const presentPok = pockedexJSONCopy.filter(
    (obj) => obj.id == e.currentTarget.id
  );

  const infoPokMainMainContainer = document.createElement("div");
  infoPokMainMainContainer.classList.add("infoPokMainMainContainer");
  mainContainer.appendChild(infoPokMainMainContainer);

  const infoPokMainContainer = document.createElement("div");
  infoPokMainContainer.classList.add("infoPokMainContainer");
  infoPokMainMainContainer.appendChild(infoPokMainContainer);

  // Main Box of Info Conatiner :
  const infoPokNavbar = document.createElement("div");
  infoPokNavbar.classList.add("infoPokNavbar");
  infoPokMainContainer.appendChild(infoPokNavbar);
  const infoPokBody = document.createElement("div");
  infoPokBody.classList.add("infoPokBody");
  infoPokMainContainer.appendChild(infoPokBody);
  const infoPokFooter = document.createElement("div");
  infoPokFooter.classList.add("infoPokFooter");
  infoPokMainContainer.appendChild(infoPokFooter);

  // Navbar of Info Pok :
  const infoPokNavbarHeading = document.createElement("h1");
  infoPokNavbarHeading.classList.add("infoPokNavbarHeading");
  infoPokNavbarHeading.innerText = "Info";
  infoPokNavbar.appendChild(infoPokNavbarHeading);
  const infoPokNavbarClose = document.createElement("h1");
  infoPokNavbarClose.classList.add("infoPokNavbarClose");
  infoPokNavbarClose.innerText = "X";
  infoPokNavbarClose.addEventListener("click", () => {
    root.navBar.navBar.style.display = "block";
    root.body.body.style.display = "flex";
    root.footer.footer.style.display = "block";
    infoPokMainMainContainer.style.display = "none";
  });
  infoPokNavbar.appendChild(infoPokNavbarClose);

  // Body of Info Pok :
  const infoPokBodyLeft = document.createElement("div");
  infoPokBodyLeft.classList.add("infoPokBodyLeft");
  infoPokBody.appendChild(infoPokBodyLeft);
  const infoPokBodyRight = document.createElement("div");
  infoPokBodyRight.classList.add("infoPokBodyRight");
  infoPokBody.appendChild(infoPokBodyRight);

  // Left Body of Info Pok :
  const infoPokBodyLeftImg = document.createElement("img");
  infoPokBodyLeftImg.classList.add("infoPokBodyLeftImg");
  infoPokBodyLeftImg.src = presentPok[0].ThumbnailImage;
  infoPokBodyLeft.appendChild(infoPokBodyLeftImg);

  // Right Body of Info Pok :
  const infoPokBodyRightBox = document.createElement("div");
  infoPokBodyRightBox.classList.add("infoPokBodyRightBox");
  infoPokBodyRight.appendChild(infoPokBodyRightBox);

  const infoPokBodyRightBoxNumber = document.createElement("h3");
  infoPokBodyRightBoxNumber.classList.add("infoPokBodyRightBoxNumber");
  infoPokBodyRightBoxNumber.innerText = `Number : ${presentPok[0].number}`;
  infoPokBodyRightBox.appendChild(infoPokBodyRightBoxNumber);
  const infoPokBodyRightBoxName = document.createElement("h3");
  infoPokBodyRightBoxName.classList.add("infoPokBodyRightBoxName");
  infoPokBodyRightBoxName.innerText = `Name : ${presentPok[0].name}`;
  infoPokBodyRightBox.appendChild(infoPokBodyRightBoxName);
  const infoPokBodyRightBoxHeight = document.createElement("h3");
  infoPokBodyRightBoxHeight.classList.add("infoPokBodyRightBoxHeight");
  infoPokBodyRightBoxHeight.innerText = `Height : ${presentPok[0].height}`;
  infoPokBodyRightBox.appendChild(infoPokBodyRightBoxHeight);
  const infoPokBodyRightBoxWeight = document.createElement("h3");
  infoPokBodyRightBoxWeight.classList.add("infoPokBodyRightBoxWeight");
  infoPokBodyRightBoxWeight.innerText = `Weight : ${presentPok[0].weight}`;
  infoPokBodyRightBox.appendChild(infoPokBodyRightBoxWeight);

  // Footer of Info Park :
  const infoPokFooterAbilityDiv = document.createElement("div");
  infoPokFooterAbilityDiv.classList.add("infoPokFooterAbilityDiv");
  infoPokFooter.appendChild(infoPokFooterAbilityDiv);
  const infoPokFooterTypesDiv = document.createElement("div");
  infoPokFooterTypesDiv.classList.add("infoPokFooterTypesDiv");
  infoPokFooter.appendChild(infoPokFooterTypesDiv);
  const infoPokFooterWeaknessDiv = document.createElement("div");
  infoPokFooterWeaknessDiv.classList.add("infoPokFooterWeaknessDiv");
  infoPokFooter.appendChild(infoPokFooterWeaknessDiv);

  // infoPokFooterAbilityDiv
  const infoPokFooterAbilityDivHeading = document.createElement("h3");
  infoPokFooterAbilityDivHeading.classList.add(
    "infoPokFooterAbilityDivHeading"
  );
  infoPokFooterAbilityDivHeading.innerText = "Ability : ";
  infoPokFooterAbilityDiv.appendChild(infoPokFooterAbilityDivHeading);
  const infoPokFooterAbilityDivContent = document.createElement("h5");
  infoPokFooterAbilityDivContent.classList.add(
    "infoPokFooterAbilityDivContent"
  );
  infoPokFooterAbilityDiv.appendChild(infoPokFooterAbilityDivContent);
  presentPok[0].abilities.forEach((ability) => {
    const pTagAbility = document.createElement("p");
    pTagAbility.classList.add("pTagAbility");
    pTagAbility.innerText = ability;
    infoPokFooterAbilityDivContent.appendChild(pTagAbility);
  });

  // infoPokFooterTypesDiv
  const infoPokFooterTypesDivHeading = document.createElement("h3");
  infoPokFooterTypesDivHeading.classList.add("infoPokFooterTypesDivHeading");
  infoPokFooterTypesDivHeading.innerText = "Types : ";
  infoPokFooterTypesDiv.appendChild(infoPokFooterTypesDivHeading);
  const infoPokFooterTypesDivContent = document.createElement("h5");
  infoPokFooterTypesDivContent.classList.add("infoPokFooterTypesDivContent");
  infoPokFooterTypesDiv.appendChild(infoPokFooterTypesDivContent);
  presentPok[0].type.forEach((type) => {
    const pTagType = document.createElement("p");
    pTagType.classList.add("pTagType");
    pTagType.innerText = type;
    infoPokFooterTypesDivContent.appendChild(pTagType);
  });

  // infoPokFooterWeaknessDiv
  const infoPokFooterWeaknessDivHeading = document.createElement("h3");
  infoPokFooterWeaknessDivHeading.classList.add(
    "infoPokFooterWeaknessDivHeading"
  );
  infoPokFooterWeaknessDivHeading.innerText = "Weakness : ";
  infoPokFooterWeaknessDiv.appendChild(infoPokFooterWeaknessDivHeading);
  const infoPokFooterWeaknessDivContent = document.createElement("h5");
  infoPokFooterWeaknessDivContent.classList.add(
    "infoPokFooterWeaknessDivContent"
  );
  infoPokFooterWeaknessDiv.appendChild(infoPokFooterWeaknessDivContent);

  presentPok[0].weakness.forEach((weakness) => {
    const pTagWeakness = document.createElement("p");
    pTagWeakness.classList.add("pTagWeakness");
    pTagWeakness.innerText = weakness;
    infoPokFooterWeaknessDivContent.appendChild(pTagWeakness);
  });
}

// Single Click Handler On Pok Object :
function singleClickHandlerOnPok(e) {}

// Click on Heart :
function onClickOfHeart(e) {
  if (e.target.style.color == "red") {
    e.target.style.color = "white";
    document.querySelector(`.${e.target.classList[1]}`).style.color = "white";
    likedPoksArr.splice(likedPoksArr.indexOf(e.target.id), 1);
  } else {
    e.target.style.color = "red";
    if (!likedPoksArr.includes(e.target.id)) {
      likedPoksArr.push(e.target.id);
    }
  }

  let dataToSendToLikedpoks = {
    presentUserEmail: presentUserEmail,
    presentUserName: presentUserName,
    likedPoksArr: likedPoksArr,
  };

  const resp = fetch("/likedPoks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataToSendToLikedpoks),
  });

  function findParentUpToGeneration(element, generations) {
    let parent = element.parentNode;
    let count = 1;

    while (parent !== null && count < generations) {
      parent = parent.parentNode;
      count++;
    }
    return parent;
  }

  // const yourElement = document.querySelector(`.${e.target.classList[1]}`);
  const yourElement = e.target;
  const parentUpToFourGenerations = findParentUpToGeneration(yourElement, 5);

  if (parentUpToFourGenerations.classList[0] != "body") {
    likedPokPageDisplay();
  }

  // likedPokPageDisplay("Don't");
}

// Who's That Pokemon :
function whosThatPokemon() {
  document.querySelector(".pokGmaesDisplayMainMainContainer").style.display =
    "none";

  let randNum = Math.floor(Math.random() * pockedexJSONCopy.length);

  const presentPok = pockedexJSONCopy.filter((obj) => obj.id == randNum);

  if (document.getElementById("whosThatPokMianMainContainerID")) {
    const abc = document.getElementById("whosThatPokMianMainContainerID");
    abc.remove();
  }

  const whosThatPokMianMainContainer = document.createElement("div");
  whosThatPokMianMainContainer.classList.add("whosThatPokMianMainContainer");
  whosThatPokMianMainContainer.setAttribute(
    "id",
    "whosThatPokMianMainContainerID"
  );
  mainContainer.appendChild(whosThatPokMianMainContainer);

  const whosThatPokMianContainer = document.createElement("div");
  whosThatPokMianContainer.classList.add("whosThatPokMianContainer");
  whosThatPokMianMainContainer.appendChild(whosThatPokMianContainer);

  // Navbar :
  const whosThatPokMianContainerNavBar = document.createElement("div");
  whosThatPokMianContainerNavBar.classList.add(
    "whosThatPokMianContainerNavBar"
  );
  whosThatPokMianContainer.appendChild(whosThatPokMianContainerNavBar);
  const whosThatPokMianContainerNavBarHeading = document.createElement("h1");
  whosThatPokMianContainerNavBarHeading.classList.add(
    "whosThatPokMianContainerNavBarHeading"
  );
  whosThatPokMianContainerNavBarHeading.innerText = "Who's That Pokemon .... ?";
  whosThatPokMianContainerNavBar.appendChild(
    whosThatPokMianContainerNavBarHeading
  );
  const whosThatPokMianContainerNavBarClose = document.createElement("h1");
  whosThatPokMianContainerNavBarClose.classList.add(
    "whosThatPokMianContainerNavBarClose"
  );
  whosThatPokMianContainerNavBarClose.innerText = "X";
  whosThatPokMianContainerNavBarClose.addEventListener("click", () => {
    document.querySelector(".pokGmaesDisplayMainMainContainer").style.display =
      "flex";

    whosThatPokMianMainContainer.style.display = "none";
  });
  whosThatPokMianContainerNavBar.appendChild(
    whosThatPokMianContainerNavBarClose
  );

  // Image Container :
  const whosThatPokMianContainerImageDiv = document.createElement("div");
  whosThatPokMianContainerImageDiv.classList.add(
    "whosThatPokMianContainerImageDiv"
  );
  whosThatPokMianContainer.appendChild(whosThatPokMianContainerImageDiv);
  const whosThatPokMianContainerImageDivImg = document.createElement("img");
  whosThatPokMianContainerImageDivImg.classList.add(
    "whosThatPokMianContainerImageDivImg"
  );
  whosThatPokMianContainerImageDivImg.src = presentPok[0].ThumbnailImage;
  whosThatPokMianContainerImageDiv.appendChild(
    whosThatPokMianContainerImageDivImg
  );

  // Title Container :
  const whosThatPokMianContainerTitleDiv = document.createElement("div");
  whosThatPokMianContainerTitleDiv.classList.add(
    "whosThatPokMianContainerTitleDiv"
  );
  whosThatPokMianContainer.appendChild(whosThatPokMianContainerTitleDiv);
  const whosThatPokMianContainerTitleDivText = document.createElement("h1");
  whosThatPokMianContainerTitleDivText.classList.add(
    "whosThatPokMianContainerTitleDivText"
  );
  whosThatPokMianContainerTitleDivText.innerText = "";

  let myTimeOut = setTimeout(displayPokNameFunc, 5000);

  function displayPokNameFunc() {
    whosThatPokMianContainerTitleDivText.innerText = presentPok[0].name;
  }

  whosThatPokMianContainerTitleDiv.appendChild(
    whosThatPokMianContainerTitleDivText
  );
}

// Comparing :
function pokCompareDisplay() {
  document.querySelector(".pokGmaesDisplayMainMainContainer").style.display =
    "none";

  let leftBoxObjectSelected = 0;
  let rightBoxObjectSelected = 0;

  if (document.getElementById("pokCompareMainMainContainerID")) {
    const abc = document.getElementById("pokCompareMainMainContainerID");
    abc.remove();
  }

  const pokCompareMainMainContainer = document.createElement("div");
  pokCompareMainMainContainer.classList.add("pokCompareMainMainContainer");
  pokCompareMainMainContainer.setAttribute(
    "id",
    "pokCompareMainMainContainerID"
  );
  mainContainer.appendChild(pokCompareMainMainContainer);

  const pokCompareMainContainer = document.createElement("div");
  pokCompareMainContainer.classList.add("pokCompareMainContainer");
  pokCompareMainMainContainer.appendChild(pokCompareMainContainer);

  // Main Box Childs :
  const pokCompareNavbar = document.createElement("div");
  pokCompareNavbar.classList.add("pokCompareNavbar");
  pokCompareMainContainer.appendChild(pokCompareNavbar);
  const pokCompareBody = document.createElement("div");
  pokCompareBody.classList.add("pokCompareBody");
  pokCompareMainContainer.appendChild(pokCompareBody);

  // Navbar Childs :
  const pokCompareNavbarLogo = document.createElement("h3");
  pokCompareNavbarLogo.classList.add("pokCompareNavbarLogo");
  pokCompareNavbar.appendChild(pokCompareNavbarLogo);
  const pokCompareNavbarHeading = document.createElement("h3");
  pokCompareNavbarHeading.classList.add("pokCompareNavbarHeading");
  pokCompareNavbarHeading.innerText = "Compare Pokemons";
  pokCompareNavbar.appendChild(pokCompareNavbarHeading);
  const pokCompareNavbarClose = document.createElement("h3");
  pokCompareNavbarClose.classList.add("pokCompareNavbarClose");
  pokCompareNavbarClose.innerText = "X";
  pokCompareNavbarClose.addEventListener("click", () => {
    pokCompareMainMainContainer.style.display = "none";
    document.querySelector(".pokGmaesDisplayMainMainContainer").style.display =
      "flex";
  });
  pokCompareNavbar.appendChild(pokCompareNavbarClose);

  //  Body Childs :
  const pokCompareLeftBox = document.createElement("div");
  pokCompareLeftBox.classList.add("pokCompareLeftBox");
  pokCompareBody.appendChild(pokCompareLeftBox);
  const pokCompareMiddleBox = document.createElement("div");
  pokCompareMiddleBox.classList.add("pokCompareMiddleBox");
  pokCompareBody.appendChild(pokCompareMiddleBox);
  const pokCompareRightBox = document.createElement("div");
  pokCompareRightBox.classList.add("pokCompareRightBox");
  pokCompareBody.appendChild(pokCompareRightBox);

  // Left Box :
  const pokCompareLeftBoxSelect = document.createElement("select");
  pokCompareLeftBoxSelect.classList.add("pokCompareLeftBoxSelect");
  pokCompareLeftBoxSelect.addEventListener("change", (e) => {
    pokDisplayOnComparePage(e, pokCompareLeftBox);
  });
  pokCompareLeftBox.appendChild(pokCompareLeftBoxSelect);

  const pokCompareLeftBoxSelectOption = document.createElement("option");
  pokCompareLeftBoxSelectOption.innerText = "All";
  pokCompareLeftBoxSelect.appendChild(pokCompareLeftBoxSelectOption);
  pockedexJSONCopy.forEach((pokObj) => {
    const pokCompareLeftBoxSelectOption = document.createElement("option");
    pokCompareLeftBoxSelectOption.innerText = pokObj.name;
    pokCompareLeftBoxSelect.appendChild(pokCompareLeftBoxSelectOption);
  });

  function pokDisplayOnComparePage(e, parentElm) {
    pockedexJSONCopy.forEach((pokObj) => {
      if (pokObj.name == e.target.value) {
        if (parentElm == pokCompareLeftBox) {
          if (rightBoxObjectSelected) {
            if (rightBoxObjectSelected.name != e.target.value) {
              leftBoxObjectSelected = pokObj;
              displayPokemonBoxes(pokObj, parentElm);
              pokCompareLeftBoxSelect.disabled = true;
            }
          } else {
            leftBoxObjectSelected = pokObj;
            displayPokemonBoxes(pokObj, parentElm);
            pokCompareLeftBoxSelect.disabled = true;
          }
        }

        if (parentElm == pokCompareRightBox) {
          if (leftBoxObjectSelected) {
            if (leftBoxObjectSelected.name != e.target.value) {
              rightBoxObjectSelected = pokObj;
              displayPokemonBoxes(pokObj, parentElm);
              pokCompareRightBoxSelect.disabled = true;
            }
          } else {
            rightBoxObjectSelected = pokObj;
            displayPokemonBoxes(pokObj, parentElm);
            pokCompareRightBoxSelect.disabled = true;
          }
        }

        if (rightBoxObjectSelected != 0 && leftBoxObjectSelected != 0) {
          pokCompareMiddleBoxStartBtn.disabled = false;
        }
      }
    });
  }

  // Middle Box :
  const pokCompareMiddleBoxImage = document.createElement("img");
  pokCompareMiddleBoxImage.classList.add("pokCompareMiddleBoxImage");
  pokCompareMiddleBoxImage.src = "imgs/comparePok/vs.png";
  pokCompareMiddleBox.appendChild(pokCompareMiddleBoxImage);
  const pokCompareMiddleBoxStartBtn = document.createElement("button");
  pokCompareMiddleBoxStartBtn.classList.add("pokCompareMiddleBoxStartBtn");
  pokCompareMiddleBoxStartBtn.innerText = "START";
  pokCompareMiddleBoxStartBtn.disabled = true;
  pokCompareMiddleBoxStartBtn.addEventListener("click", () => {
    onClickOfStartBtnInComparePok();
  });
  pokCompareMiddleBox.appendChild(pokCompareMiddleBoxStartBtn);

  // Right Box :
  const pokCompareRightBoxSelect = document.createElement("select");
  pokCompareRightBoxSelect.classList.add("pokCompareRightBoxSelect");
  pokCompareRightBoxSelect.addEventListener("change", (e) => {
    pokDisplayOnComparePage(e, pokCompareRightBox);
  });
  pokCompareRightBox.appendChild(pokCompareRightBoxSelect);

  const pokCompareRightBoxSelectOption = document.createElement("option");
  pokCompareRightBoxSelectOption.innerText = "All";
  pokCompareRightBoxSelect.appendChild(pokCompareRightBoxSelectOption);
  pockedexJSONCopy.forEach((pokObj) => {
    const pokCompareRightBoxSelectOption = document.createElement("option");
    pokCompareRightBoxSelectOption.innerText = pokObj.name;
    pokCompareRightBoxSelect.appendChild(pokCompareRightBoxSelectOption);
  });

  // Middle Box Content :
  function onClickOfStartBtnInComparePok() {
    if (
      pokCompareRightBoxSelect.value != "All" &&
      pokCompareLeftBoxSelect.value != "All" &&
      pokCompareRightBoxSelect.value != pokCompareLeftBoxSelect.value
    ) {
      let finalResCompareLeft = 0;
      let finalResCompareRight = 0;

      pokCompareMainMainContainer.style.animation =
        "backgroundImgChanger 1s infinite ease-in-out";

      pokCompareMiddleBoxStartBtn.style.display = "none";
      pokCompareMiddleBoxImage.style.display = "block";
      pokCompareRightBoxSelect.disabled = true;
      pokCompareLeftBoxSelect.disabled = true;

      if (
        leftBoxObjectSelected.type.length > rightBoxObjectSelected.type.length
      ) {
        finalResCompareLeft += 1;
      } else if (
        leftBoxObjectSelected.type.length < rightBoxObjectSelected.type.length
      ) {
        finalResCompareRight += 1;
      }

      if (
        leftBoxObjectSelected.weakness.length >
        rightBoxObjectSelected.weakness.length
      ) {
        finalResCompareLeft -= 1;
      } else if (
        leftBoxObjectSelected.type.weakness <
        rightBoxObjectSelected.weakness.length
      ) {
        finalResCompareRight -= 1;
      }

      if (leftBoxObjectSelected.height > rightBoxObjectSelected.height) {
        finalResCompareLeft += 1;
      } else if (leftBoxObjectSelected.height < rightBoxObjectSelected.height) {
        finalResCompareRight += 1;
      }
      if (leftBoxObjectSelected.weight > rightBoxObjectSelected.weight) {
        finalResCompareLeft += 1;
      } else if (leftBoxObjectSelected.weight < rightBoxObjectSelected.weight) {
        finalResCompareRight += 1;
      }

      let firstTimerInCompare = setTimeout(firstTimerFuncInCompare, 5000);
      function firstTimerFuncInCompare() {
        pokCompareLeftBox.style.display = "none";
        pokCompareRightBox.style.display = "none";
        pokCompareMiddleBoxImage.style.display = "none";

        const pokCompareMiddleBoxReStartBtn = document.createElement("button");
        pokCompareMiddleBoxReStartBtn.classList.add(
          "pokCompareMiddleBoxReStartBtn"
        );
        pokCompareMiddleBoxReStartBtn.innerText = "RESTART";
        pokCompareMiddleBoxReStartBtn.addEventListener("click", () => {
          pokCompareLeftBox.style.display = "flex";
          pokCompareRightBox.style.display = "flex";
          pokCompareMiddleBoxStartBtn.style.display = "block";
          pokCompareMiddleBoxReStartBtn.style.display = "none";
          pokCompareLeftBox.lastChild.style.display = "none";
          pokCompareRightBox.lastChild.style.display = "none";
          pokCompareRightBoxSelect.disabled = false;
          pokCompareLeftBoxSelect.disabled = false;
          rightBoxObjectSelected = 0;
          leftBoxObjectSelected = 0;
          pokCompareLeftBoxSelect.value = "All";
          pokCompareRightBoxSelect.value = "All";
          pokCompareMiddleBox.lastChild.style.display = "none";
          pokCompareMainMainContainer.style.backgroundImage =
            "url(imgs/comparePok/carnage_marvel_vs_venom_hd_venom_let_there_be_carnage.jpg)";
          pokCompareRightBoxSelect.style.display = "block";
          pokCompareLeftBoxSelect.style.display = "block";
        });
        pokCompareMiddleBox.appendChild(pokCompareMiddleBoxReStartBtn);

        if (finalResCompareLeft > finalResCompareRight) {
          pokCompareMiddleBox.appendChild(pokCompareLeftBox.lastChild);
        } else if (finalResCompareLeft < finalResCompareRight) {
          pokCompareMiddleBox.appendChild(pokCompareRightBox.lastChild);
        } else {
          const pDrawCompare = document.createElement("h1");
          pDrawCompare.classList.add("pDrawCompare");
          pDrawCompare.innerText = "The Comparision was Draw";
          pokCompareMiddleBox.appendChild(pDrawCompare);
        }
        pokCompareMainMainContainer.style.animation = "none";
        pokCompareMainMainContainer.style.backgroundImage =
          "url(imgs/comparePok/carnage_marvel_vs_venom_hd_venom_let_there_be_carnage.jpg)";
      }
    }
  }
}

// Pokemon with cards :
let leftObject;
let rightObject;
function pokCardsGameDisplay() {
  leftObject = 0;
  rightObject = 0;

  const pokCardsGameMainMainContainer = document.createElement("div");
  pokCardsGameMainMainContainer.classList.add("pokCardsGameMainMainContainer");
  mainContainer.appendChild(pokCardsGameMainMainContainer);

  const pokCardsGameMainContainer = document.createElement("div");
  pokCardsGameMainContainer.classList.add("pokCardsGameMainContainer");
  pokCardsGameMainMainContainer.appendChild(pokCardsGameMainContainer);

  // Childs of main container :
  const pokCardsGameLeftBox = document.createElement("div");
  pokCardsGameLeftBox.classList.add("pokCardsGameLeftBox");
  pokCardsGameMainContainer.appendChild(pokCardsGameLeftBox);
  const pokCardsGameMiddleBox = document.createElement("div");
  pokCardsGameMiddleBox.classList.add("pokCardsGameMiddleBox");
  pokCardsGameMainContainer.appendChild(pokCardsGameMiddleBox);
  const pokCardsGameRightBox = document.createElement("div");
  pokCardsGameRightBox.classList.add("pokCardsGameRightBox");
  pokCardsGameMainContainer.appendChild(pokCardsGameRightBox);

  // Childs of Left Box :
  const pokCardsGameLeftBoxTop = document.createElement("div");
  pokCardsGameLeftBoxTop.classList.add("pokCardsGameLeftBoxTop");
  pokCardsGameLeftBox.appendChild(pokCardsGameLeftBoxTop);
  const pokCardsGameLeftBoxBottom = document.createElement("div");
  pokCardsGameLeftBoxBottom.classList.add("pokCardsGameLeftBoxBottom");
  pokCardsGameLeftBox.appendChild(pokCardsGameLeftBoxBottom);

  // Childs of Middle Box :
  const pokCardsGameMiddleBoxTop = document.createElement("div");
  pokCardsGameMiddleBoxTop.classList.add("pokCardsGameMiddleBoxTop");
  pokCardsGameMiddleBox.appendChild(pokCardsGameMiddleBoxTop);
  const pokCardsGameMiddleBoxBottom = document.createElement("div");
  pokCardsGameMiddleBoxBottom.classList.add("pokCardsGameMiddleBoxBottom");
  pokCardsGameMiddleBox.appendChild(pokCardsGameMiddleBoxBottom);

  // pokCardsGameMiddleBoxTop :
  const pokCardsGameStartBtn = document.createElement("button");
  pokCardsGameStartBtn.classList.add("pokCardsGameStartBtn");
  pokCardsGameStartBtn.innerText = "Start";
  // Start Btn Event :
  pokCardsGameStartBtn.addEventListener("click", () => {
    pokCardsGameLeftBoxTop.style.display = "block";
    pokCardsGameRightBoxTop.style.display = "block";
    let randomLeft = Math.floor(Math.random() * 1010);
    let randomRight = Math.floor(Math.random() * 1008);
    randomRight == randomLeft ? randomRight + 1 : (randomRight = randomRight);
    displayPokemonBoxes(pockedexJSONCopy[randomLeft], pokCardsGameLeftBoxTop);
    displayPokemonBoxes(pockedexJSONCopy[randomRight], pokCardsGameRightBoxTop);
    leftObject = pockedexJSONCopy[randomLeft];
    rightObject = pockedexJSONCopy[randomRight];
    pokCardsGameStartBtn.style.display = "none";
    pokCardsGameRestartBtn.style.display = "block";

    pokCardsGameMiddleBoxBottomHeight.style.display = "block";
    pokCardsGameMiddleBoxBottomWeight.style.display = "block";
    pokCardsGameMiddleBoxBottomTypes.style.display = "block";
    pokCardsGameMiddleBoxBottomResult.style.display = "none";
  });
  pokCardsGameMiddleBoxTop.appendChild(pokCardsGameStartBtn);
  const pokCardsGameRestartBtn = document.createElement("button");
  pokCardsGameRestartBtn.classList.add("pokCardsGameRestartBtn");
  pokCardsGameRestartBtn.innerText = "Restart";
  // Restart Btn Event :
  pokCardsGameRestartBtn.addEventListener("click", () => {
    pokCardsGameStartBtn.style.display = "block";
    pokCardsGameRestartBtn.style.display = "none";
    pokCardsGameLeftBoxTop.innerHTML = "";
    pokCardsGameRightBoxTop.innerHTML = "";
    leftObject = 0;
    rightObject = 0;
  });
  pokCardsGameMiddleBoxTop.appendChild(pokCardsGameRestartBtn);

  // pokCardsGameMiddleBoxBottom :
  const pokCardsGameMiddleBoxBottomHeight = document.createElement("button");
  pokCardsGameMiddleBoxBottomHeight.classList.add(
    "pokCardsGameMiddleBoxBottomHeight"
  );
  pokCardsGameMiddleBoxBottomHeight.innerText = "H";
  pokCardsGameMiddleBoxBottomHeight.addEventListener("click", () => {
    cardsGameCompare("H");
  });
  pokCardsGameMiddleBoxBottom.appendChild(pokCardsGameMiddleBoxBottomHeight);
  const pokCardsGameMiddleBoxBottomWeight = document.createElement("button");
  pokCardsGameMiddleBoxBottomWeight.classList.add(
    "pokCardsGameMiddleBoxBottomWeight"
  );
  pokCardsGameMiddleBoxBottomWeight.innerText = "W";
  pokCardsGameMiddleBoxBottomWeight.addEventListener("click", () => {
    cardsGameCompare("W");
  });
  pokCardsGameMiddleBoxBottom.appendChild(pokCardsGameMiddleBoxBottomWeight);
  const pokCardsGameMiddleBoxBottomTypes = document.createElement("button");
  pokCardsGameMiddleBoxBottomTypes.classList.add(
    "pokCardsGameMiddleBoxBottomTypes"
  );
  pokCardsGameMiddleBoxBottomTypes.innerText = "T";
  pokCardsGameMiddleBoxBottomTypes.addEventListener("click", () => {
    cardsGameCompare("T");
  });
  pokCardsGameMiddleBoxBottom.appendChild(pokCardsGameMiddleBoxBottomTypes);
  const pokCardsGameMiddleBoxBottomResult = document.createElement("h2");
  pokCardsGameMiddleBoxBottomResult.classList.add(
    "pokCardsGameMiddleBoxBottomResult"
  );
  pokCardsGameMiddleBoxBottom.appendChild(pokCardsGameMiddleBoxBottomResult);

  // Childs of Right Box :
  const pokCardsGameRightBoxTop = document.createElement("div");
  pokCardsGameRightBoxTop.classList.add("pokCardsGameRightBoxTop");
  pokCardsGameRightBox.appendChild(pokCardsGameRightBoxTop);
  const pokCardsGameRightBoxBottom = document.createElement("div");
  pokCardsGameRightBoxBottom.classList.add("pokCardsGameRightBoxBottom");
  pokCardsGameRightBox.appendChild(pokCardsGameRightBoxBottom);

  function cardsGameCompare(WhatToCompare) {
    let finalResOfCardsGame = "";
    if (WhatToCompare == "H") {
      if (leftObject.height > rightObject.height) {
        finalResOfCardsGame = "Left Won the game";
      } else if (leftObject.height < rightObject.height) {
        finalResOfCardsGame = "Right Won the game";
      } else {
        finalResOfCardsGame = "The game was draw";
      }
    }
    if (WhatToCompare == "W") {
      if (leftObject.weight > rightObject.weight) {
        finalResOfCardsGame = "Left Won the game";
      } else if (leftObject.weight < rightObject.weight) {
        finalResOfCardsGame = "Right Won the game";
      } else {
        finalResOfCardsGame = "The game was draw";
      }
    }
    if (WhatToCompare == "T") {
      if (leftObject.type.length > rightObject.type.length) {
        finalResOfCardsGame = "Left Won the game";
      } else if (leftObject.type.length < rightObject.type.length) {
        finalResOfCardsGame = "Right Won the game";
      } else {
        finalResOfCardsGame = "The game was draw";
      }
    }

    pokCardsGameMiddleBoxBottomHeight.style.display = "none";
    pokCardsGameMiddleBoxBottomWeight.style.display = "none";
    pokCardsGameMiddleBoxBottomTypes.style.display = "none";

    pokCardsGameMiddleBoxBottomResult.style.display = "block";
    pokCardsGameMiddleBoxBottomResult.innerText = finalResOfCardsGame;
  }
}
// pokCardsGameDisplay();

// Games Home Page :
function gamesHomePageDisplay() {
  root.navBar.navBar.style.display = "none";
  root.body.body.style.display = "none";
  root.footer.footer.style.display = "none";

  if (document.getElementById("pokGmaesDisplayMainMainContainerID")) {
    const abc = document.getElementById("pokGmaesDisplayMainMainContainerID");
    abc.remove();
  }

  const pokGmaesDisplayMainMainContainer = document.createElement("div");
  pokGmaesDisplayMainMainContainer.classList.add(
    "pokGmaesDisplayMainMainContainer"
  );
  pokGmaesDisplayMainMainContainer.setAttribute(
    "id",
    "pokGmaesDisplayMainMainContainerID"
  );
  mainContainer.appendChild(pokGmaesDisplayMainMainContainer);

  const pokGmaesDisplayMainContainerNavBar = document.createElement("div");
  pokGmaesDisplayMainContainerNavBar.classList.add(
    "pokGmaesDisplayMainContainerNavBar"
  );
  pokGmaesDisplayMainContainerNavBar.innerHTML = `
    <h1 class = "pokGmaesDisplayMainContainerNavBarHeading">Games</h1>
    <h1 class = "pokGmaesDisplayMainContainerNavBarClose">X</h1>
  `;
  pokGmaesDisplayMainMainContainer.appendChild(
    pokGmaesDisplayMainContainerNavBar
  );
  const pokGmaesDisplayMainContainer = document.createElement("div");
  pokGmaesDisplayMainContainer.classList.add("pokGmaesDisplayMainContainer");
  pokGmaesDisplayMainMainContainer.appendChild(pokGmaesDisplayMainContainer);

  const listOfGamesObj = [
    {
      gameNum: 1,
      gameName: "Who's That Pokemon",
      gameImage: "imgs/gamesDisplayPage/who's_that_pok.jpg",
      gameOnclickFunc: "whosThatPokemon()",
    },
    {
      gameNum: 2,
      gameName: "Compare Pokemons",
      gameImage: "imgs/gamesDisplayPage/compareTwoPok.jpeg",
      gameOnclickFunc: "pokCompareDisplay()",
    },
  ];

  listOfGamesObj.forEach((pokGame) => {
    const pokGameCard = document.createElement("div");
    pokGameCard.classList.add("pokGameCard");
    pokGameCard.innerHTML = `
      <div class="gameCard${pokGame.gameNum} gameMainCard" onClick="${pokGame.gameOnclickFunc}">
        <div class="gameTopBox">
          <img src="${pokGame.gameImage}" alt="${pokGame.gameName}">
        </div>
        <div class="gameBottomBox">
          <h2>${pokGame.gameName}</h2>
        </div>
      </div>
    `;
    pokGmaesDisplayMainContainer.appendChild(pokGameCard);
  });

  document
    .querySelector(".pokGmaesDisplayMainContainerNavBarClose")
    .addEventListener("click", () => {
      pokGmaesDisplayMainMainContainer.style.display = "none";
      root.navBar.navBar.style.display = "block";
      root.body.body.style.display = "flex";
      root.footer.footer.style.display = "block";
    });
}

// Liked Pok Page:
function likedPokPageDisplay() {
  root.navBar.navBar.style.display = "none";
  root.body.body.style.display = "none";
  root.footer.footer.style.display = "none";

  if (document.getElementById("pokLikedPoksMainMainContainerID")) {
    const abc = document.getElementById("pokLikedPoksMainMainContainerID");
    abc.remove();
  }

  const pokLikedPoksMainMainContainer = document.createElement("div");
  pokLikedPoksMainMainContainer.classList.add("pokLikedPoksMainMainContainer");
  pokLikedPoksMainMainContainer.setAttribute(
    "id",
    "pokLikedPoksMainMainContainerID"
  );
  mainContainer.appendChild(pokLikedPoksMainMainContainer);

  const pokLikedPoksMainContainerNavBar = document.createElement("div");
  pokLikedPoksMainContainerNavBar.classList.add(
    "pokLikedPoksMainContainerNavBar"
  );
  pokLikedPoksMainContainerNavBar.innerHTML = `
    <h1 class = "pokLikedPoksMainContainerNavBarHeading">Liked Pokemons : </h1>
    <h1 class = "pokLikedPoksMainContainerNavBarClose">X</h1>
  `;
  pokLikedPoksMainMainContainer.appendChild(pokLikedPoksMainContainerNavBar);
  const pokLikedPoksMainContainer = document.createElement("div");
  pokLikedPoksMainContainer.classList.add("pokLikedPoksMainContainer");
  pokLikedPoksMainMainContainer.appendChild(pokLikedPoksMainContainer);
  // ============================================
  if (likedPoksArr.length > 0 && !likedPoksArr.includes("")) {
    pokLikedPoksMainContainer.innerHTML = "";
    likedPoksArr.forEach((poks) => {
      displayPokemonBoxes(
        pockedexJSONCopy[poks - 1],
        pokLikedPoksMainContainer
      );
    });
  } else {
    pokLikedPoksMainContainer.innerHTML = "<h2> No Items Found </h2>";
  }
  // ============================================
  document
    .querySelector(".pokLikedPoksMainContainerNavBarClose")
    .addEventListener("click", () => {
      pokLikedPoksMainMainContainer.style.display = "none";
      root.navBar.navBar.style.display = "block";
      root.body.body.style.display = "flex";
      root.footer.footer.style.display = "block";
    });
}

function logOutPageDisplay() {
  localStorage.setItem("Access", "Not Given");
  localStorage.setItem("ForgotPasswordFirstStageAccess", "Not Given");
  localStorage.setItem("ForgotPasswordSecondStageAccess", "Not Given");
  window.location.href = "/logIn";
}

function chatPage() {
  let chatSearchDisplayArr = [];
  let originalChatDisplayArr = [];

  root.navBar.navBar.style.display = "none";
  root.body.body.style.display = "none";
  root.footer.footer.style.display = "none";

  if (document.getElementById("pokChatMainMainContainerID")) {
    const abc = document.getElementById("pokChatMainMainContainerID");
    abc.remove();
  }

  const pokChatMainMainContainer = document.createElement("div");
  pokChatMainMainContainer.classList.add("pokChatMainMainContainer");
  pokChatMainMainContainer.setAttribute("id", "pokChatMainMainContainerID");
  mainContainer.appendChild(pokChatMainMainContainer);

  const pokChatMainContainerNavBar = document.createElement("div");
  pokChatMainContainerNavBar.classList.add("pokChatMainContainerNavBar");
  pokChatMainContainerNavBar.innerHTML = `
    <h1 class = "pokChatMainContainerNavBarHeading">Chats : </h1>
    <h1 class = "pokChatMainContainerNavBarClose">X</h1>
  `;
  pokChatMainMainContainer.appendChild(pokChatMainContainerNavBar);
  const pokChatMainContainer = document.createElement("div");
  pokChatMainContainer.classList.add("pokChatMainContainer");
  pokChatMainMainContainer.appendChild(pokChatMainContainer);

  // Main Container child:
  const pokChatLeftMain = document.createElement("div");
  pokChatLeftMain.classList.add("pokChatLeftMain");
  pokChatMainContainer.appendChild(pokChatLeftMain);
  const pokChatRightMain = document.createElement("div");
  pokChatRightMain.classList.add("pokChatRightMain");
  pokChatMainContainer.appendChild(pokChatRightMain);

  // Left Childs :
  const pokChatLeftSearchBar = document.createElement("input");
  pokChatLeftSearchBar.classList.add("pokChatLeftSearchBar");
  pokChatLeftSearchBar.placeholder = "Search";
  pokChatLeftMain.appendChild(pokChatLeftSearchBar);
  const pokChatLeftContentBox = document.createElement("div");
  pokChatLeftContentBox.classList.add("pokChatLeftContentBox");
  pokChatLeftMain.appendChild(pokChatLeftContentBox);

  // Right childs :
  const pokChatRightNav = document.createElement("div");
  pokChatRightNav.classList.add("pokChatRightNav");
  pokChatRightMain.appendChild(pokChatRightNav);
  const pokChatRightBody = document.createElement("div");
  pokChatRightBody.classList.add("pokChatRightBody");
  pokChatRightMain.appendChild(pokChatRightBody);
  const pokChatRightFooter = document.createElement("div");
  pokChatRightFooter.classList.add("pokChatRightFooter");
  pokChatRightMain.appendChild(pokChatRightFooter);

  // Right Nav Childs :
  const pokChatRightNavLogoAndNameBox = document.createElement("div");
  pokChatRightNavLogoAndNameBox.classList.add("pokChatRightNavLogoAndNameBox");
  pokChatRightNav.appendChild(pokChatRightNavLogoAndNameBox);
  const pokChatRightNavLogo = document.createElement("h1");
  pokChatRightNavLogo.classList.add("pokChatRightNavLogo");
  pokChatRightNavLogo.innerText = "😂";
  pokChatRightNavLogoAndNameBox.appendChild(pokChatRightNavLogo);
  const pokChatRightNavName = document.createElement("h3");
  pokChatRightNavName.classList.add("pokChatRightNavName");
  pokChatRightNavName.innerText = "Chats Section";
  pokChatRightNavLogoAndNameBox.appendChild(pokChatRightNavName);

  // Right Body Childs :
  const pokChatRightBodyMainMsgContainer = document.createElement("div");
  pokChatRightBodyMainMsgContainer.classList.add(
    "pokChatRightBodyMainMsgContainer"
  );
  pokChatRightBody.appendChild(pokChatRightBodyMainMsgContainer);
  // Here comes the divs containing the chats from the users. In for loop.

  // Right Footer Childs :
  const pokChatRightFooterMainContainer = document.createElement("form");
  pokChatRightFooterMainContainer.classList.add(
    "pokChatRightFooterMainContainer"
  );
  pokChatRightFooter.appendChild(pokChatRightFooterMainContainer);
  const pokChatRightFooterInput = document.createElement("input");
  pokChatRightFooterInput.classList.add("pokChatRightFooterInput");
  pokChatRightFooterInput.placeholder = "Enter the message";
  pokChatRightFooterMainContainer.appendChild(pokChatRightFooterInput);
  const pokChatRightFooterSendBtn = document.createElement("button");
  pokChatRightFooterSendBtn.classList.add("pokChatRightFooterSendBtn");
  pokChatRightFooterSendBtn.innerText = "Send";
  pokChatRightFooterMainContainer.appendChild(pokChatRightFooterSendBtn);

  // Find the name by email :

  // Close section
  document
    .querySelector(".pokChatMainContainerNavBarClose")
    .addEventListener("click", () => {
      pokChatMainMainContainer.style.display = "none";
      root.navBar.navBar.style.display = "block";
      root.body.body.style.display = "flex";
      root.footer.footer.style.display = "block";
    });

  // First Display of chats page :
  function firstDisplayOfChatsInChatsPage() {
    let checkRepetationArraInChatContact = [];
    let allSeenAndNotSeenChatContatsArr = [];
    fetch("/onSelectOfUserToChat")
      .then((response) => response.json())
      .then((message) => {
        pokChatLeftContentBox.innerHTML = "";
        message.chatMsgGet.forEach((obj, i) => {
          if (
            obj.to == presentUserEmail &&
            !allSeenAndNotSeenChatContatsArr.includes(obj.from)
          ) {
            // Here I have sent then msg :
            allSeenAndNotSeenChatContatsArr.push(obj.from);
          }
          if (
            obj.from == presentUserEmail &&
            !allSeenAndNotSeenChatContatsArr.includes(obj.to)
          ) {
            // Here others have sent me a msg and i have received a msg :
            allSeenAndNotSeenChatContatsArr.push(obj.to);
          }
        });

        allSeenAndNotSeenChatContatsArr.forEach((elmOfBothSeenAndNotSeen) => {
          if (notSeenUsersArr.includes(elmOfBothSeenAndNotSeen)) {
            chatContactsDisplayFunc(elmOfBothSeenAndNotSeen, "NotSeen");
          } else {
            chatContactsDisplayFunc(elmOfBothSeenAndNotSeen, "Seen");
          }
        });
      });

    let notSeenUsersArr = [];
    fetch("/offcanvasToChatPageNotSeenContacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        to: presentUserEmail,
        seen: "False",
      }),
    })
      .then((res) => res.json())
      .then((msg) => {
        msg.chatMsgGet.forEach((obj) => {
          if (!notSeenUsersArr.includes(obj.from)) {
            notSeenUsersArr.push(obj.from);
          }
        });
      });
  }

  if (document.querySelector(".pokChatLeftSearchBar").value.length == 0) {
    firstDisplayOfChatsInChatsPage();
  }
  // pokChatLeftSearchBar EVENT LISTENER :
  pokChatLeftSearchBar.addEventListener("input", () => {
    if (document.querySelector(".pokChatLeftSearchBar").value.length == 0) {
      firstDisplayOfChatsInChatsPage();
      return 0;
    }

    let objChatsContactsSearchValue = {
      objVal: pokChatLeftSearchBar.value,
    };

    fetch("/chatSearchUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objChatsContactsSearchValue),
    })
      .then((res) => res.json())
      .then((msg) => {
        chatSearchDisplayArr = msg.allUsersObjectArr;

        pokChatLeftContentBox.innerHTML = "";
        chatSearchDisplayArr.forEach((objChatsSearchContactsAll) => {
          chatContactsDisplayFunc(objChatsSearchContactsAll, "Seen");
        });
      });
  });

  function chatContactsDisplayFunc(
    objChatsSearchContactsAll,
    objChatSeenIndicator
  ) {
    const pokChatLeftContentBoxItemContainer = document.createElement("div");
    pokChatLeftContentBoxItemContainer.classList.add(
      "pokChatLeftContentBoxItemContainer",
      objChatsSearchContactsAll
    );
    if (objChatSeenIndicator == "NotSeen") {
      pokChatLeftContentBoxItemContainer.style.backgroundColor = "red";
    } else {
      pokChatLeftContentBoxItemContainer.style.backgroundColor = "none";
    }
    pokChatLeftContentBox.appendChild(pokChatLeftContentBoxItemContainer);

    const pokChatLeftContentBoxItemContainerLogo = document.createElement("h1");
    pokChatLeftContentBoxItemContainerLogo.classList.add(
      "pokChatLeftContentBoxItemContainerLogo"
    );
    pokChatLeftContentBoxItemContainerLogo.innerText =
      objChatsSearchContactsAll[0];
    pokChatLeftContentBoxItemContainer.appendChild(
      pokChatLeftContentBoxItemContainerLogo
    );

    const pokChatLeftContentBoxItemContainerName = document.createElement("h3");
    pokChatLeftContentBoxItemContainerName.classList.add(
      "pokChatLeftContentBoxItemContainerName"
    );
    pokChatLeftContentBoxItemContainerName.innerText =
      objChatsSearchContactsAll.slice(
        0,
        objChatsSearchContactsAll.indexOf("@")
      );
    pokChatLeftContentBoxItemContainer.appendChild(
      pokChatLeftContentBoxItemContainerName
    );

    pokChatLeftContentBoxItemContainer.addEventListener("click", (e) => {
      if (e.target.classList[0] == "pokChatLeftContentBoxItemContainer") {
        chatSearchDisplayArr = [];
        chatSearchDisplayArr.push(e.target.classList[1]);

        document.querySelector(".pokChatRightNavLogo").innerText =
          e.target.classList[1][0];
        document.querySelector(".pokChatRightNavName").innerText =
          e.target.classList[1];
        document.querySelector(
          ".pokChatRightFooterMainContainer"
        ).style.display = "flex";

        if (objChatSeenIndicator == "NotSeen") {
          let obj = {
            from: objChatsSearchContactsAll,
            to: presentUserEmail,
            seen: "True",
          };

          fetch("/updateSeenInChat", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
          });
        } else {
        }

        pokChatLeftContentBox.innerHTML = "";
        chatSearchDisplayArr.forEach((objChatsSearchContactsAll) => {
          chatContactsDisplayFunc(objChatsSearchContactsAll, "Seen");
        });

        // ============================
        fetch("/onSelectOfUserToChat")
          .then((response) => response.json())
          .then((message) => {
            pokChatRightBodyMainMsgContainer.innerHTML = "";
            message.chatMsgGet.forEach((obj) => {
              if (obj.from == presentUserEmail) {
                if (
                  obj.to ==
                  document.querySelector(".pokChatRightNavName").innerText
                ) {
                  chatMsgDisplayFunc(obj.msg, obj.from);
                }
              } else if (obj.to == presentUserEmail) {
                if (
                  obj.from ==
                  document.querySelector(".pokChatRightNavName").innerText
                ) {
                  chatMsgDisplayFunc(obj.msg, obj.from);
                }
              }
            });
          });
        // ============================
      }
    });
  }

  // pokChatRightFooterSendBtn EVENT LISTENER :
  pokChatRightFooterSendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const megMainContainer = document.querySelector(
      ".pokChatRightBodyMainMsgContainer"
    );
    megMainContainer.scrollTo(megMainContainer.scrollHeight, 0);
    let msgGeneralObj = {
      from: presentUserEmail,
      msg: pokChatRightFooterInput.value,
      to: pokChatRightNavName.innerText,
      seen: "False",
    };
    fetch("/allMsgs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(msgGeneralObj),
    })
      .then((res) => res.json())
      .then((msg) => {
        let originalLengthOfChatMsgGet = 0;
        if (msg.chatMsgGet.length !== originalLengthOfChatMsgGet) {
          originalLengthOfChatMsgGet = msg.chatMsgGet.length;
          pokChatRightBodyMainMsgContainer.innerHTML = "";
          msg.chatMsgGet.forEach((obj) => {
            if (obj.from == presentUserEmail) {
              if (
                obj.to ==
                document.querySelector(".pokChatRightNavName").innerText
              ) {
                chatMsgDisplayFunc(obj.msg, obj.from);
              }
            } else if (obj.to == presentUserEmail) {
              if (
                obj.from ==
                document.querySelector(".pokChatRightNavName").innerText
              ) {
                chatMsgDisplayFunc(obj.msg, obj.from);
              }
            }
          });
        }
      });
  });

  function chatMsgDisplayFunc(msgToDisplay, msgFrom) {
    const chatMsgDiv = document.createElement("div");
    chatMsgDiv.classList.add("chatMsgDiv");
    pokChatRightBodyMainMsgContainer.appendChild(chatMsgDiv);
    const chatMsg = document.createElement("p");
    chatMsg.classList.add("chatMsg");
    chatMsg.innerText = msgToDisplay;
    chatMsgDiv.appendChild(chatMsg);

    if (msgFrom == presentUserEmail) {
      chatMsgDiv.style.justifyContent = "flex-end";
      chatMsg.style.borderRadius = "20px 20px 0px 20px";
    }

    document.querySelector(".pokChatRightFooterInput").value = "";
  }
}
