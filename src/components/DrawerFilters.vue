<template>
  <div class="drawer-filters">
    <label class="label">FILTERS</label>
    <filter-faction />
    <filter-mana />
    <filter-rarity />
    <filter-tribe />
    <filter-type />
    <filter-clear />
  </div>
</template>

<script>
  import FilterType from 'components/FilterType'
  import FilterRarity from 'components/FilterRarity'
  import FilterFaction from 'components/FilterFaction'
  import FilterMana from 'components/FilterMana'
  import FilterTribe from 'components/FilterTribe'
  import FilterClear from 'components/FilterClear'

  export default {
    components: {
      FilterType,
      FilterRarity,
      FilterFaction,
      FilterMana,
      FilterTribe,
      FilterClear,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .drawer-filters {
    width: $width-drawer-filter;
    position: fixed;
    left: 0;
    top: 48px;
    bottom: 0;
    margin-right: 20px;
    height: calc(100vh - 48px);
    transition: $all-fast;
    z-index: $z-drawer-filters;

    > .label {
     font-size: .8rem;
     display: block;
     text-align: center;
     padding-top: 3px;
     border-bottom: 1px solid $blue;
    }
  }

  .clear-filters {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
