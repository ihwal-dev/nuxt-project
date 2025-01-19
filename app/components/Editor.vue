<template>
<QuillEditor ref="myEditor" @update:content="upcontent" theme="snow" toolbar="full" />
<button @click="addPost">ADD POST</button>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue'


export default {
    components: {
        QuillEditor
    },
    setup() {
        const myEditor = ref(null);
        const content = ref(null)
        return { myEditor, content }
    },

    methods: {
        upcontent()
        {
            this.content = this.myEditor.getHTML();
        },

        async addPost() {
            const res = await fetch('api/add', {
                method: 'POST',
                body: new URLSearchParams(Object.entries({
                    content: this.content
                }))
            });

            console.log(res)
        }
    },

        
}
</script>
