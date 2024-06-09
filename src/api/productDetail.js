const BASE_URL = 'http://127.0.0.1:8000/api/admin/product/';

export const fetchProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};