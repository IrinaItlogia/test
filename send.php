<?php

$to = 'i.s.vorobjeva@yandex.ru';
$subject = 'Заказ с сайта';

if ( isset($_POST['form-phone']) ) {
    $message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
            <body>
                <p>Заказ прайса</p>
                <p>Имя: '.$_POST['form-name'].'</p>
                <p>Телефон: '.$_POST['form-phone'].'</p>
                <p>Email: '.$_POST['form-email'].'</p>
            </body>
        </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <i.s.vorobjeva@yandex.ru>\r\n";
    mail($to, $subject, $message, $headers);
} 
 
?>
