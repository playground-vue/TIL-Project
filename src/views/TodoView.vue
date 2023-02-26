<script setup lang="ts">
import { ref } from 'vue';
import CardAddBox from '@/components/cardAddBox/CardAddBox.vue';
import CardNote from '@/components/cardNote/CardNote.vue';
import type { Props as CardNoteProps } from '@/components/cardNote/uses';

const noteItems = window.localStorage.getItem('card-notes');
const storedNotes = ref<CardNoteProps[]>(noteItems ? JSON.parse(noteItems) : []);

const addNote = (newNote: CardNoteProps) => {
  const newNoteItems = [newNote, ...storedNotes.value];

  storedNotes.value = newNoteItems;
  window.localStorage.setItem('card-notes', JSON.stringify(newNoteItems));
};

const deleteNote = (id: number) => {
  const target = storedNotes.value.findIndex((note) => note.id === id);
  storedNotes.value.splice(target, 1);
  window.localStorage.setItem('card-notes', JSON.stringify(storedNotes.value));
};
</script>
<template>
  <div class="todo-view">
    <card-add-box @add-note="addNote" />
    <card-note
      v-for="(note) in storedNotes"
      :id="note.id"
      :key="note.id"
      :title="note.title"
      :content="note.content"
      :date="note.date"
      @delete-note="deleteNote"
    />
  </div>
</template>

<style scoped>
.todo-view {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fill, 250px);
  height: calc(100vh - 94px - 30px - 56px);
  overflow-y: auto;
}
</style>
