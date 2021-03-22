<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/scr/Exception.php';
    require 'phpmailer/scr/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);


    $mail->setFrom('angelina.petrova35@gmail.com');
    $mail->addAddress('smm.by.vv@gmail.com');
    $mail->Subject = 'Данные участника';

    $body = '<h1>Добро пожаловать!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['number']))){
        $body.='<p><strong>Номер:</strong> '.$_POST['number'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    
    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];
    header('Content-type: application/json');
    enco json_encode($response);
?>

