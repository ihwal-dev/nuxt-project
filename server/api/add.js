export default defineEventHandler(async (e) => {
    const supabase = useSupabaseClient()
    const { res, error } = await supabase.from('user').insert(
        {
            id: '',
            username: Math.random() + '' + Math.floor() * 10,
            password: 'aa114477',
            usertoken: Math.random() + '' + Math.floor() * 100
        }
    )

    return res;

})