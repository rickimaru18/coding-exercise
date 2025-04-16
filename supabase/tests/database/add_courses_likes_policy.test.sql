BEGIN;
    SELECT PLAN(3);

    SELECT policies_are(
        'public',
        'courses_likes',
        ARRAY [
            'Restrict users to only get their own [courses_likes]'
        ]
    );
    
    SELECT policy_cmd_is(
        'courses_likes',
        'Restrict users to only get their own [courses_likes]',
        'SELECT'
    );

    SELECT policy_roles_are(
        'public',
        'courses_likes',
        'Restrict users to only get their own [courses_likes]',
        ARRAY[
            'authenticated'
        ]
    );
    
    SELECT * FROM FINISH();
ROLLBACK;