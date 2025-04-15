/**
 * OK.
 * 
 * @param {{}} data 
 * @returns {Response} Success 200 response.
 */
export function success200(data: {}) : Response {
  return new Response(
    JSON.stringify(data),
    { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    },
  )
}