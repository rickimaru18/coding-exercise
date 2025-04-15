import { HttpMethod } from "../_src/enums/http_method.ts"
import { reverseString } from "../_src/utils/string_utils.ts"
import { error400, error405 } from "../_src/responses/error_responses.ts"
import { success200 } from "../_src/responses/success_responses.ts"

export type ReverseStringResponse = {
  original: string,
  reversed: string
}

Deno.serve((req: Request) : Response => {
  if (req.method !== HttpMethod.GET) {
    return error405(HttpMethod.GET)
  }

  const url: URL = new URL(req.url)
  const textParam: string | null = url.searchParams.get('text')

  if (textParam === null) {
    return error400('[text] param is required.')
  }

  return success200(<ReverseStringResponse>{
    original: textParam,
    reversed: reverseString(textParam!)
  })
})