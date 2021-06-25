import { serve } from "https://deno.land/std@0.79.0/http/server.ts"
const handler = serve({ port: 80 })

console.log("Serving at 80")

for await (const req of handler) {
 req.respond({ body: "Hello World!\n" })
}