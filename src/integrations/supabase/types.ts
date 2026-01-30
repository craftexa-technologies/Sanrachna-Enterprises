export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          address: string | null
          message: string
          email_sent: boolean | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          address?: string | null
          message: string
          email_sent?: boolean | null
        }
        Update: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          address?: string | null
          message: string
          email_sent?: boolean | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
