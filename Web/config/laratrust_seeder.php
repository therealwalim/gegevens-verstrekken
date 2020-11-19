<?php

return [
    /**
     * Control if the seeder should create a user per role while seeding the data.
     */
    'create_users' => false,

    /**
     * Control if all the laratrust tables should be truncated before running the seeder.
     */
    'truncate_tables' => true,

    'roles_structure' => [
        'administrator' => [
            'users' => 'c,r,u,d',
            'folders' => 'c,r,u,d',
            'files' => 'c,r,u,d',
            'contacts' => 'c,r,u,d',
            'messages' => 'c,r,u,d',
            'passwords' => 'c,r,u,d',
            'notes' => 'c,r,u,d',
        ],
        'user' => [
            'folders' => 'c,r,u,d',
            'files' => 'c,r,u,d',
            'contacts' => 'c,r,u,d',
            'messages' => 'c,r,u,d',
            'passwords' => 'c,r,u,d',
            'notes' => 'c,r,u,d',
        ],
    ],

    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete'
    ]
];
