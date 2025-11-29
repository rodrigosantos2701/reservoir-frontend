const API_BASE_URL =
  "http://k8s-flocores-flocores-5b11a9b2c5-fa4d464bdd057a5e.elb.us-east-1.amazonaws.com";

async function request<T>(input: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${input}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error (${res.status}): ${text}`);
  }

  return res.json() as Promise<T>;
}

export function get<T>(url: string) {
  return request<T>(url);
}

export function post<TReq, TRes>(url: string, body: TReq) {
  return request<TRes>(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
