const PUBLIC_API = process.env.PUBLIC_API;

async function getLogo() {
  try {
    const response = await fetch(`${PUBLIC_API}/shop-info?populate=logo`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching logo:", error);
    return null;
  }
}

export { getLogo };
