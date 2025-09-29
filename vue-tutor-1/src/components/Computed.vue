<template>
  <div>
    <h1>Example: Computed Property 'yes' or 'no'</h1>
    <p>
      In this example we give the user feedback 'yes' or 'no' when the checkbox
      is toggled. Feedback 'yes' or 'no' fits better with our everyday language
      than 'true' or 'false', and we use a computed property in this example to
      achieve this.
    </p>

    <form>
      <p>
        Important item?
        <label>
          <input type="checkbox" v-model="chbxVal" />
          {{ isImportant }}
        </label>
      </p>
    </form>

    <h4 class="text-center font-bold mb-5 text-3xl text-indigo-500">
      Modules vs Computed
    </h4>

    <div class="book-lists">
      <h1>{{ books }}</h1>

      <button
        @click="addbook"
        class="bg-indigo-500 text-2xl text-white p-3 my-5"
      >
        Add New Books
      </button>

      <ul>
        <li>{{ bookslist() }}</li>
        <li>{{ bookslist() }}</li>
        <li>{{ bookslist() }}</li>
      </ul>
      <h4 class="text-teal-400">Computed</h4>
      <ul>
        <li>{{ comBooksList }}</li>
        <li>{{ comBooksList }}</li>
        <li>{{ comBooksList }}</li>
      </ul>
    </div>
    <h4 class="text-center font-bold mb-5 text-3xl text-indigo-500">
      Css and Style bindling
    </h4>

    <h2 :class="classObject" class="text-xl">Css binding</h2>

    <div class="flex mt-5">
      <button
        @click="btnChange"
        class="bg-green-500 p-3 text-white me-4 hover:bg-green-900"
      >
        change style
      </button>
      <button
        @click="btnErrorChange"
        class="bg-red-500 p-3 text-white hover:bg-red-900"
      >
        change style
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chbxVal: false,
      books: [
        { id: 1, name: "books1" },
        { id: 2, name: "books2" },
        { id: 3, name: "books3" },
        { id: 4, name: "books4" },
        { id: 5, name: "books5" },
      ],

      isActive: true,
      error: null,
    };
  },

  computed: {
    isImportant() {
      if (this.chbxVal) {
        return "yes";
      } else {
        return "no ";
      }
    },
    comBooksList() {
      console.log("computed bookslist called");
      return this.books.length % 2 === 0 ? "even" : "odd";
    },

    classObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type == "fatal",
      };
    },
  },

  methods: {
    bookslist() {
      console.log("Methods bookslist called");
      return this.books.length % 2 === 0 ? "even" : "odd";
    },

    addbook() {
      this.books.push({ id: 0, name: "new Book" });
    },

    btnErrorChange() {
      this.isActive = false;
      this.error = {
        type: "fatal",
      };
    },
    btnChange() {
      this.isActive = true;
      this.error = null;
    },
  },
};
</script>
<style scoped>
.active {
  color: greenyellow;
}

.text-danger {
  color: red;
}
</style>
