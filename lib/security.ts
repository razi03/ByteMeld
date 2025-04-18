import CryptoJS from 'crypto-js';
import DOMPurify from 'dompurify';
import { jwtVerify, SignJWT } from 'jose';
import SecureStorage from 'secure-web-storage';

// Encryption key (should be stored in environment variables)
const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'your-secret-key';

// Secure storage implementation
export const secureStorage = new SecureStorage(localStorage, {
  hash: function hash(key: string) {
    key = CryptoJS.SHA256(key, SECRET_KEY);
    return key.toString();
  },
  encrypt: function encrypt(data: string) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
    return data;
  },
  decrypt: function decrypt(data: string) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return data;
  }
});

// Data encryption
export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

// Data decryption
export const decryptData = (encryptedData: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// HTML sanitization
export const sanitizeHtml = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });
};

// JWT token handling
export const createToken = async (payload: any): Promise<string> => {
  const secret = new TextEncoder().encode(SECRET_KEY);
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);
};

export const verifyToken = async (token: string): Promise<any> => {
  const secret = new TextEncoder().encode(SECRET_KEY);
  const { payload } = await jwtVerify(token, secret);
  return payload;
};

// Input validation
export const validateInput = (input: string): boolean => {
  // Remove any potentially dangerous characters
  const sanitized = input.replace(/[<>{}()]/g, '');
  return input === sanitized;
};

// File validation
export const validateFile = (file: File, allowedTypes: string[], maxSize: number): boolean => {
  const isValidType = allowedTypes.includes(file.type);
  const isValidSize = file.size <= maxSize;
  return isValidType && isValidSize;
};

// Anti-CSRF token
export const generateCSRFToken = (): string => {
  return CryptoJS.lib.WordArray.random(32).toString();
};

// Rate limiting
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

export const checkRateLimit = (key: string, limit: number, windowMs: number): boolean => {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record) {
    rateLimitStore.set(key, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > windowMs) {
    rateLimitStore.set(key, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  rateLimitStore.set(key, record);
  return true;
};

// Security headers
export const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "img-src 'self' https://images.unsplash.com data:; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://api.bytemeld.com; " +
    "frame-ancestors 'none'; " +
    "form-action 'self';",
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'X-Download-Options': 'noopen',
  'X-DNS-Prefetch-Control': 'off'
};

// Password strength checker
export const checkPasswordStrength = (password: string): boolean => {
  const minLength = 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar
  );
};

// Session management
export const sessionManager = {
  create: (data: any) => {
    const sessionId = CryptoJS.lib.WordArray.random(32).toString();
    secureStorage.setItem(sessionId, JSON.stringify(data));
    return sessionId;
  },
  get: (sessionId: string) => {
    const data = secureStorage.getItem(sessionId);
    return data ? JSON.parse(data) : null;
  },
  destroy: (sessionId: string) => {
    secureStorage.removeItem(sessionId);
  }
};

// URL sanitization
export const sanitizeUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    return parsed.toString();
  } catch {
    return '';
  }
};