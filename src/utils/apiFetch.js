

const apiFetch = async (query) => {
  const url = `http://localhost:5011/api/search?q=${query}`;

  try {
    const response = await fetch(url);
    console.log("Response status:", response.status); 

    const textResponse = await response.text();
    console.log("Raw response before JSON parsing:", textResponse);

    const data = JSON.parse(textResponse); 
    console.log("Parsed JSON data:", data); 

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};



export default apiFetch
