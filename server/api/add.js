// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'


const config = useRuntimeConfig();
const supabase = createClient(config.url, config.key)

export default defineEventHandler(async (e) => {

    const body = await readBody(e);
    
    const content = body.content;
    const { err } = await supabase
      .from('post')
      .insert({
        hash: Math.random() + '' + Math.floor(Math.random() * 10),
        title: Math.random() + '' + Math.floor(Math.random() * 10),
        content: content
      })
  
    if (err) {
      throw new Error(error.message)
    }
  
    return 'Success'
  })
  