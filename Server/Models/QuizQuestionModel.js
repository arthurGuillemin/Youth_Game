const supabase = require('../Config/supabase');

const QuizQuestionModel = {
  async createQuestion({ game_id, question_text, answer_options, correct_answer }) {
    const { data, error } = await supabase
      .from('quiz_questions')
      .insert([{ game_id, question_text, answer_options, correct_answer }]);
    if (error) throw error;
    return { message: 'Question created' };
  },

  async getAllQuestions() {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*');
    if (error) throw error;
    return data;
  },

  async getQuestionById(id) {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async updateQuestion(id, updates) {
    const { data, error } = await supabase
      .from('quiz_questions')
      .update(updates)
      .eq('id', id);
    if (error) throw error;
    return { message: 'Question updated' };
  },

  async deleteQuestion(id) {
    const { error } = await supabase
      .from('quiz_questions')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return { message: 'Question deleted' };
  },

  async getRandomQuestions(limit = 10) {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*');
    if (error) throw error;
    const shuffled = data.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);
  }
};

module.exports = QuizQuestionModel;
