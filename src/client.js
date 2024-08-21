import { createClient } from '@supabase/supabase-js';

const URL = 'https://voavfmczlaepconeypvi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvYXZmbWN6bGFlcGNvbmV5cHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MTk3MTYsImV4cCI6MjAzOTM5NTcxNn0.xNvo9Ms0RTq_tgakkqwxpBcXo6zL6U8LLY5eoFjteH0';

export const supabase = createClient(URL, API_KEY);