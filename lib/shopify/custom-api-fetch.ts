// lib/shopify/custom-api-fetch.ts

import { OSCAR_GRAPHQL_API_ENDPOINT, CUSTOM_API_ACCESS_TOKEN } from 'lib/constants'; // Define these in your constants file

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function customApiFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<{ status: number; body: T }> {
  const OSCAR_GRAPHQL_API_ENDPOINT = 'http://127.0.0.1:8000/graphql/'; // Replace with your actual endpoint

  // Debugging: Log the request details
  console.log('Sending request to:', OSCAR_GRAPHQL_API_ENDPOINT);
  console.log('Query:', query);

  if (variables) {
    console.log('Variables:', JSON.stringify(variables, null, 2));
  }

  try {
    const response = await fetch(OSCAR_GRAPHQL_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer YOUR_API_KEY`, // Replace with actual API key
      },
      body: JSON.stringify({ query, variables }),
    });

    const body = await response.json();

    // Debugging: Log the response body
    console.log('Response Body:', JSON.stringify(body, null, 2));

    if (body.errors) {
      throw new Error(JSON.stringify(body.errors, null, 2));
    }

    return { status: response.status, body };
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }
}