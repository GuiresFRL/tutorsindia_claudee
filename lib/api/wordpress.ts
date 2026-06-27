/**
 * WPGraphQL client — Phase 2 stub.
 * In Phase 2, replace WPGRAPHQL_URL env var and implement fetchGraphQL.
 * All data-fetching functions in this module will swap from static data
 * to live WP queries with zero changes to calling components.
 */

const WPGRAPHQL_URL = process.env.WPGRAPHQL_URL ?? "";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchGraphQL<T = any>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!WPGRAPHQL_URL) {
    throw new Error("WPGRAPHQL_URL is not set — still in Phase 1 static mode");
  }
  const res = await fetch(WPGRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`WPGraphQL error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

export const isWPConnected = () => Boolean(WPGRAPHQL_URL);
