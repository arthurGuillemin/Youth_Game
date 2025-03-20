import  supabase from '../Config/supabase.js'

const rewardsModel = {
  async getRewards() {
    const { data, error } = await supabase
      .from('rewards')
      .select('title' , 'id');
    if (error) throw error;
    return data;
  }, 
  async getRewardsInfos(id){
    const { data, error } = await supabase
      .from('rewards')
      .select('title' , 'description' , 'code')
      .eq('id', id)
    if (error) throw error;
    return data;
  },
}

export default rewardsModel;