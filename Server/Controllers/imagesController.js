import supabase from "../Config/supabase.js";

const ImageController = {
  async getImageUrl(req, res) {
    try {
      const { filename } = req.params;

      // Récupérer l'URL publique de l'image
      const { data } = supabase.storage.from("images").getPublicUrl(filename);

      if (!data) {
        return res.status(404).json({ error: "Image introuvable" });
      }

      res.json({ url: data.publicUrl });
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de l'image" });
    }
  },
};

export default ImageController;
