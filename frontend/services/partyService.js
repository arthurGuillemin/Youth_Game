const API_BASE_URL = "http://13.60.245.133:3000/parties";

export const createParty = async (partyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partyData),
    });

    if (!response.ok) throw new Error("Erreur lors de la création de la partie");

    return await response.json();
  } catch (error) {
    console.error("createParty:", error.message);
    return null;
  }
};

export const getAllParties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des parties");

    return await response.json();
  } catch (error) {
    console.error("getAllParties:", error.message);
    return null;
  }
};

export const getPartyById = async (partyId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${partyId}`);

    if (!response.ok) throw new Error("Partie introuvable");

    return await response.json();
  } catch (error) {
    console.error("getPartyById:", error.message);
    return null;
  }
};

export const addUserToParty = async (partyId, userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${partyId}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    });

    if (!response.ok) throw new Error("Erreur lors de l'ajout de l'utilisateur à la partie");

    return await response.json();
  } catch (error) {
    console.error("addUserToParty:", error.message);
    return null;
  }
};

export const removeUserFromParty = async (partyId, userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${partyId}/remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    });

    if (!response.ok) throw new Error("Erreur lors de la suppression de l'utilisateur de la partie");

    return await response.json();
  } catch (error) {
    console.error("removeUserFromParty:", error.message);
    return null;
  }
};
