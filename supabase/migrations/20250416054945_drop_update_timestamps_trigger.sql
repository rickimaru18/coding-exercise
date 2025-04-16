-- Because "courses_likes" does not have the column "updated_at",
-- we should drop the trigger "update_timestamps_trigger" which is
-- created in "20230724211653_initial_schema.sql" migration file.
--
-- Line: CREATE TRIGGER update_timestamps_trigger BEFORE INSERT OR UPDATE ON public.courses_likes FOR EACH ROW EXECUTE FUNCTION update_timestamps();
-- 
-- This trigger drop is needed when seeding data.
DROP TRIGGER IF EXISTS update_timestamps_trigger 
ON "public"."courses_likes";