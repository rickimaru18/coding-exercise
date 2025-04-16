## Add RLS Policy to Liked Courses

Added migration file to implement policy,
`20250416060418_add_courses_likes_policy.sql`.

### Testing

Checking if correct `auth ID` is set.
<img src="images/add_courses_likes_policy_test_1.png" alt="flow" width="600"/>

Checking if selecting all rows in `courses_likes` table will only return authenticated user data.
<img src="images/add_courses_likes_policy_test_2.png" alt="flow" width="600"/>

Lastly, checking when role is reverted back to `postgres`, it will show all rows of `courses_likes`.
<img src="images/add_courses_likes_policy_test_3.png" alt="flow" width="600"/>


#### Also, here's the `users` rows for reference.
<img src="images/user_rows.png" alt="flow" width="600"/>