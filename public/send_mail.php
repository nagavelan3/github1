<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        $data = $_POST;
    }

    $to = "nagavelan2005@gmail.com";
    $subject = isset($data['subject']) ? $data['subject'] : "New Form Submission - CMP Builders";
    
    $message = "";
    foreach ($data as $key => $value) {
        if ($key !== 'subject' && $key !== 'type') {
            $message .= ucfirst(str_replace('_', ' ', $key)) . ": " . htmlspecialchars($value) . "\n";
        }
    }

    $headers = "From: no-reply@cmpbuilders.com" . "\r\n" .
               "Reply-To: " . ($data['email'] ?? 'no-reply@cmpbuilders.com') . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
