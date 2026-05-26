import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://mczfpdqycbrkoxuieycr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jemZwZHF5Y2Jya294dWlleWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NzgyOTcsImV4cCI6MjA5NTM1NDI5N30.xRRQjarvbShT5656Ea9oDcABCAgxT4LhekC9IXl4tTA'
)
