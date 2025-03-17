const API_BASE_URL = "http://13.60.245.133:3000/users";

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Erreur lors de la création de l'utilisateur");

    return await response.json();
  } catch (error) {
    console.error("createUser:", error.message);
    return null;
  }
};

export const getUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`);

    if (!response.ok) throw new Error("Utilisateur introuvable");

    return await response.json();
  } catch (error) {
    console.error("getUser:", error.message);
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des utilisateurs");

    return await response.json();
  } catch (error) {
    console.error("getAllUsers:", error.message);
    return null;
  }
};

export const updateUser = async (userId, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!response.ok) throw new Error("Erreur lors de la mise à jour de l'utilisateur");

    return await response.json();
  } catch (error) {
    console.error("updateUser:", error.message);
    return null;
  }
};
