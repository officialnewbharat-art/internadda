import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Fallback data in case Supabase is not configured yet
export const fallbackInternships = [
  {
    id: 1,
    title: 'Python Developer Intern',
    company: 'Corporate Partners',
    domain: 'Python Development',
    stipend: '₹1,000 – ₹10,000 /month',
    remote: true,
    certified: true,
    status: 'active',
    corporate_partner: true,
    vetted_experts: true,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'Corporate Partners',
    domain: 'Web Development',
    stipend: '₹1,000 – ₹10,000 /month',
    remote: true,
    certified: true,
    status: 'active',
    corporate_partner: true,
    vetted_experts: true,
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'Corporate Partners',
    domain: 'Data Science',
    stipend: '₹1,000 – ₹10,000 /month',
    remote: true,
    certified: true,
    status: 'active',
    corporate_partner: true,
    vetted_experts: true,
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: 'UI/UX Design Intern',
    company: 'Design Studios',
    domain: 'Design',
    stipend: '₹2,000 – ₹8,000 /month',
    remote: true,
    certified: false,
    status: 'active',
    corporate_partner: false,
    vetted_experts: true,
    created_at: new Date().toISOString()
  },
  {
    id: 5,
    title: 'Digital Marketing Intern',
    company: 'Growth Agency',
    domain: 'Marketing',
    stipend: '₹1,500 – ₹9,000 /month',
    remote: false,
    certified: true,
    status: 'active',
    corporate_partner: true,
    vetted_experts: false,
    created_at: new Date().toISOString()
  },
  {
    id: 6,
    title: 'AI/ML Intern',
    company: 'Tech Innovations',
    domain: 'Data Science',
    stipend: '₹3,000 – ₹15,000 /month',
    remote: true,
    certified: true,
    status: 'active',
    corporate_partner: true,
    vetted_experts: true,
    created_at: new Date().toISOString()
  }
]
