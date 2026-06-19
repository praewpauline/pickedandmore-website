// =====================================================
// pickedandmore — Config
// =====================================================
const SUPABASE_URL = 'https://qyybouwchjuiyzoiadhy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5eWJvdXdjaGp1aXl6b2lhZGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3OTY1NzUsImV4cCI6MjA5NzM3MjU3NX0.JSk6GLM6qsmoh4lK_-2uoIty87vjo9SWQFyKdcaS_ik';

// ใส่ URL รูป QR PromptPay ที่นี่ (อัปโหลดใน Supabase Storage แล้ว copy URL มาวาง)
const PAYMENT_QR_URL = 'https://qyybouwchjuiyzoiadhy.supabase.co/storage/v1/object/public/slips/Pickedandmore%20copy.png';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
