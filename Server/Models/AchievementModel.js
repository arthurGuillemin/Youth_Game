import supabase from '../Config/supabase.js';

const AchievementModel = {
  
  async createAchievement({ user_id, achievement_name }) {
    const { data, error } = await supabase
      .from('achievements')
      .insert([{ user_id, achievement_name }]);

    if (error) throw error;
    return data[0];
  },

  async getAchievementsByUser(user_id) {
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .eq('user_id', user_id);

    if (error) throw error;
    return data;
  },

  async getAllAchievements() {
    const { data, error } = await supabase
      .from('achievements')
      .select('*');

    if (error) throw error;
    return data;
  },

  async deleteAchievement(id) {
    const { error } = await supabase
      .from('achievements')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { message: 'Achievement deleted' };
  }
};

export default AchievementModel;
