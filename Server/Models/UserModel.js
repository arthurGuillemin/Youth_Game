import  supabase from '../Config/supabase.js'

const UserModel = {

  async createUser({ username, email, country }) {
    const { data, error } = await supabase
      .from('users')
      .insert([{ username, email, country }]);
    if (error) throw error;
    return data[0];
  },

  async getUserById(id) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async getAllUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*');
    if (error) throw error;
    return data;
  },

  async updateUser(id, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id);
    if (error) throw error;
    return { message: 'User updated' };
  },
};

export default UserModel;