<template>
  <div :class="['drawer-deck', { closed }]">
    <span :class="['button', 'button-toggle', { 'left': closed }]" @click="$store.dispatch('app/toggleProperty', 'drawerOpen')" data-tooltip="Toggle deck list" data-position="left middle"></span>
    <div class="scroll-container" v-scroll>
      <deck-list />
    </div>
    <div class="btn-group">
      <download-button />
      <import-export-button />
      <deck-options />
      <button class="btn clear-deck" @click="$store.dispatch('cardList/resetAll')"><i class="icon icon-clear-deck"></i> Clear</button>
    </div>
  </div>
</template>

<script>
import DeckList from 'components/DeckList';
import DeckOptions from 'components/DeckOptions';
import DownloadButton from 'components/DownloadButton';
import ImportExportButton from 'components/ImportExportButton';

export default {
  computed: {
    closed() {
      return !this.$store.state.app.drawerOpen;
    }
  },

  components: {
    DeckList,
    DeckOptions,
    DownloadButton,
    ImportExportButton
  }
};
</script>

<style lang="sass">
  @import '../css/includes';

  .drawer-deck {
    width: $width-drawer-deck;
    position: fixed;
    right: 0;
    top: 48px;
    bottom: 0;
    margin-right: 5px;
    height: calc(100vh - 48px);
    transition: $all-fast;
    background: $blue-dark;
    z-index: $z-drawer-deck;

    &.closed {
      transform: translateX(315px);
    }

    > .scroll-container {
      height: calc(100% - 48px);
      margin-left: -18px;
      border-left: 2px solid $blue;
    }

    > .button-toggle {
      position: absolute;
      left: -25px;
      top: 4px;
      cursor: pointer;
      background: $blue;
      z-index: $z-deck-toggle;

      &::after {
        @include font-icon($icon-chevron-right);
      }

      &.left::after {
        @include font-icon($icon-chevron-left);
      }
    }
  }

  .btn-group {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 44px;
    background: $blue-dark;
    z-index: $z-btn-group;
    display: flex;
    align-items: center;
    border-top: 1px solid $dark;

    > .button {
      background: $blue;
      padding: 6px;
      font-size: 1.2rem;
      cursor: pointer;
      margin-right: 10px;
      height: 37px;

      &:hover {
        background: lighten($blue, 10%);
      }
    }
  }

  .clear-deck {
    border: 1px solid #1c1e22;
    border-radius: 4px;
    background: #2e3136;
    height: 32px;
    cursor: pointer;
    margin-left: auto;

    &:focus, &:hover {
      outline: none;
    }
  }
</style>
