const API_BASE_URL = "http://13.60.245.133:3000/images";

export const getImageUrl = async (filename) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${filename}`);
    if (!response.ok) throw new Error("Erreur lors de la récupération de l'image");

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error("getImageUrl:", error.message);
    return null;
  }
};
