<template>
  <div class="gauntlet-header">
    <router-link class="previous" :to="{ name: 'gauntlet-overview', params: { username: $route.params.username } }">
      back to listings
    </router-link>
    <div class="sprite">
      <div :class="spriteClass"></div>
    </div>
    <div class="win-loss">Wins: {{ wins }}, Losses: {{ losses }}</div>
    <div class="status">
      <span :class="['circle', gauntlet.isActive ? 'active' : 'complete']"></span>
      {{ status }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['gauntlet'],

    computed: {
      wins () {
        if (this.gauntlet.matches) return this.gauntlet.matches.filter(match => match.isWinner).length
      },

      losses () {
        if (this.gauntlet.matches) return this.gauntlet.matches.filter(match => !match.isWinner).length
      },

      status () {
        return this.gauntlet.isActive ? 'In progress' : 'Completed'
      },

      spriteClass () {
        return `sprite general-lg general-sprite general-hex_${this.gauntlet.generalId}-lg`
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .gauntlet-header {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;

    .previous {
      position: absolute;
      top: 0;
      left: 0;
    }

    > .sprite {
      margin: 0 auto;

      > .sprite {
        position: relative;
      }
    }

    > .win-loss {
      text-align: center;
      font-size: 3rem;
    }

    > .status {
      position: absolute;
      top: 0;
      right: 0;

      > .circle {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        display: inline-block;
      }

      > .active {
        background: $color-red;
      }

      > .complete {
        background: $color-green;
      }
    }
  }
</style>