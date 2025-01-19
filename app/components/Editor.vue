<template>
<QuillEditor ref="myEditor" @update:content="upcontent" theme="snow" toolbar="full" />
<button>ADD POST</button>
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
        const myEditor = ref(null)
        return { myEditor }
    },

    methods: {
        upcontent()
        {
            console.log(this.myEditor.getHTML())
        }
    },

        
}
</script>
