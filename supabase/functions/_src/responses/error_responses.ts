import { HttpMethod } from "../enums/http_method.ts";

export type ErrorResponse = {
  error: string
}

/**
 * Bad Request.
 * 
 * @param {string} error 
 * @returns {Response} Error 400 response.
 */
export function error400(error: string) : Response {
  return new Response(
    JSON.stringify(<ErrorResponse>{
      error: error,
    }),
    { 
      status: 400,
      headers: { "Content-Type": "application/json" },
    },
  )
}

/**
 * Method not allowed.
 * 
 * @param {HttpMethod} allowedMethod 
 * @returns {Response} Error 405 response.
 */
export function error405(allowedMethod: HttpMethod) : Response {
  return new Response(
    JSON.stringify(<ErrorResponse>{
      error: `Only ${allowedMethod} requests are allowed.`
    }),
    { 
      status: 405,
      headers: { "Content-Type": "application/json" },
    },
  )
}