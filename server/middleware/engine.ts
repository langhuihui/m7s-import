import type { IncomingMessage, ServerResponse } from 'http'
const engineHTML = `
<!DOCTYPE html>
<html>

<head>
  <meta name="go-import" content="m7s.live/engine/v4 git https://github.com/Monibuca/engine">
  <meta name="go-source"
    content="m7s.live/engine/v4 _ https://github.com/Monibuca/engine/tree/v4{/dir} https://github.com/Monibuca/engine/tree/v4{/dir}/{file}#L{line}">
  <meta http-equiv="refresh" content="0; url=https://pkg.go.dev/m7s.live/engine/v4">
</head>

<body>
  Nothing to see here. Please <a href="https://pkg.go.dev/m7s.live/engine/v4">move along</a>.
</body>

</html>
`
export default async (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const parts = url.pathname.split('/')
  switch (parts[1]) {
    case 'engine':
      res.end(engineHTML)
      break
    case 'plugin':
      res.end(`<!DOCTYPE html>
<html>

<head>
  <meta name="go-import" content="m7s.live/plugin/${parts[2]}/v4 git https://github.com/Monibuca/plugin-${parts[2]}">
  <meta name="go-source"
    content="m7s.live/plugin/${parts[2]}/v4 _ https://github.com/Monibuca/plugin-${parts[2]}/tree/v4{/dir} https://github.com/Monibuca/plugin-${parts[2]}/tree/v4{/dir}/{file}#L{line}">
  <meta http-equiv="refresh" content="0; url=https://pkg.go.dev/m7s.live/plugin/${parts[2]}/v4">
</head>

<body>
  Nothing to see here. Please <a href="https://pkg.go.dev/m7s.live/plugin/${parts[2]}/v4">move along</a>.
</body>

</html>     
      `)
  }
}