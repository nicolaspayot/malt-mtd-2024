<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script setup lang="ts">
import Markdown from "markdown-it";

const md = new Markdown();

const { data } = await useFetch("/api/readme");

const html = md.render(data.value!.content);
</script>
