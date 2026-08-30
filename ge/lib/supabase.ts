import { createClient } from '@supabase/supabase-js';

// ❌ À ÉVITER : instanciation directe à la racine du fichier
// export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, ...);

// ✅ À UTILISER : création du client uniquement quand la page l'appelle
export const getSupabase = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Variables Supabase introuvables au runtime.");
  }

  return createClient(url, key, {
    auth: { persistSession: false }
  });
};
