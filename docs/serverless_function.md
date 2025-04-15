## Serverless functions

In Supabase, we have the ability to create `Edge Functions`.

`Edge Functions` are server-side TypeScript functions, that we can distribute globally.

For more info, please refer to [Supabase's docs](https://supabase.com/docs/guides/functions).

### Create
---
Creating an `Edge Function` is pretty simple. All we need to do is run the command `supabase functions new <function-name>`.

e.g.

    supabase functions new reverse-string

This will create the directory `reverse-string` containing 3 files.

    └── supabase
        └── functions
            └── reverse-string
                └── .npmrc
                └── deno.json
                └── index.ts

After creation, it will be registered to `config.toml`.

    # config.toml

    ...

    [functions.reverse-string]
    enabled = true
    verify_jwt = true
    import_map = "./functions/reverse-string/deno.json"
    # Uncomment to specify a custom file path to the entrypoint.
    # Supported file extensions are: .ts, .js, .mjs, .jsx, .tsx
    entrypoint = "./functions/reverse-string/index.ts"
    # Specifies static files to be bundled with the function. Supports glob patterns.
    # For example, if you want to serve static HTML pages in your function:
    # static_files = [ "./functions/reverse-string/*.html" ]


### Add tests
---
It's always better to test every `Edge Function` created or modified. To do this, we just need to create a `test` folder under `functions`, then name the test file `<function-name>-test.ts`.

For more info, please refer to [Supabase's test guide](https://supabase.com/docs/guides/functions/unit-test)

e.g.

    └── supabase
        ├── functions
        │   ├── reverse-string
        │   │   └── index.ts
        │   └── tests
        │       └── reverse-string-test.ts
        └── config.toml

After adding our tests, we can run it using the command `deno test --allow-all <function-name>-test.ts`.

e.g.

    deno test --allow-all supabase/functions/tests/reverse-string-test.ts


### Run locally (a.k.a. Serve)
---
To check if our `Edge Function` runs properly, we can serve it locally by running the command 
`supabase functions serve <function-name>`.

e.g.

    supabase functions serve reverse-string --env-file ./supabase/functions/.env.local --no-verify-jwt

When served, refer to the line in the terminal, `Serving functions on` because this will be the base URL for us to access our `Edge Functions`.

    k@MacBookAir coding-exercise % supabase functions serve reverse-string --env-file ./supabase/functions/.env.local --no-verify-jwt
    Setting up Edge Functions runtime...
    Env name cannot start with SUPABASE_, skipping: SUPABASE_SERVICE_KEY
    Env name cannot start with SUPABASE_, skipping: SUPABASE_URL
    Env name cannot start with SUPABASE_, skipping: SUPABASE_ANON_KEY
    Serving functions on http://127.0.0.1:54321/functions/v1/<function-name>
    Using supabase-edge-runtime-1.67.4 (compatible with Deno v1.45.2)

Sample usage:

    // Curl
    curl "http://127.0.0.1:54321/functions/v1/reverse-string"

    // Javascript
    fetch("http://127.0.0.1:54321/functions/v1/reverse-string"); 


### Deploy
---
After testing our `Edge Function` locally, we can now deploy it by running the command `supabase functions deploy <function-name>`.