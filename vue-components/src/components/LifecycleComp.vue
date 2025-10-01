<template>
  <div>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "LifecycleComp",
  data() {
    return {
      text: "",
    };
  },
  //   beforeCreate() {
  //     this.text = "this is initial text";
  //     console.log("beforeCreate: The component is not created yet.");
  //   },
  //   created() {
  //     this.text = "this is initial text";
  //     console.log("created: The component just got created.");
  //   },
  beforeMount() {
    this.text = "this is initial text";
    console.log("This is before Mount");
  },
//   mounted() {
//     alert("THis is mounted");
//   },
};
</script>

<style scoped></style>
