import supabase from '../Config/supabase.js';

const euQuizmodel = {
  async getEuQuiz() {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('*')
    if (error) throw error
    return data
  },

  async getQuestionByCategoryExcludeCountry(category , difficulty) {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('*')
      .eq('category', category.charAt(0).toUpperCase() + category.slice(1)) // mettre la premiere lettre en maj
      .eq("difficulty" , difficulty)

    if (error) throw error;
    return data;
  },

  async getQuestionByDifficultyAndCategory(difficulty, category) {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('*')
      .eq("difficulty", difficulty)
      .eq('category', category.charAt(0).toUpperCase() + category.slice(1)); // Standardiser la casse
  
    if (error) throw error;
    return data;
},

  async getCategories() {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('category')
      .order('category', { ascending: true }); 
    if (error) throw error;
    const uniqueCategories = [...new Set(data.map(item => item.category))];
  
    return uniqueCategories;
  }
  

};


export default euQuizmodel;