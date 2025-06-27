import PortfolioFinder from "../../backend/apis/PortfolioFinder";

export const addToPortfolio = async (cardId, quantity) => {
 
  try {
    const response = await PortfolioFinder.post('/', {
      product_id: cardId,
      qty: quantity
    });
    return response.data
  } catch(error) {
    console.error("Error adding to portfolio", error.message)
    throw error;
  }
};

export const getPortfolio = async () => {
  try {
    const response = await PortfolioFinder.get('/');
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio:", error.message);
    throw error;
  }
};