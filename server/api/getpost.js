// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'


const config = useRuntimeConfig();
const supabase = createClient(config.url, config.key)

export default defineEventHandler(async (e) => {

    const { data, err } = await supabase
      .from('post').select();
  
    if (err) {
      throw new Error(error.message)
    }
  
    return data
  })
  