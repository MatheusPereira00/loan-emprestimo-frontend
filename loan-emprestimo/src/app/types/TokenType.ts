export interface DecodedToken {
  exp: number;
  iat: number;
  role: string;
  sub: string;
}

export interface DecodedTokenComplete {
  decodedToken: DecodedToken | null;
  expirationDate: Date | null;
  isExpired: boolean;
}