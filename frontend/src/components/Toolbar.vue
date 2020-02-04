<template>
  <div class="d-flex flex-grow-1">
    <v-toolbar-title class="tertiary--text font-weight-light">
      <slot />
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-flex align-center layout py-2>
        <v-btn
          slot="activator"
          class="toolbar-items"
          color="tertiary"
          icon
          text
          @click="toggleLocale({ $i18n, $FeathersVuex })"
        >{{ $i18n.locale }}</v-btn>

        <v-btn
          slot="activator"
          class="toolbar-items"
          color="tertiary"
          icon
          text
          @click="$router.push('/logout')"
        >
          <v-icon color="tertiary">mdi-logout</v-icon>
        </v-btn>
      </v-flex>
    </v-toolbar-items>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "toolbar",
  props: {
    tabs: Array,
  },

  data: () => ({
    langs: ['en', 'fr'],
  }),
  }

  methods: {
  ...mapActions('app', ['toggleLocale']),
  },

};
</script>

<style scoped>
#core-toolbar a {
  text-decoration: none;
}
</style>
