<?php
// $method = $_SERVER['REQUEST_METHOD'];
// //Script Foreach
// $c = true;
// if ( $method === 'POST' ) {
// 	$project_name = trim($_POST["project_name"]);
// 	$admin_email  = trim($_POST["admin_email"]);
// 	$form_subject = trim($_POST["form_subject"]);
// 	foreach ( $_POST as $key => $value ) {
// 		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
// 			$message .= "
// 			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
// 				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
// 				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
// 			</tr>
// 			";
// 		}
// 	}
// } else if ( $method === 'GET' ) {
// 	$project_name = trim($_GET["project_name"]);
// 	$admin_email  = trim($_GET["admin_email"]);
// 	$form_subject = trim($_GET["form_subject"]);
// 	foreach ( $_GET as $key => $value ) {
// 		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
// 			$message .= "
// 			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
// 				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
// 				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
// 			</tr>
// 			";
// 		}
// 	}
// }
// $message = "<table style='width: 100%;'>$message</table>";
// function adopt($text) {
// 	return '=?UTF-8?B?'.Base64_encode($text).'?=';
// }
// $headers = "MIME-Version: 1.0" . PHP_EOL .
// "Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;
// mail($admin_email, adopt($form_subject), $message, $headers );
$text2 = "Заявка с сайта Ремонт квартир и домов!";

$site = "<p>" . "От кого: " . "STREDIAR; " . "</p>";
$text = "<p>" . "Заголовок: " . "Заявка с сайта Ремонт квартир и домов!; " . "</p>";
$block_click_name = "<p>" . "Блок: " . $_POST["block_click"] . ";"  . "</p>";
$tab = "<p>" . "Вкладка: " . $_POST["tab"] . ";"  . "</p>";
$button_name = "<p>" . "Кнопка: " . $_POST["button_name"] . ";"  . "</p>";
$keyword = "<p>" . "Ключевая фраза/слово: " . $_POST["keyword"] . ";"  . "</p>";
if($_POST["keyword"] == ""){
	$keyword = "<p> Ключевая фраза/слово: --- ; </p>";
}
$utm_medium = "<p>" . "Вид трафика: " . $_POST["utm_medium"] . ";"  . "</p>";
if($_POST["utm_medium"] == ""){
	$utm_medium = "<p> Вид трафика: --- ; </p>";
}

$name = "<p>" . "Имя: " . htmlspecialchars($_POST["name"]) . ";"  . "</p>";
$tel = "<p>" . "Номер телефона: " . htmlspecialchars($_POST["tel"]) . ";"  . "</p>";
$choice1 ="<p>" . "Где Вы хотели сделать ремонт: " . $_POST["choice1"] . ";"  . "</p>";
$choice2 ="<p>" . "Что именно вы бы хотели сделать: " . $_POST["choice2"] . ";"  . "</p>";
$choice3 ="<p>" . "Когда Вы желаете начать выполнение работ: " . $_POST["choice3"] . ";"  . "</p>";
$choice4 ="<p>" . "Примерный бюджет на который вы рассчитываете: " . $_POST["choice4"] . ";" . "</p>";
$choice5 ="<p>" . "Где находится объект: " . $_POST["choice5"] . ";"  . "</p>";
$choice6 ="<p>" . "Кто будет производить закупку и доставку материала: " . $_POST["choice6"] . ";" . "</p>";
$message2 ="<p>" . "Сообщение: " . $_POST["message2"] . ";" . "</p>";

if($_POST["choice2"]){
	$message = $site . $text . $block_click_name . $tab . $button_name . $keyword  . $utm_medium . $choice1 . $choice2 . $choice3 . $choice4 . $choice5 . $choice6 . $name . $tel ;
}else if($_POST["message2"]){
	$message = $site . $text . $block_click_name . $tab . $button_name . $keyword  . $utm_medium . $name . $tel . $message2;
}else{
	$message = $site . $text . $block_click_name . $tab . $button_name . $keyword  . $utm_medium . $name . $tel;
}



$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

@mail("info@strediar.ru", $text2, $message, $headers);

?>