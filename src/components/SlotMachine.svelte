<script lang="ts">
  import { onMount } from "svelte";
  import Item from './Item.svelte';

  let show = false;
  let foods: string[] = [
    "자장면",
    "돈가스",
    "피자",
    "햄버거",
    "스파게티",
    "냉모밀",
    "부대찌게",
    "칼국수",
    "스테이크",
    "초밥"
  ];
  const initialValue = `오늘 뭐 먹지?`;
  let boxRef: HTMLElement;
  const itemHeight: number = document.body.clientHeight;
  let flg: boolean = false;

  onMount(() => {
    console.log("### mounted");
  });

  function init() {
    boxRef.style.transitionDuration = `0s`;
    boxRef.style.transform = `translateY(-${itemHeight * (foods.length - 1)}px)`;

    foods = shuffle(foods);

      // Initialize transition events
      boxRef.addEventListener("transitionstart", function() {
        show = false;

        document.querySelectorAll('.item').forEach((item: HTMLElement) => (item.style.filter = 'blur(1px)'));
        boxRef.removeEventListener("click", roll);
      }, {
        once: true
      });
      boxRef.addEventListener("transitionend", function() {
        document.querySelectorAll('.item').forEach((item: HTMLElement) => (item.style.filter = 'blur(0)'));
        boxRef.addEventListener("click", roll);

        setTimeout(() => {
          show = true;
        }, 300);
      }, {
        once: true
      });
    }

    function shuffle([...arr]) {
      let m: number = arr.length;
      while (m) {
        const i: number = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    }

    function roll() {
      init();

      flg = true;

      setTimeout(function() {
        boxRef.style.transitionDuration = `2s`;
        boxRef.style.transform = `translateY(0)`;
      }, 100);
    }
</script>

<div class="app">
  <div class="container">
    <div class="box" bind:this={boxRef} on:click={roll}>
      {#if !flg}
        <Item food={initialValue} show={show} />
      {:else}
        {#each foods as item, index}
          <Item food={item} show={show} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 1s ease-in-out;
}
</style>