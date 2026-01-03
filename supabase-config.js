// Import depuis le CDN (pas besoin de npm install)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Remplace par tes clés (dispo dans Settings > API)
const supabaseUrl = 'https://ton-projet.supabase.co'
const supabaseKey = 'ta-cle-publique-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)
