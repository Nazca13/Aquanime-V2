import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export interface Contact {
  id: string
  full_name: string
  email: string
  subject?: string
  message: string
  created_at: string
}

export interface Karya {
  id: string
  title: string
  description: string
  author_name: string
  author_email: string
  category: 'ilustrasi' | 'tulisan' | 'musik' | 'video' | 'lainnya'
  media_link?: string
  image_url?: string
  file_path?: string
  created_at: string
}

export interface Feedback {
  id: string
  name?: string
  email?: string
  type: 'bug' | 'saran' | 'umum' | 'fitur_baru' | 'desain' | 'konten' | 'lainnya'
  location?: string
  description: string
  created_at: string
}

export interface Idea {
  id: string
  name: string
  email: string
  category: 'proyek_kreatif' | 'event' | 'konten' | 'lainnya'
  title: string
  description: string
  created_at: string
}