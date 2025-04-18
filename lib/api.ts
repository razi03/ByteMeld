import { securityHeaders, checkRateLimit, generateCSRFToken } from './security';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      if (!checkRateLimit(endpoint, 100, 60000)) {
        throw new ApiError(429, 'Too many requests');
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        credentials: 'include',
        headers: {
          ...securityHeaders,
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': generateCSRFToken()
        }
      });
      
      if (!response.ok) {
        throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new ApiError(500, 'Invalid response type');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Network error occurred');
    }
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      if (!checkRateLimit(endpoint, 50, 60000)) {
        throw new ApiError(429, 'Too many requests');
      }

      const csrfToken = generateCSRFToken();

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          ...securityHeaders,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new ApiError(500, 'Invalid response type');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Network error occurred');
    }
  }
};