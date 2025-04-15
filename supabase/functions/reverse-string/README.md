## reverse-string

`reverse-string` is a simple function to reverse a string or text.

The reversed string will also be trimmed.

e.g.<br />
Original string: ` The quick brown fox  `<br />
Reversed string: `xof nworb kciuq ehT`

### Input
---
Parameters:

- `text` - String format.

### Output
---

#### Status 200
    
    {
        "original": "The quick brown fox",
        "reversed": "xof nworb kciuq ehT"
    }

#### Status 400

    {
        "error": "[text] param is required."
    }

#### Status 405

    {
        "error": "Only GET requests are allowed."
    }


### Sample usage
---
When called via REST, it will look like this...

    functions/v1/reverse-string?text=sample

e.g.

    // Curl
    curl "http://127.0.0.1:54321/functions/v1/reverse-string?text=sample"

    // Javascript
    fetch("http://127.0.0.1:54321/functions/v1/reverse-string?text=sample"); 

### Running test
---
To execute tests, run the command

    deno test --allow-all --env-file=supabase/functions/.env.local supabase/functions/tests/reverse-string-test.ts

Make sure to include `.env` file.