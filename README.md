# ssr-astro-vercel

template features:

* ssr (server side randering) for astro example
* login for astro
* cookie for astro
* astro with svelte
* astro api
* simple database with json
* deploy to vercel as ssr

# for local test with node

astro.config.mjs file is

```
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [svelte()],
});
```

# for deployment to vercel

astro.config.mjs file is

```
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [svelte()]
});
```

please refer to [https://docs.astro.build/en/guides/integrations-guide/vercel/#overview](https://docs.astro.build/en/guides/integrations-guide/vercel/#overview)
