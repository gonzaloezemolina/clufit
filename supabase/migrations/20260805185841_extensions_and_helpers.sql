-- Extensions and shared helpers used by every subsequent migration.

create extension if not exists "pgcrypto";

-- Every table with created_at/updated_at (see docs/06-database-design.md "Auditoría")
-- uses this trigger to keep updated_at current on every row update.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
