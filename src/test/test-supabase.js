import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if(!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
    console.log("Attempting to send a test inquiry to Supabase...");
    
    const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
            { 
                name: "Test User", 
                email: "test@example.com", 
                phone: "1234567890", 
                message: "This is a test message to verify the Supabase connection." 
            }
        ]);

    if (error) {
        console.error("Error inserting data:", error.message);
        if (error.message.includes("row-level security")) {
            console.log("\nTIP: Your INSERT policy exists, but you might need a SELECT policy if you use .select(), or check if RLS is correctly applied to 'public.contact_submissions'.");
        }
    } else {
        console.log("SUCCESS! Test data sent successfully (Table exists and RLS allows insertion).");
        console.log("Check your Supabase Table 'contact_submissions' to see the record.");
    }
}

testInsert();
