const publicApi = process.env.PUBLIC_API;

async function getShopInfo() {
  try {
    const res = await fetch(`${publicApi}/shop-info?populate=logo`);
    const data = await res.json();

    return data.data;
  } catch (e) {
    console.log(e);
  }
}
export { getShopInfo };
