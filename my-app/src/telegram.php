<?php
/*https://api.telegram.org/bot1124019736:AAFtiYmf1YgzsQjqZoEWLbULsNMSBIdTI6o/getUpdates
$token = "1124019736:AAFtiYmf1YgzsQjqZoEWLbULsNMSBIdTI6o";
$chat_id = "-414953100";


*/

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1124019736:AAFtiYmf1YgzsQjqZoEWLbULsNMSBIdTI6o";
$chat_id = "-414953100";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if ($sendToTelegram) {
  header('Location: /thankspage');
} else {
  echo "Error";
}


?>