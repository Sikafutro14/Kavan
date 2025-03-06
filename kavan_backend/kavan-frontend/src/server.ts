import 'zone.js/node';
import { ngExpressEngine } from '@angular/ssr';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/kavan-frontend/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index.html';

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*', (req, res) => {
    res.render(indexHtml, { req });
  });

  return server;
}

function run(): void {
  const server = app();
  const port = process.env['PORT'] || 4000;

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
