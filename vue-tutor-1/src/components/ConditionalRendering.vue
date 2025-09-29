<template>
  <div>
    <div class="py-5 text-center">
      <h3 class="text-center font-bold mb-5 text-3xl text-teal-500">
        Conditional Rendering
      </h3>

      <h1 v-if="toggle">I am Sohan</h1>
      <h1 v-else>Nothing to say</h1>

      <button @click="toggle = !toggle" class="border p-3 mt-5 btn btn-primary">
        Toggle the name
      </button>
      <h3 class="text-center font-bold mb-5 text-3xl text-teal-500">
        section 2
      </h3>

      <h1 v-if="name === 'A'">This is A</h1>
      <h1 v-else-if="name === 'B'">This is B</h1>
      <h1 v-else-if="name === 'C'">This is C</h1>
      <h1 v-else-if="name === 'D'">This is D</h1>
      <h1 v-else-if="name === 'E'">This is E</h1>
      <h1 v-else>A,B,C,D,E</h1>

      <div class="mt-4">
        <button
          @click="changeName('B')"
          class="border p-3 mt-5 btn btn-primary me-3"
        >
          matching
        </button>
        <button
          @click="changeName('C')"
          class="border p-3 mt-5 btn btn-primary"
        >
          matching
        </button>
      </div>

      <h3 class="mt-5 text-center font-bold mb-5 text-3xl text-teal-500">
        New items Add and conditional randering
      </h3>

      <div id="Shopping Lists" class="flex justify-center bg-amber-100 p-5">
        <div class="shadow p-9 w-4xl bg-white text-left">
          <div class="header flex justify-between">
            <h2 class="text-black text-4xl mb-4">{{ heading || "Welcome" }}</h2>
            <div class="btn">
              <button
                v-if="editing"
                @click="doEdit(false)"
                class="bg-teal-500 px-3 py-2 text-white me-3"
              >
                Cancle
              </button>
              <button
                v-else
                @click="doEdit(true)"
                class="bg-teal-600 px-3 py-2 text-white"
              >
                Add New
              </button>
            </div>
          </div>

          <div v-if="editing" class="add-item-form">
            <input
              @keyup.enter="saveItem"
              class="shadow p-3"
              type="text"
              v-model="newItems"
              placeholder="Add New Items"
            />
            <label for="high" class="px-2">
              <input
                type="checkbox"
                v-model="setPriority"
                id="high"
                class="me-2"
              />High Priority
            </label>
            <button
              @click="saveItem"
              class="bg-indigo-600 px-4 py-2 text-white"
            >
              Add New
            </button>
          </div>

          <div class="item-lists">
            <ul>
              <!-- <li>{{ items.length === 0 ? "No items here" : items }}</li> -->
              <li v-for="item in items" :key="item.id">{{ item.label }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: true,
      name: "A",
      heading: "Shoping List",
      editing: true,
      newItems: "",
      setPriority: false,
      items: [
        { id: 0, label: "Items 0" },
        { id: 1, label: "Items 1" },
        { id: 2, label: "Items 2" },
        { id: 3, label: "Items 3" },
      ],
    };
  },

  methods: {
    changeName(value) {
      this.name = value;
    },

    saveItem() {
      this.items.push({ id: this.items.length + 1, label: this.newItems });
      this.newItems = "";
    },

    doEdit(boolan) {
      this.editing = boolan;
    },
  },
};
</script>
<style scoped>
h1 {
  color: blue;
  font-size: 20px;
}
</style>
