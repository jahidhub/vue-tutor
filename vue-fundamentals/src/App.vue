<template>
  <h1>Hello {{ name }} {{ project }}</h1>
  <h2 v-text="learn"></h2>
  <h3 v-html="htmlType"></h3>
  <div v-bind:id="setId">Heading</div>
  <button v-bind:disabled="isDisable">Bind Disable</button>
  <h1 v-bind:class="hColor1">Heading color</h1>
  <h2 v-bind:class="isStatus && hColor2">
    when Status is true then color showing.
  </h2>

  <div class="bg-color text-white">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut eius
    recusandae nostrum minima. Repudiandae, quas! Cupiditate quibusdam quisquam
    tenetur culpa.
  </div>

  <h2
    v-bind:style="{
      color: red,
      fontSize: '50px',
      backgroundColor: '#fff',
      padding: '50px',
    }"
  >
    Style inline
  </h2>
  <h2 v-bind:style="objectStyle">Style Object Type</h2>
  <h2 v-bind:style="[objectStyleArray1, objectStyleArray2]">
    Style Object Type
  </h2>

  <h2 v-for="(course, index) in courses" :key="course">
    {{ index }} {{ course }}
  </h2>

  <h2 v-for="name in fullNames" :key="name.first">
    {{ name.first }} {{ name.last }}
  </h2>

  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <p v-for="movie in actor.movies" :key="movie">
      {{ movie }}
    </p>
  </div>

  <h2 v-for="(info, key, index) in myinfo" :key="info">
    {{ index }} {{ key }} = {{ info }}
  </h2>

  <template v-for="note in notes" :key="note">
    <h2 v-if="note === 'vue'">{{ note }}</h2>
  </template>

  <h1>{{ count1 }}</h1>
  <button v-on:click="count1 += 1">Inc</button>
  <button v-on:click="count1 -= 1">dec</button>

  <hr />

  <h2>{{ count2 }}</h2>
  <button v-on:click="increment(5)">Inc</button>
  <button v-on:click="decrement(5)">dec</button>

  <hr />

  <h2>{{ name }}</h2>
  <button @click="changeName">Click here to change name</button>
  <hr />
  <h2>volume (0-20)</h2>
  <h3>current volume: {{ countVolume }}</h3>
  <button @click="countVolume -= 1">Decress</button>
  <button @click="countVolume += 1">Incress</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Sohan",
      project: "Vue",
      learn: "Powerfully",
      htmlType: "<b>Hopefully</b>",
      setId: "heading",
      isDisable: true,
      isStatus: true,
      hColor1: "heading1",
      hColor2: "heading2",
      red: "red",
      objectStyle: {
        color: "red",
        fontSize: "50px",
        backgroundColor: "#fff",
        padding: "50px",
      },
      objectStyleArray1: {
        color: "white",
        fontSize: "50px",
        backgroundColor: "green",
        padding: "50px",
      },
      objectStyleArray2: {
        "text-transform": "uppercase",
      },
      courses: ["vue", "php", "java", "c++", "python"],
      notes: ["vue", "php", "java", "c++"],
      fullNames: [
        { first: "sohan", last: "mirza" },
        { first: "Jahid", last: "Hassan" },
        { first: "Jahid", last: "Sohan" },
      ],

      actors: [
        {
          name: "jeet",
          movies: ["songee", "awara"],
        },

        {
          name: "sakib khan",
          movies: ["borabad", "tandob"],
        },
        {
          name: "Dev",
          movies: ["dui pretibi", "animal"],
        },
      ],

      myinfo: {
        name: "Sohan",
        fatherName: "Kasham",
        motherName: "Taslima Bagum",
      },

      count1: 0,
      count2: 10,
      countVolume: 0,
    };
  },
  methods: {
    increment(num) {
      this.count2 += num;
    },
    decrement(num) {
      this.count2 -= num;
    },

    changeName(event) {
      this.name = "Jahid Hassan";
      console.log("Event", event);
    },
  },
  computed: {
    totals() {
      return;
    },
  },

  watch: {
    countVolume(newVolume, oldVolume) {
      if (newVolume > oldVolume && newVolume === 15) {
        alert(
          "Listening to a hight  volume for a long time may damage  your hearing"
        );
      }
    },
  },
};
</script>

<style>
.bg-color {
  background-color: olivedrab;
}

.text-white {
  color: #fff;
}

.heading1 {
  color: aqua;
}
.heading2 {
  color: gold;
}
</style>
