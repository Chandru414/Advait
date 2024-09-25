<?php
$con = mysqli_connect('localhost', 'advait', 'advaitkishan', 'contact-form');
$msg = "";

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['comments'])) {
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $phone = mysqli_real_escape_string($con, $_POST['phone']);
    $comments = mysqli_real_escape_string($con, $_POST['comments']);
    
    mysqli_query($con, "INSERT INTO details(name, email, phone, comments) VALUES('$name', '$email', '$phone', '$comments')");
    $msg = "Your Enquiry was sent successfully!";
    
    $html = "<table>
                <tr><td>Name: </td><td>$name</td></tr>
                <tr><td>Email Id: </td><td>$email</td></tr>
                <tr><td>Mobile Number: </td><td>$phone</td></tr>
                <tr><td>Comment: </td><td>$comments</td></tr>
             </table>";
    
    require 'path/to/PHPMailer/src/Exception.php';
    require 'path/to/PHPMailer/src/PHPMailer.php';
    require 'path/to/PHPMailer/src/SMTP.php';
    
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 465; // Use 587 for TLS
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->SMTPAuth = true;
        $mail->Username = 'info.advaitupvc@gmail.com';
        $mail->Password = 'jahhopnczqzqozou';
        $mail->setFrom('info.advaitupvc@gmail.com', 'Rahul');
        $mail->addAddress('info.advaitupvc@gmail.com');
        $mail->isHTML(true);
        $mail->Subject = 'New Enquiry';
        $mail->Body = $html;
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true // Set to true if using self-signed certificates
            )
        );
        
        if ($mail->send()) {
            echo $msg;
        } else {
            echo "Error occurred: " . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
