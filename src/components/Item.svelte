<script>
  export let food;
  export let show;

  import MapButton from './MapButton.svelte';
</script>

<div class="item">
  <span>{food}</span>

  <MapButton show={show} />
</div>

<style>
.item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  font-weight: 900;
}

.item>span {
  font-size: 10rem;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bolder;
  color: #dddddd;
}
</style>