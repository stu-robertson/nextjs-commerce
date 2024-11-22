import { customApiFetch } from './custom-api-fetch.ts';

const testQuery = `
  query TestQuery {
    products {
      edges {
        node {
          title
          productClass {
            slug
          }
        }
      }
    }
  }
`;

async function testCustomApiFetch() {
    try {
        const result = await customApiFetch({
            query: testQuery,
        });

        // Log the result in detail
        console.log('Test Result:', JSON.stringify(result, null, 2));
    } catch (error) {
        // Catch and log all error details
        console.error('Caught Error:', error);

        // If the error is an object, inspect its structure
        if (typeof error === 'object') {
            console.error('Error Details:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error Message:', error.toString());
        }
    }
}

testCustomApiFetch();
