<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navigation</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link">
            <router-link to="/list">List movies</router-link>
          </a>
          <a class="nav-link">
            <router-link
              :to="{ name: 'TableMovies', params: { name: 'table' } }"
            >
              Table movies
            </router-link>
          </a>
          <a class="nav-link">
            <router-link
              :to="{ name: 'ContactPage', params: { support: 'support' } }"
            >
              Contact
            </router-link>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
