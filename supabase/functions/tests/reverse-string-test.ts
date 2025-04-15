import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts"

import { ErrorResponse } from "../_src/responses/error_responses.ts"
import { ReverseStringResponse } from "../reverse-string/index.ts"

const BASE_URL: string = `${Deno.env.get('SUPABASE_URL')}/functions/v1`
const ANON_KEY: string | undefined = Deno.env.get('SUPABASE_ANON_KEY')
const DEFAULT_HEADERS = {
  Authorization: `Bearer ${ANON_KEY}`,
}
const PATH: string = `${BASE_URL}/reverse-string`

Deno.test('Valid input will return reversed string', async () => {
  const res: Response = await fetch(
    `${PATH}?text=sample`,
    {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    }
  );

  const data: ReverseStringResponse = await res.json();

  assertEquals(res.status, 200)
  assertEquals(data.original, 'sample')
  assertEquals(data.reversed, 'elpmas')
})

Deno.test('No [text] param will return error 400', async () => {
  const res: Response = await fetch(
    PATH,
    {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    }
  );

  const data: ErrorResponse = await res.json();

  assertEquals(res.status, 400)
  assertEquals(data.error, '[text] param is required.')
})

Deno.test('Invalid param will return error 400', async () => {
  const res: Response = await fetch(
    `${PATH}?teeeext=sample`,
    {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    }
  );

  const data: ErrorResponse = await res.json();

  assertEquals(res.status, 400)
  assertEquals(data.error, '[text] param is required.')
})

Deno.test('Invalid method will return error 405', async () => {
  const res: Response = await fetch(
    `${PATH}?text=sample`,
    {
      method: 'POST',
      headers: DEFAULT_HEADERS,
    }
  );

  const data: ErrorResponse = await res.json();

  assertEquals(res.status, 405)
  assertEquals(data.error, 'Only GET requests are allowed.')
})