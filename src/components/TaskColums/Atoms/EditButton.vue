<template>
  <div class="wrapper">
    <img src="@/assets/edit.svg" alt="" />
    <button>Edit</button>
  </div>
</template>

<script>
export default {
  name: "edit-button",
};
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: relative;

    width: 10px;
    height: auto;
  }
  button {
    position: relative;
    border: 0px;
    background-color: inherit;

    font-size: 12px;
  }
}
</style>
