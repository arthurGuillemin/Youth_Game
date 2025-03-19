import supabase from '../Config/supabase.js';


const EmojiGuessModel = {

  async getEmojiGuess() {
    const { data, error } = await supabase
      .from('emojiguess')
      .select('emojis, correct_answer');
    if (error) throw error;
    return data;
  },

  async getRandomGuess(limit = 10) {
    const { data, error } = await supabase
      .from('emojiguess')
      .select('*');
    if (error) throw error;
    const shuffled = data.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);
  }

}

export default EmojiGuessModel;