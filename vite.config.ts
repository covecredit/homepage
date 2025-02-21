import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const lordsPrayer = `
Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come;
thy will be done;
on earth as it is in heaven.
Give us this day our daily bread.
And forgive us our trespasses,
as we forgive those who trespass against us.
And lead us not into temptation;
but deliver us from evil.
For thine is the kingdom,
the power and the glory,
for ever and ever.
Amen.
`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'lords-prayer-easter-egg',
      writeBundle() {
        console.log('\x1b[36m%s\x1b[0m', lordsPrayer)
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})