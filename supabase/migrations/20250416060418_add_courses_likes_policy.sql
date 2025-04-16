CREATE POLICY "Restrict users to only get their own [courses_likes]"
ON "public"."courses_likes" FOR SELECT
TO authenticated
USING (
    user_id = (SELECT id FROM "public"."users" WHERE auth_user_id = auth.uid())
);