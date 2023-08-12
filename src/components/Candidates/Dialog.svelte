<script lang="ts">
  import Dialog, { Actions } from '@smui/dialog';
  // import Button, { Label } from '@smui/button';
  import Input from './Input.svelte';
  import { candidates } from '../../store/candidates';
  import { openAddItemFlg } from '../../store/modal';

  export let open = false;

  // let inputValueRef;
  // let inputValue: never | string = '';
  let inputValue = '';

  openAddItemFlg.subscribe(() => {
    console.log('openAddItemFlg', $openAddItemFlg);
    open = $openAddItemFlg;
  });

  function addItem(event) {
    event.stopPropagation();

    if (event.keyCode === 13) {
      $candidates = [ ...$candidates, { k: decodeURI(inputValue), v: inputValue } ];
      $openAddItemFlg = false;
      inputValue = '';
    }
  }
</script>

<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <Actions on:click={event => event.stopPropagation() } on:keypress={addItem}>
      <input class='add-input' type="text" bind:value={inputValue} />
  </Actions>
</Dialog>

<style>
.add-input {
  width: 100%;
  height: 30px;
}
</style>