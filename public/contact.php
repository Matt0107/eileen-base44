<?php
// contact.php

/* -------------------------------------------------------------
   LANG DETECTION (DE or EN) for the fallback page (GET request)
-------------------------------------------------------------- */
function detectLanguage() {
    if (!isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
        return 'en';
    }

    $langHeader = strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']);

    if (strpos($langHeader, 'de') === 0) {
        return 'de';
    }

    return 'en';
}

$lang = detectLanguage();

/* -------------------------------------------------------------
   TEXTS in both languages
-------------------------------------------------------------- */
$text = [
    'de' => [
        'title'        => 'Kontakt – Eileen Baum',
        'infoLine1'    => 'Diese Seite wird ausschließlich vom Kontaktformular der Website verwendet.',
        'backLink'     => 'Zurück zur Kontaktseite',
        'autoRedirect' => 'Sie werden automatisch weitergeleitet…'
    ],
    'en' => [
        'title'        => 'Contact – Eileen Baum',
        'infoLine1'    => 'This page is used exclusively by the website’s contact form.',
        'backLink'     => 'Back to contact page',
        'autoRedirect' => 'You will be redirected automatically…'
    ]
];

$current = $text[$lang];

/* -------------------------------------------------------------
   HANDLE NON-POST REQUEST → FALLBACK PAGE
-------------------------------------------------------------- */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Content-Type: text/html; charset=utf-8');
    ?>
    <!DOCTYPE html>
    <html lang="<?= $lang ?>">
    <head>
        <meta charset="utf-8">
        <title><?= htmlspecialchars($current['title']); ?></title>

        <!-- Automatic redirect after 3 seconds -->
        <meta http-equiv="refresh" content="3;url=/contact" />

        <style>
            body {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                padding: 2rem;
                text-align: center;
            }
            p { margin: 0.5rem 0; }
            a {
                color: #000;
                text-decoration: none;
                border-bottom: 1px solid #ccc;
            }
            a:hover { border-color: #000; }
            .small {
                margin-top: 1rem;
                font-size: 0.9rem;
                color: #666;
            }
        </style>
    </head>

    <body>
        <p><?= htmlspecialchars($current['infoLine1']); ?></p>
        <p><a href="/contact"><?= htmlspecialchars($current['backLink']); ?></a></p>
        <p class="small"><?= htmlspecialchars($current['autoRedirect']); ?></p>
    </body>
    </html>
    <?php
    exit;
}


/* -------------------------------------------------------------
   HANDLE POST REQUEST → SEND EMAIL
-------------------------------------------------------------- */

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name    = isset($data['name']) ? trim($data['name']) : '';
$email   = isset($data['email']) ? trim($data['email']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

$name    = str_replace(["\r", "\n"], ' ', $name);
$subject = str_replace(["\r", "\n"], ' ', $subject);
$email   = str_replace(["\r", "\n"], '', $email);

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Missing fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

$to      = 'info@eileenbaum.de';
$subjectFull = 'Website Contact: ' . $subject;

$body  = "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Subject: {$subject}\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: Eileen Baum Website <info@eileenbaum.de>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$success = mail($to, $subjectFull, $body, $headers);

header('Content-Type: application/json; charset=utf-8');

if ($success) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail error']);
}
