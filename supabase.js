// The Daily Chronicle
// Supabase Connection

const SUPABASE_URL = "https://fqdgcjxxlegnayngkljy.supabase.co";

const SUPABASE_KEY = "sb_publishable_XaQRlBxML9H6Kdtey0RjZg_Jcg4v_cB";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase loaded.");
