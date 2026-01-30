-- Create contact submissions table
create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text not null,
  address text,
  message text not null,
  email_sent boolean default false
);

-- Enable Row Level Security (RLS)
alter table contact_submissions enable row level security;

-- Allow anyone to submit a contact form (Insert only)
create policy "Allow public insertions" on contact_submissions 
for insert with check (true);
