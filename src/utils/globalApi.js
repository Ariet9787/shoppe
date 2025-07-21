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
async function getFeaturedProduct() {
  try {
    const res = await fetch(
      `${publicApi}/products?populate=*&filters[isFeatured][$eq]=true&sort=createdAt:desc&pagination[limit]=1`
    );
    const data = await res.json();
    return data.data[0];
  } catch (e) {
    console.error(e);
  }
}
async function getProducts() {
  try {
    const res = await fetch(
      `${publicApi}/products?populate=*&pagination[limit]=6`
    );
    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
}
async function getProduct(id) {
  try {
    const res = await fetch(`${publicApi}/products/${id}?populate=*`);
    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
}
async function getTerms() {
  try {
    const res = await fetch(`${publicApi}/terms-of-service`);
    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
}
async function getPrivacy() {
  try {
    const res = await fetch(`${publicApi}/privacy-ploicy`);
    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
}
async function getShippingAndReturn() {
  try {
    const res = await fetch(`${publicApi}/shipping-and-return`);
    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
}
async function getTermsOfUse() {
  try {
    const res = await fetch(`${publicApi}/terms-of-use`);
    const data = await res.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
}
export {
  getShopInfo,
  getFeaturedProduct,
  getProducts,
  getProduct,
  getTerms,
  getPrivacy,
  getShippingAndReturn,
  getTermsOfUse,
};
