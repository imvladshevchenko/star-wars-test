<template>
  <div class="cards">
    <div class="container">
      <h2 class="cards__title">People</h2>
      <div class="cards__dropdowns">
        <div class="cards__filters-wrapper">
          <div class="cards__dropdown">
            <a class="cards__dropdown-link" href="" v-on:click.prevent
              >Eye color
              <span><i class="el-icon-arrow-down el-icon--right"></i></span
            ></a>
            <ul class="cards__dropdown-content">
              <li
                class="cards__dropdown-item"
                @click="
                  itemFilterKey = 'blue';
                  filterRouterPush('blue');
                "
              >
                blue
              </li>
              <li
                class="cards__dropdown-item"
                @click="
                  itemFilterKey = 'blue-gray';
                  filterRouterPush('blue-gray');
                "
              >
                blue-gray
              </li>
              <li
                class="cards__dropdown-item"
                @click="
                  itemFilterKey = 'brown';
                  filterRouterPush('brown');
                "
              >
                brown
              </li>
              <li
                class="cards__dropdown-item"
                @click="
                  itemFilterKey = 'red';
                  filterRouterPush('red');
                "
              >
                red
              </li>
              <li
                class="cards__dropdown-item"
                @click="
                  itemFilterKey = 'yellow';
                  filterRouterPush('yellow');
                "
              >
                yellow
              </li>
            </ul>
          </div>
          <div class="cards__dropdown">
            <a class="cards__dropdown-link" href="" v-on:click.prevent
              >Height
              <span><i class="el-icon-arrow-down el-icon--right"></i></span
            ></a>
            <div class="cards__dropdown-content dropdown-height">
              <div class="cards__inputs-wrapper">
                <input
                  class="cards__dropdown-input"
                  type="number"
                  v-model.number="heightMinValue"
                  v-on:change="updateSliderHeight"
                />
                <input
                  class="cards__dropdown-input"
                  type="number"
                  v-model.number="heightMaxValue"
                  v-on:change="updateSliderHeight"
                />
              </div>
              <div class="cards__input-text-wrapper">
                <p class="cards__input-text">{{ heightMinValue }} cm</p>
                <p class="cards__input-text">{{ heightMaxValue }} cm</p>
              </div>
              <div id="slider"></div>
            </div>
          </div>
          <div class="cards__dropdown">
            <a class="cards__dropdown-link" href="" v-on:click.prevent
              >Age <span><i class="el-icon-arrow-down el-icon--right"></i></span
            ></a>
            <div class="cards__dropdown-content dropdown-mass">
              <div class="cards__inputs-wrapper">
                <input
                  class="cards__dropdown-input"
                  type="number"
                  v-model.number="massMinValue"
                  v-on:change="updateSliderMass"
                />
                <input
                  class="cards__dropdown-input"
                  type="number"
                  v-model.number="massMaxValue"
                  v-on:change="updateSliderMass"
                />
              </div>
              <div class="cards__input-text-wrapper">
                <p class="cards__input-text">{{ massMinValue }} BBY</p>
                <p class="cards__input-text">{{ massMaxValue }} BBY</p>
              </div>
              <div id="html5"></div>
            </div>
          </div>
        </div>
        <div class="cards__sort-wrapper">
          <div class="cards__dropdown">
            <a class="cards__dropdown-link" href="" v-on:click.prevent
              >Sort by
              <span><i class="el-icon-arrow-down el-icon--right"></i></span
            ></a>
            <a href="" v-on:click.prevent
              ><svg
                class="cards__burger"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M20.1616 2.58325H0.838297C0.595182 2.58325 0.362025 2.50423 0.190116 2.36358C0.0182081 2.22293 -0.0783691 2.03216 -0.0783691 1.83325C-0.0783691 1.63434 0.0182081 1.44357 0.190116 1.30292C0.362025 1.16227 0.595182 1.08325 0.838297 1.08325H20.1616C20.4047 1.08325 20.6379 1.16227 20.8098 1.30292C20.9817 1.44357 21.0783 1.63434 21.0783 1.83325C21.0783 2.03216 20.9817 2.22293 20.8098 2.36358C20.6379 2.50423 20.4047 2.58325 20.1616 2.58325Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                  <path
                    d="M13.4058 8.08331H0.838297C0.595182 8.08331 0.362025 8.0043 0.190116 7.86364C0.0182081 7.72299 -0.0783691 7.53223 -0.0783691 7.33331C-0.0783691 7.1344 0.0182081 6.94363 0.190116 6.80298C0.362025 6.66233 0.595182 6.58331 0.838297 6.58331H13.4058C13.6489 6.58331 13.8821 6.66233 14.054 6.80298C14.2259 6.94363 14.3225 7.1344 14.3225 7.33331C14.3225 7.53223 14.2259 7.72299 14.054 7.86364C13.8821 8.0043 13.6489 8.08331 13.4058 8.08331Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                  <path
                    d="M6.59496 13.5833H0.838298C0.595182 13.5833 0.362025 13.5043 0.190116 13.3636C0.0182081 13.223 -0.0783691 13.0322 -0.0783691 12.8333C-0.0783691 12.6344 0.0182081 12.4436 0.190116 12.303C0.362025 12.1623 0.595182 12.0833 0.838298 12.0833H6.59496C6.83808 12.0833 7.07124 12.1623 7.24314 12.303C7.41505 12.4436 7.51163 12.6344 7.51163 12.8333C7.51163 13.0322 7.41505 13.223 7.24314 13.3636C7.07124 13.5043 6.83808 13.5833 6.59496 13.5833Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="21" height="15" fill="white" />
                  </clipPath>
                </defs></svg
            ></a>
            <ul class="cards__dropdown-content">
              <li
                class="cards__dropdown-item"
                @click="
                  sortedArray('age');
                  sortRouterPush('age');
                "
              >
                age
              </li>
              <li
                class="cards__dropdown-item"
                @click="
                  sortedArray('mass');
                  sortRouterPush('mass');
                "
              >
                mass
              </li>
              <li
                class="cards__dropdown-item"
                @click="
                  sortedArray('height');
                  sortRouterPush('height');
                "
              >
                height
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="cards__list">
        <li
          class="cards__list-item"
          v-for="people in filteredList"
          :key="people.id"
          :style="{
            backgroundImage:
              'url(' +
              require(`../img/${encodeURIComponent(people.name)}.jpg`) +
              ')',
          }"
        >
          <div class="cards__card-wrapper">
            <p class="cards__age">{{ people.birth_year }}</p>
            <h4 class="cards__name">{{ people.name }}</h4>
            <div class="cards__info-wrapper">
              <p class="cards__eye-color">Eye color : {{ people.eye_color }}</p>
              <p class="cards__height">Height : {{ people.height }}</p>
              <p class="cards__mass">Mass : {{ people.mass }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";

export default {
  name: "Cards",
  data() {
    return {
      heightMinValue: 96,
      heightMaxValue: 202,
      massMinValue: 19,
      massMaxValue: 136,
      itemFilterKey: "",
      peopleList: [],
    };
  },
  methods: {
    sortedArray(item) {
      let sortedList = this.peopleList;
      sortedList = sortedList.sort((a, b) => {
        if (item == "mass") {
          return a.mass - b.mass;
        } else if (item == "height") {
          return a.height - b.height;
        } else {
          return (
            a.birth_year.replace(/[a-z]/gi, "") -
            b.birth_year.replace(/[a-z]/gi, "")
          );
        }
      });
    },
    updateSliderHeight: function() {
      slider.noUiSlider.set([this.heightMinValue, this.heightMaxValue]);
    },
    updateSliderMass: function() {
      html5.noUiSlider.set([this.massMinValue, this.massMaxValue]);
    },
    sortRouterPush(item) {
      this.$router.push({ path: "cards", query: { sortedBy: item } });
    },
    filterRouterPush(item) {
      this.$router.push({ path: "cards", query: { eyeColor: item } });
    },
  },
  computed: {
    filteredList() {
      return this.peopleList
        .filter((people) => {
          return people.eye_color.indexOf(this.itemFilterKey) > -1;
        })
        .filter((people) => {
          return (
            Number(people.height) >= this.heightMinValue &&
            Number(people.height) <= this.heightMaxValue
          );
        })
        .filter((people) => {
          return (
            Number(people.mass) >= this.massMinValue &&
            Number(people.mass) <= this.massMaxValue
          );
        });
    },
  },
  mounted() {
    preloader.style.display = "flex";
    try {
      axios.get("http://swapi.dev/api/people/").then((response) => {
        this.peopleList = response.data.results;
        preloader.style.display = "none";
      });
    } catch (error) {
      console.error(error);
    }
    noUiSlider.create(slider, {
      start: [this.heightMinValue, this.heightMaxValue],
      connect: true,
      range: {
        min: 96,
        max: 202,
      },
    });
    noUiSlider.create(html5, {
      start: [this.massMinValue, this.massMaxValue],
      connect: true,
      range: {
        min: 19,
        max: 136,
      },
    });
    slider.noUiSlider.on("update", (values, handle) => {
      this[handle ? "heightMaxValue" : "heightMinValue"] = parseInt(
        values[handle]
      );
    });
    html5.noUiSlider.on("update", (values, handle) => {
      this[handle ? "massMaxValue" : "massMinValue"] = parseInt(values[handle]);
    });
  },
};
</script>

<style lang="scss">
$styles: cards;
.#{$styles} {
  padding: 20px 0 80px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 600px) {
    padding: 64px 0 112px;
    min-height: calc(100vh - 302.33px);
  }
  .container {
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    max-width: 1282px;
    @media screen and (min-width: 600px) {
      padding: 0 25px;
    }
  }
  &__title {
    font-family: $base-font;
    font-size: 28px;
    line-height: 148%;
    color: black;
    margin-bottom: 16px;
    font-weight: 400;
    @media screen and (min-width: 600px) {
      font-size: 32px;
      margin-bottom: 24px;
    }
  }
  &__dropdowns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    @media screen and (min-width: 600px) {
      margin-bottom: 48px;
    }
  }
  &__filters-wrapper {
    display: flex;
  }
  &__dropdown {
    position: relative;
    &:hover .cards__dropdown-content {
      transition: opacity 0.3s ease-in-out;
      visibility: visible;
      opacity: 1;
    }
  }
  &__dropdown:not(:last-child) {
    margin-right: 24px;
    @media screen and (min-width: 600px) {
      margin-right: 40px;
    }
  }
  &__dropdown-link {
    padding-right: 12px;
  }
  &__dropdown-content {
    visibility: hidden;
    opacity: 0;
    z-index: 10;
    position: absolute;
    top: 30px;
    left: -15px;
    min-width: 101px;
    border-radius: 6px;
    padding: 12px 0 20px;
    background: #ffffff;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
    transition: all 0.1s ease-in;
    transition-delay: 0.1s;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background: #ffffff;
      top: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &__dropdown-item {
    padding: 0 26px 0 20px;
    line-height: 180%;
    font-family: $sec-font;
    font-weight: 100;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      transition: all 0.1s ease;
      background-color: #ecf5ff;
      color: #66b1ff;
    }
  }
  &__dropdown-item > a {
    width: 100%;
  }
  &__dropdown-input {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    max-width: 100px;
    padding: 8px 12px;
    outline: none;
    font-family: $base-font;
    color: rgba($color: $ND1, $alpha: 0.8);
    font-size: $H14;
    line-height: 25px;
    margin-bottom: 8px;
  }
  &__dropdown-input:not(:last-of-type) {
    margin-right: 10px;
  }
  &__inputs-wrapper {
    display: flex;
  }
  &__input-text-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__input-text {
    font-size: $H14;
    font-family: $base-font;
    line-height: 25px;
    color: rgba($color: $ND1, $alpha: 0.8);
    margin-bottom: 9px;
  }
  &__dropdown-item:not(:last-of-type) {
    margin-bottom: 8px;
  }
  &__dropdowns-wrapper > *:not(:last-child) {
    margin-right: 40px;
  }
  &__sort-wrapper > &__dropdown > &__dropdown-link {
    display: none;
    @media screen and (min-width: 600px) {
      display: inline;
    }
  }
  &__sort-wrapper > &__dropdown > &__dropdown-content {
    left: -70px;
    @media screen and (min-width: 600px) {
      left: -15px;
    }
  }
  &__sort-wrapper > &__dropdown > &__dropdown-content::before {
    left: 70px;
    @media screen and (min-width: 600px) {
      left: 50%;
    }
  }
  &__burger {
    @media screen and (min-width: 600px) {
      display: none;
    }
  }
  .dropdown-height,
  .dropdown-mass {
    min-width: 249px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 26px 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    @media screen and (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 16px;
    }
  }
  &__list-item {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 6px;
    overflow: hidden;
    max-width: 608px;
    background-size: cover;
    background-position: center;
    @media screen and (min-width: 600px) {
      margin-bottom: 17px;
    }
  }
  &__card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 410px;
    padding: 20px 24px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 36.04%,
      rgba(0, 0, 0, 0.56) 100%
    );
    @media screen and (min-width: 600px) {
      justify-content: flex-start;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.56) 0%,
        rgba(0, 0, 0, 0.08) 100%
      );
    }
  }
  &__cards-img {
    max-height: 410px;
    max-width: 608px;
  }
  &__eye-color,
  &__height,
  &__mass {
    font-family: $sec-font;
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    line-height: 180%;
    color: white;
  }
  &__age {
    margin-bottom: 16px;
    font-family: $base-font;
    font-style: 14px;
    color: white;
    line-height: 104%;
    font-weight: 400;
    opacity: 0.8;
  }
  &__name {
    font-family: $base-font;
    font-size: 24px;
    line-height: 148%;
    color: white;
    margin-bottom: 8px;
  }
  &__info-wrapper {
    display: flex;
  }
  &__info-wrapper > *:not(:last-child) {
    margin-right: 16px;
    @media screen and (min-width: 600px) {
      margin-right: 24px;
    }
  }
  .el-icon-arrow-down::before {
    position: absolute;
    content: "";
    width: 6px;
    height: 4px;
    background: url(../img/arrow.svg) center center;
    top: 6px;
    right: 0px;
  }
  .hidden-text {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Opera and Firefox */
  }
  #input-select,
  #input-number {
    padding: 7px;
    margin: 15px 5px 5px;
    width: 70px;
  }
  #showcase {
    margin: 0 20px;
    text-align: center;
  }
  #range {
    height: 300px;
    margin: 0 auto 30px;
  }
  #value-span,
  #value-input {
    width: 50%;
    float: left;
    display: block;
    text-align: center;
    margin: 0;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
  .noUi-handle:before,
  .noUi-handle:after {
    display: none;
  }
  .noUi-horizontal .noUi-handle {
    width: 10px;
    height: 10px;
    background: #ff634a;
    border-radius: 50%;
    border: none;
    box-shadow: none;
  }
  .noUi-base {
    cursor: pointer;
  }
  .noUi-connect {
    cursor: pointer;
    background: #ff634a;
  }
  .noUi-horizontal {
    height: 2px;
  }
  .noUi-target {
    border: none;
  }
  .noUi-handle,
  .noUi-handle-upper {
    cursor: pointer;
    outline: none;
  }
  .noUi-horizontal .noUi-handle {
    top: -5px;
  }
}
</style>
