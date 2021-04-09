BEGIN;

INSERT INTO "adminLogin" ("username", "password")
VALUES
(
    'admin',
    -- passwword = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
);
INSERT INTO "clients" ("name", "number", "email", "type", "category")
VALUES
(
    'Kurapika',
    '555-0011',
    'kurapika@gmail.com',
    'clean',
    'potentialClients'
),
(
    'Holo',
    '123-4567',
    'breadfather@gmail.com',
    'sod',
    'potentialClients'
),
(
    'Leorio',
    '333-6767',
    'leorio@gmail.com',
    'lawn',
    'potentialClients'
);

COMMIT;