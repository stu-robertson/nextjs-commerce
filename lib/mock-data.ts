// lib/mockData.ts

export const mockProductData = {
    featuredImage: {
        url: '/placeholder-image.png', // Path to a placeholder image in your public directory
    },
    priceRange: {
        maxVariantPrice: {
            amount: '0.00',
            currencyCode: 'USD',
        },
    },
    handle: 'mock-product', // This can be a generic handle or dynamically generated if needed
};

export const mockCollectionProducts = [
    { ...mockProductData, title: 'Mock Product 1', slug: 'mock-product-1' },
    { ...mockProductData, title: 'Mock Product 2', slug: 'mock-product-2' },
    { ...mockProductData, title: 'Mock Product 3', slug: 'mock-product-3' },
];