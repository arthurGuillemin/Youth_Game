import supabase from '../Config/supabase.js';

const euQuizmodel = {
  async getEuQuiz() {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('*')
    if (error) throw error
    return data
  },

  async getQuestionByCategoryExcludeCountry(category, country , difficulty) {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('*')
      .eq('category', category.charAt(0).toUpperCase() + category.slice(1)) // mettre la premiere lettre en maj
      .eq("difficulty" , difficulty)
      .neq('countryAbout', country);

    if (error) throw error;
    return data;
  },

  async getQuestionByNationDifficulty(nation, difficulty, category) {
    const { data, error } = await supabase
      .from('euquizquestions')
      .select('*')
      .eq('countryAbout', nation)
      .eq("difficulty", difficulty)
      .eq('category', category.charAt(0).toUpperCase() + category.slice(1)); // Standardiser la casse
  
    if (error) throw error;
    return data;
  },
  

};


export default euQuizmodel;