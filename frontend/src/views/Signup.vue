<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" xs="12" sm="8" md="6" lg="6" xl="3">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" @submit.prevent="signUp" @keydown.prevent.enter>
              <v-text-field
                label="Display Name"
                v-model="user.displayName"
                :rules="notEmptyRules"
                prepend-icon="mdi-label"
                type="text"
                required
              />
              <v-text-field
                v-model="user.email"
                label="E-mail"
                :rules="notEmptyRules"
                prepend-icon="mdi-account"
                type="text"
                required
              />

              <v-text-field
                v-model="user.password"
                label="Password"
                :rules="notEmptyRules"
                prepend-icon="mdi-lock"
                type="password"
                required
              />
              <v-text-field
                v-model="user.confirmPassword"
                label="Verify Password"
                :rules="confirmPasswordRules || notEmptyRules"
                prepend-icon="mdi-lock"
                type="password"
                required
              />
              <v-card-actions>
                <v-spacer />
                <v-btn type="submit" :disabled="!valid" color="primary">Signup</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import { notEmptyRules } from '../rules/validators';

export default {
  name: 'signup',
  data: vm => ({
    valid: false,
    user: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    notEmptyRules,
    confirmPasswordRules: [
      confirmPassword => confirmPassword === vm.user.password || 'Password must match.',
    ],
  }),
  methods: {
    signUp() {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api;
        console.log(User);
        const user = new User(this.user);
        user.save().then(() => {
          this.$router.push('/login');
        });
      }
    },
  },
};
</script>
